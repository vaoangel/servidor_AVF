import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';
import "leaflet.heat";
import h337 from "heatmap.js";
import HeatmapOverlay from "leaflet-heatmap"
// import '@turf/interpolate';
// import * as turf from '@turf/turf';
//import "leaflet-timedimension";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { connect } from 'react-redux'
import 'leaflet-legend';
import '@gnatih/leaflet.legend';
import Apis from '../router/index';
import 'leaflet.idw/src/leaflet-idw.js'

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
            console.log("JSON: " + json.date + " " + json.id_user + " " + json.type);


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


    crear_mapa(worst_points, points_O3, points_CO2, points_NO2, latitud_ciudad, longitud_ciudad) {

       
             
        var data_X = []
        points_O3.forEach(O3 => {
            data_X.push({ 
                lat : O3[0],
                lng : O3[1],
                intensity : O3[2]
            });
        });
        console.log("Info: " + JSON.stringify(points_O3));


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

       

        if (data_X.length > 0) {
                var O3 = L.idwLayer(points_O3,
                    {
                        opacity: 0.5,
                        gradient: { 0.1: 'lime', 0.2: 'blue', 1: 'red' },
                        maxZoom: 17,
                        cellSize: 1,
                        exp: 4,
                        max: 20
                    }).addTo(map);
               } 
            
            console.log("O3 geojson_o3" + JSON.stringify(data_X));
  

        /*
    crear_mapa(worst_points, points_O3, points_CO2, points_NO2, latitud_ciudad, longitud_ciudad) {
        /*var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
            denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
            aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
            golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

        var cities = L.layerGroup([littleton, denver, aurora, golden]);*/
/*
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

    */
   /*     
        
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

   */





/*




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
            /*console.log("Marcadores_O3 " + O3);
    
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
    */



            /*var baseMaps = {
                "OpenStreetMap": osm,
            };*/
            /*
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
            
            */
            //------------------------------------------------------
            //-----------------PARA INTERPOLAR EL O3----------------
            //------------------------------------------------------
            // var geojson_o3 = {
            //     "type": "FeatureCollection",
            //     "features": []
            // };
            // var heatmapData_o3 = []
            // var options = { gridType: 'points', property: 'solRad', units: 'meters' };

            // //PASAR A GEOJSON
            // points_NO2.forEach(function (points_NO2) {
            //     geojson_o3.features.push({
            //         "type": "Feature",
            //         "geometry": {
            //             "type": "Point",
            //             "coordinates": [points_NO2[1], points_NO2[0]]
            //         },
            //         "properties": {
            //             "solRad": points_NO2[2]
            //         }
            //     });

            // })

            // //INTERPOLAR DATOS
            //    var grid_o3 = turf.interpolate(geojson_o3, 5, options);

            //    grid_o3.features.forEach(function (feature) {
            //         var centroid_o3 = turf.centroid(feature);
            //         heatmapData_o3.push([centroid_o3.geometry.coordinates[1], centroid_o3.geometry.coordinates[0], feature.properties.solRad]);
            //     });


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
            // //            data: [{lat: 38.97, lng:-0.184, count: 0.2},{lat: 38.98, lng:-0.18212, count: 1},{lat: 38.981, lng:-0.1822, count: 0.5},{lat: 38.978, lng:-0.18212, count: 1},{lat: 38.98, lng:-0.18212, count: 0.6},{lat: 38.98, lng:-0.18212, count: 1},{lat: 38.98, lng:-0.18212, count: 1},{lat: 38.98, lng:-0.18212, count: 1},{lat: 38.98, lng:-0.18212, count: 1},{lat: 42.0477, lng:-74.1227, count: 1},{lat: 40.0326, lng:-75.719, count: 1},{lat: 40.7128, lng:-73.2962, count: 2},{lat: 27.9003, lng:-82.3024, count: 1},{lat: 38.2085, lng:-85.6918, count: 1},{lat: 46.8159, lng:-100.706, count: 1},{lat: 30.5449, lng:-90.8083, count: 1},{lat: 44.735, lng:-89.61, count: 1},{lat: 41.4201, lng:-75.6485, count: 2},{lat: 39.4209, lng:-74.4977, count: 1},{lat: 39.7437, lng:-104.979, count: 1},{lat: 39.5593, lng:-105.006, count: 1},{lat: 45.2673, lng:-93.0196, count: 1},{lat: 41.1215, lng:-89.4635, count: 1},{lat: 43.4314, lng:-83.9784, count: 1},{lat: 43.7279, lng:-86.284, count: 1},{lat: 40.7168, lng:-73.9861, count: 1},{lat: 47.7294, lng:-116.757, count: 1},{lat: 47.7294, lng:-116.757, count: 2},{lat: 35.5498, lng:-118.917, count: 1},{lat: 34.1568, lng:-118.523, count: 1},{lat: 39.501, lng:-87.3919, count: 3},{lat: 33.5586, lng:-112.095, count: 1},{lat: 38.757, lng:-77.1487, count: 1},{lat: 33.223, lng:-117.107, count: 1},{lat: 30.2316, lng:-85.502, count: 1},{lat: 39.1703, lng:-75.5456, count: 8},{lat: 30.0041, lng:-95.2984, count: 2},{lat: 29.7755, lng:-95.4152, count: 1},{lat: 41.8014, lng:-87.6005, count: 1},{lat: 37.8754, lng:-121.687, count: 7},{lat: 38.4493, lng:-122.709, count: 1},{lat: 40.5494, lng:-89.6252, count: 1},{lat: 42.6105, lng:-71.2306, count: 1},{lat: 40.0973, lng:-85.671, count: 1},{lat: 40.3987, lng:-86.8642, count: 1},{lat: 40.4224, lng:-86.8031, count: 4},{lat: 47.2166, lng:-122.451, count: 1},{lat: 32.2369, lng:-110.956, count: 1},{lat: 41.3969, lng:-87.3274, count: 2},{lat: 41.7364, lng:-89.7043, count: 2},{lat: 42.3425, lng:-71.0677, count: 1},{lat: 33.8042, lng:-83.8893, count: 1},{lat: 36.6859, lng:-121.629, count: 2},{lat: 41.0957, lng:-80.5052, count: 1},{lat: 46.8841, lng:-123.995, count: 1},{lat: 40.2851, lng:-75.9523, count: 2},{lat: 42.4235, lng:-85.3992, count: 1},{lat: 39.7437, lng:-104.979, count: 2},{lat: 25.6586, lng:-80.3568, count: 7},{lat: 33.0975, lng:-80.1753, count: 1},{lat: 25.7615, lng:-80.2939, count: 1},{lat: 26.3739, lng:-80.1468, count: 1},{lat: 37.6454, lng:-84.8171, count: 1},{lat: 34.2321, lng:-77.8835, count: 1},{lat: 34.6774, lng:-82.928, count: 1},{lat: 39.9744, lng:-86.0779, count: 1},{lat: 35.6784, lng:-97.4944, count: 2},{lat: 33.5547, lng:-84.1872, count: 1},{lat: 27.2498, lng:-80.3797, count: 1},{lat: 41.4789, lng:-81.6473, count: 1},{lat: 41.813, lng:-87.7134, count: 1},{lat: 41.8917, lng:-87.9359, count: 1},{lat: 35.0911, lng:-89.651, count: 1},{lat: 32.6102, lng:-117.03, count: 1},{lat: 41.758, lng:-72.7444, count: 1},{lat: 39.8062, lng:-86.1407, count: 1},{lat: 41.872, lng:-88.1662, count: 1},{lat: 34.1404, lng:-81.3369, count: 1},{lat: 46.15, lng:-60.1667, count: 1},{lat: 36.0679, lng:-86.7194, count: 1},{lat: 43.45, lng:-80.5, count: 1},{lat: 44.3833, lng:-79.7, count: 1},{lat: 45.4167, lng:-75.7, count: 2},{lat: 43.75, lng:-79.2, count: 2},{lat: 45.2667, lng:-66.0667, count: 3},{lat: 42.9833, lng:-81.25, count: 2},{lat: 44.25, lng:-79.4667, count: 3},{lat: 45.2667, lng:-66.0667, count: 2},{lat: 34.3667, lng:-118.478, count: 3},{lat: 42.734, lng:-87.8211, count: 1},{lat: 39.9738, lng:-86.1765, count: 1},{lat: 33.7438, lng:-117.866, count: 1},{lat: 37.5741, lng:-122.321, count: 1},{lat: 42.2843, lng:-85.2293, count: 1},{lat: 34.6574, lng:-92.5295, count: 1},{lat: 41.4881, lng:-87.4424, count: 1},{lat: 25.72, lng:-80.2707, count: 1},{lat: 34.5873, lng:-118.245, count: 1},{lat: 35.8278, lng:-78.6421, count: 1}]
            //           };

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

        render() {

            return (

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