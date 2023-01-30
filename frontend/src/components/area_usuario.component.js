import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';
import "leaflet.heat";
import h337 from "heatmap.js";
import HeatmapOverlay from "leaflet-heatmap"

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { connect } from 'react-redux'
import 'leaflet-legend';
import '@gnatih/leaflet.legend';
import Apis from '../router/index';

const mapDispatchToProps = dispatch => ({

    /*get_higher_measurements: (id_user, date) =>
    dispatch({ type: "MEASUREMENTS",method:"get_higher_measurements",api:"TemperatureApi", payload:{id_user, date}}),
    get_measurements_by_type: (id_user, date, type) =>
    dispatch({ type: "MEASUREMENTS",method:"get_measurements_by_type",api:"TemperatureApi", payload:{id_user, date, type}})
 */
});

const mapStateToProps = state => ({
    currentUser: state.LoginReducer.currentUser,
});

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

class AreaUSuario extends React.Component {


    constructor(props) {
        super(props);
        let date = new Date();
        var fechaactual = date.toISOString().split('T')[0];

        this.state = {

            
            measurements_data: {
                id_user: this.props.currentUser[0].idUsuario,
                date: fechaactual,
                type: "O3"
            }


        }

        this.crear_mapa = this.crear_mapa.bind(this);
        this.validateData = this.validateData.bind(this);

    }

    validateData(e) {
        if (this.props.currentUser[0].Tipo == "user") {
            var json = {
                date: this.state.measurements_data.date,
                id_user: this.state.measurements_data.id_user,
                type: this.state.measurements_data.type
            }

            
            var points_O3 = [];
            var points_CO2 = [];
            var points_NO2 = [];
            var worst_points = [];
            var latitud_ciudad = 0;
            var longitud_ciudad = 0;

            //console.log("Usuario " + json.id_user + " Fecha " + json.date);
            var json2 = {
                date: this.state.measurements_data.date,
                id_user: this.state.measurements_data.id_user
            }
            var more_contaminated = Apis.TemperatureApi.get_higher_measurements(json2)
            more_contaminated.then(value4 => {
                if (value4.data != false) {
                    value4.data.forEach(element4 => {
                        worst_points.push([element4.Latitud, element4.Longitud, element4.Valor]);
                    });
                }
            })
            var result_O3 = Apis.TemperatureApi.get_measurements_by_type(json)
            result_O3.then(value => {
                if (value.data != false) {
                    latitud_ciudad = value.data[0].LatitudCiudad;
                    longitud_ciudad = value.data[0].LongitudCiudad;
                    //console.log("lat : " + latitud_ciudad + " long: " + longitud_ciudad);
                    value.data.forEach(element => {
                        points_O3.push([element.Latitud, element.Longitud, element.Valor]);
                    });
                }


                json.type = "CO2";
                var result_CO2 = Apis.TemperatureApi.get_measurements_by_type(json)
                result_CO2.then(value2 => {
                    if (value2.data != false) {
                        value2.data.forEach(element2 => {
                            points_CO2.push([element2.Latitud, element2.Longitud, element2.Valor]);
                        });
                    }


                    json.type = "NO2";
                    var result_NO2 = Apis.TemperatureApi.get_measurements_by_type(json)
                    result_NO2.then(value3 => {
                        if (value3.data != false) {
                            value3.data.forEach(element3 => {
                                points_NO2.push([element3.Latitud, element3.Longitud, element3.Valor]);
                            });
                        }
                        this.crear_mapa(worst_points, points_O3, points_CO2, points_NO2, latitud_ciudad, longitud_ciudad);
                    })
                })
            })
            console.log("JSON: "+ json.date + " " + json.id_user + " " + json.type);


        } else {    //ES UN USUARIO DE UNA EMPRESA
            var json = {
                date: this.state.measurements_data.date,
                id_empresa: this.props.currentUser[0].idEmpresa,
                type: this.state.measurements_data.type
            }
            var date = document.getElementById("date").value;
            if (date != "") {
                json.date = date;
                console.log("Filtrar por nueva fecha");
            }
            console.log(json);

            var points_O3 = [];
            var points_CO2 = [];
            var points_NO2 = [];
            var worst_points = [];
            var latitud_ciudad = 0;
            var longitud_ciudad = 0;

            var result_O3 = Apis.TemperatureApi.get_measurements_by_type_admin(json)
            result_O3.then(value => {
                if (value.data != false) {
                    latitud_ciudad = value.data[0].LatitudCiudad;
                    longitud_ciudad = value.data[0].LongitudCiudad;
                  
                value.data.forEach(element => {
                    points_O3.push([element.Latitud, element.Longitud, element.Valor]);
                });

                }


                json.type = "CO2";
                var result_CO2 = Apis.TemperatureApi.get_measurements_by_type_admin(json)
                result_CO2.then(value2 => {
                    if (value2.data != false) {
                        value2.data.forEach(element2 => {
                            points_CO2.push([element2.Latitud, element2.Longitud, element2.Valor]);
                        });
                    }


                    json.type = "NO2";
                    var result_NO2 = Apis.TemperatureApi.get_measurements_by_type_admin(json)
                    result_NO2.then(value3 => {
                        if (value3.data != false) {
                            value3.data.forEach(element3 => {
                                points_NO2.push([element3.Latitud, element3.Longitud, element3.Valor]);
                            });
                        }
                        this.crear_mapa(worst_points, points_O3, points_CO2, points_NO2, latitud_ciudad, longitud_ciudad);
                    })
                })
            })
        }
    }

    componentDidMount() {
        if (this.props.currentUser[0].Tipo == "user") {
            document.getElementById("date").style.display = "none";
            document.getElementById("date_button").style.display = "none";
        }
        this.validateData();
        console.log("Current_user: " + this.state.measurements_data.date + this.state.measurements_data.id_user + this.state.measurements_data.type);

    }


    crear_mapa(worst_points, points_O3, points_CO2, points_NO2, latitud_ciudad, longitud_ciudad){
 /*

    crear_mapa(worst_points, points_O3, points_CO2, points_NO2, latitud_ciudad, longitud_ciudad) {
        /*var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
            denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
            aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
            golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

        var cities = L.layerGroup([littleton, denver, aurora, golden]);*/

        var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 15,
            attribution: '© OpenStreetMap'
        });

        var container = L.DomUtil.get('map');
        if (container != null) {
            container._leaflet_id = null;
        }

        var map = new L.map('map', {
            center: [latitud_ciudad, longitud_ciudad],
            zoom: 13,
            layers: osm
        });

    
     
        
   if(worst_points.length > 0){
    var worst = L.heatLayer(worst_points,{gradient: {0.15: 'blue', 0.3: 'lime', 0.5: 'red'},
    minOpacity:0.4,
    radius: 25,
    maxZoom: 15,
    max:150
    }).addTo(map);
console.log("Peores " + worst_points);
   }
       
if(worst_points.length > 0){
    var O3 = L.heatLayer(points_O3,{gradient: {0.3: 'blue', 0.6: 'lime', 1: 'red'},
    minOpacity:0.7,
    radius: 25,
    max: 8
    });
    console.log("Ozono " + points_O3);

    var NO2 = L.heatLayer(points_NO2,{gradient: {0.3: 'blue', 0.6: 'lime', 1: 'red'},
    minOpacity:0.7,
    radius: 25,
    max:20
    });
    console.log("NO2 " + points_NO2);

    var CO2 = L.heatLayer(points_CO2,{gradient: {0.3: 'blue', 0.6: 'lime', 1: 'red'},
    minOpacity:0.7,
    radius: 25,
    max:8
    });
    console.log("CO2 " + points_CO2);
} else {
    var O3_markers = [];
    points_O3.forEach(O3 => {
        O3_markers.push(L.marker([O3[0], O3[1]]).bindPopup(String(O3[2])));
    });
        var O3 = L.layerGroup(O3_markers);
        console.log("Marcadores_O3 " + O3);

    var CO2_markers = [];
    points_CO2.forEach(CO2 => {
        CO2_markers.push(L.marker([CO2[0], CO2[1]]).bindPopup(String(CO2[2])));
    });
    var CO2 = L.layerGroup(CO2_markers);

    var NO2_markers = [];
    points_NO2.forEach(NO2 => {
        NO2_markers.push(L.marker([NO2[0], NO2[1]]).bindPopup(String(NO2[2])));
    });
        var NO2 = L.layerGroup(NO2_markers);

        
}
        
        
if(worst_points.length > 0){
    var overlayMaps = {
        "Mayor contaminación (máximos)": worst,
        "Ozono (O3)": O3,
        "Dióxido de carbono (CO2)": CO2,
        "Oxido de nitrogeno (NO2)": NO2

    };
} else {
    var overlayMaps = {
        "Ozono (O3)": O3,
        "Dióxido de carbono (CO2)": CO2,
        "Oxido de nitrogeno (NO2)": NO2

    };

    var overlayMaps = {
        "Ozono (O3)": O3,
        "Dióxido de carbono (CO2)": CO2,
        "Oxido de nitrogeno (NO2)": NO2
    };
}

      


        







        if (worst_points.length > 0) {
            var worst = L.heatLayer(worst_points, {
                gradient: { 0.3: 'blue', 0.6: 'lime', 1: 'red' },
                minOpacity: 0.7,
                radius: 25,
                max: 8
            }).addTo(map);
            console.log("Peores " + worst_points);
        }

        if (worst_points.length > 0) {
            var O3 = L.heatLayer(points_O3, {
                gradient: { 0.3: 'blue', 0.6: 'lime', 1: 'red' },
                minOpacity: 0.7,
                radius: 25,
                max: 8
            });
            console.log("Ozono " + points_O3);

            var NO2 = L.heatLayer(points_NO2, {
                gradient: { 0.3: 'blue', 0.6: 'lime', 1: 'red' },
                minOpacity: 0.7,
                radius: 25,
                max: 20
            });
            console.log("NO2 " + points_NO2);

            var CO2 = L.heatLayer(points_CO2, {
                gradient: { 0.3: 'blue', 0.6: 'lime', 1: 'red' },
                minOpacity: 0.7,
                radius: 25,
                max: 8
            });
            console.log("CO2 " + points_CO2);
        } else {
            var O3_markers = [];
            points_O3.forEach(O3 => {
                O3_markers.push(L.marker([O3[0], O3[1]]).bindPopup(String(O3[2])));
            });
            var O3 = L.layerGroup(O3_markers)/*.addTo(map)*/;
            console.log("Marcadores_O3 " + O3);

            var CO2_markers = [];
            points_CO2.forEach(CO2 => {
                CO2_markers.push(L.marker([CO2[0], CO2[1]]).bindPopup(String(CO2[2])));
            });
            var CO2 = L.layerGroup(CO2_markers);

            var NO2_markers = [];
            points_NO2.forEach(NO2 => {
                NO2_markers.push(L.marker([NO2[0], NO2[1]]).bindPopup(String(NO2[2])));
            });
            var NO2 = L.layerGroup(NO2_markers);


        }

        if (worst_points.length > 0) {
            var overlayMaps = {
                "Calidad del aire global": worst,
                "Ozono (O3)": O3,
                "Dióxido de carbono (CO2)": CO2,
                "Oxido de nitrogeno (NO2)": NO2

            };
        } else {
            var overlayMaps = {
                "Ozono (O3)": O3,
                "Dióxido de carbono (CO2)": CO2,
                "Oxido de nitrogeno (NO2)": NO2

            };

            var overlayMaps = {
                "Ozono (O3)": O3,
                "Dióxido de carbono (CO2)": CO2,
                "Oxido de nitrogeno (NO2)": NO2
            };
        }

        var layerControl = L.control.layers(overlayMaps).addTo(map);
        L.Marker.prototype.options.icon = DefaultIcon;

        var crownHill = L.marker([38.96797739, -0.19109882]).bindPopup('El valor actual de la estación de Gandia es: 0,056 ppm');



// //------------------------------------------------------
//         //-----------------PARA INTERPOLAR EL O3----------------
//         //------------------------------------------------------
//         var geojson_o3 = {
//             "type": "FeatureCollection",
//             "features": []
//         };
//         var heatmapData_o3 = []
//         var options = { gridType: 'points', property: 'solRad', units: 'meters' };

//         //PASAR A GEOJSON
//         points_NO2.forEach(function (points_NO2) {
//             geojson_o3.features.push({
//                 "type": "Feature",
//                 "geometry": {
//                     "type": "Point",
//                     "coordinates": [points_NO2[1], points_NO2[0]]
//                 },
//                 "properties": {
//                     "solRad": points_NO2[2]
//                 }
//             });

//         })

//         // //INTERPOLAR DATOS
//        var grid_o3 = turf.interpolate(geojson_o3, 5, options);

//        grid_o3.features.forEach(function (feature) {
//             var centroid_o3 = turf.centroid(feature);
//             heatmapData_o3.push([centroid_o3.geometry.coordinates[1], centroid_o3.geometry.coordinates[0], feature.properties.solRad]);
//         });
//         var data_X = []
//         heatmapData_o3.forEach(O3 => {
//             data_X.push({ 
//                 lat : O3[0],
//                 lng : O3[1],
//                 count : O3[2]
//             });
//         });
//         console.log("Info: " + data_X);

//         var testData = {
//             min: 0,
//             max: 12,
//             data: data_X
//          };
  
//           var baseLayer = L.tileLayer(
//             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
//               attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
//               maxZoom: 18
//             }
//           );
  
//           var cfg = {
//             // radius should be small ONLY if scaleRadius is true (or small radius is intended)
//             "radius": 30,
//             "maxOpacity": 0.5, 
//             // scales the radius based on map zoom
//             "scaleRadius": false, 
//             // if set to false the heatmap uses the global maximum for colorization
//             // if activated: uses the data maximum within the current map boundaries 
//             //   (there will always be a red spot with useLocalExtremas true)
//             "useLocalExtrema": false,
//             // which field name in your data represents the latitude - default "lat"
//             latField: 'lat',
//             // which field name in your data represents the longitude - default "lng"
//             lngField: 'lng',
//             // which field name in your data represents the data value - default "value"
//             valueField: 'count'
//           };
  
  
//           var heatmapLayer = new HeatmapOverlay(cfg);
  
//           var map = new L.Map('map', {
//             center: new L.LatLng(38.9859, -0.18212),
//             zoom: 15,
//             layers: [baseLayer, heatmapLayer]
//           });

//           L.control.Legend({
//             title: "Leyenda",
//             position: "bottomleft",
//             legends: [
//                 {
//                     label: "Contaminación baja",
//                     type: "circle",
//                     radius: 6,
//                     color: "blue",
//                     fillColor: "blue",
//                     fillOpacity: 1,
//                     weight: 1,
//                     inactive: true,
//                 },
//                 {
//                     label: "Contaminación media",
//                     type: "circle",
//                     radius: 6,
//                     color: "lime",
//                     fillColor: "lime",
//                     fillOpacity: 1,
//                     weight: 1,
//                     inactive: true,
//                 },
//                 {
//                     label: "Contaminación alta",
//                     type: "circle",
//                     radius: 6,
//                     color: "red",
//                     fillColor: "red",
//                     fillOpacity: 1,
//                     weight: 1,
//                     inactive: true,
//                 }
//             ]
//         })
//             .addTo(map);
  
//           heatmapLayer.setData(testData);
  
    }

    render(){
        
        return(
            
            <div>
                <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
                <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
                <script src="/build/heatmap.js"></script>
                <script src="/plugins/leaflet-heatmap/leaflet-heatmap.js"></script>
                
                <input className="date_input" id="date"></input>
                <input type="submit" id="date_button" onClick={this.validateData}></input>
                <div id="map" className="mapa">

                </div>
            </div>

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AreaUSuario)