import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';
import "leaflet.heat";
//import "leaflet-timedimension";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import {connect} from 'react-redux'
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

class AreaUSuario extends React.Component{


    constructor(props){
        super(props);

        this.state = {

            measurements_data:{
                id_user: this.props.currentUser[0].idUsuario,
                date: "2022-11-23", 
                type: "O3"
            }


        }

        this.crear_mapa = this.crear_mapa.bind(this);
        this.validateData = this.validateData.bind(this);
   
    }

    validateData(e){
        if(this.props.currentUser[0].Tipo == "user"){
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
                if(value4.data != false){
                    value4.data.forEach(element4 => {
                        worst_points.push([element4.Latitud, element4.Longitud, element4.Valor]);
                    });
                }
            })
            var result_O3 = Apis.TemperatureApi.get_measurements_by_type(json)
            result_O3.then(value => {
                if(value.data != false){
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
                    if(value2.data != false){
                        value2.data.forEach(element2 => {
                        points_CO2.push([element2.Latitud, element2.Longitud, element2.Valor]);
                    });
                    }
                    
                    
                    json.type = "NO2";
                    var result_NO2 = Apis.TemperatureApi.get_measurements_by_type(json)
                    result_NO2.then(value3 => {
                        if(value3.data != false){
                        value3.data.forEach(element3 => {
                            points_NO2.push([element3.Latitud, element3.Longitud, element3.Valor]);
                        });
                        }
                        this.crear_mapa(worst_points, points_O3, points_CO2, points_NO2, latitud_ciudad, longitud_ciudad);
                        })  
                    })    
                })
                
            
        } else{
            var json = {
                date: this.state.measurements_data.date,
                id_empresa: this.props.currentUser[0].idEmpresa,
                type: this.state.measurements_data.type
            }
            var date = document.getElementById("date").value;
            if (date != ""){
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
                if(value.data != false){
                    latitud_ciudad = value.data[0].LatitudCiudad;
                    longitud_ciudad = value.data[0].LongitudCiudad;
                    //console.log("lat : " + latitud_ciudad + " long: " + longitud_ciudad);
                value.data.forEach(element => {
                    points_O3.push([element.Latitud, element.Longitud, element.Valor]);
                });
                }


                json.type = "CO2";
                var result_CO2 = Apis.TemperatureApi.get_measurements_by_type_admin(json)
                result_CO2.then(value2 => {
                    if(value2.data != false){
                        value2.data.forEach(element2 => {
                        points_CO2.push([element2.Latitud, element2.Longitud, element2.Valor]);
                    });
                    }
                    
                    
                    json.type = "NO2";
                    var result_NO2 = Apis.TemperatureApi.get_measurements_by_type_admin(json)
                    result_NO2.then(value3 => {
                        if(value3.data != false){
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

    componentDidMount(){
        this.validateData();
        console.log("Current_user: " + this.state.measurements_data.date + this.state.measurements_data.id_user + this.state.measurements_data.type);
        
    }

    crear_mapa(worst_points, points_O3, points_CO2, points_NO2, latitud_ciudad, longitud_ciudad){
        /*var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
            denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
            aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
            golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

        var cities = L.layerGroup([littleton, denver, aurora, golden]);*/
        var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        });

        var container = L.DomUtil.get('map');
        if(container != null){
          container._leaflet_id = null;
        }

        var map = new L.map('map', {
            center: [latitud_ciudad, longitud_ciudad],
            zoom: 13,
            layers: osm
        });
    
        
        
   if(worst_points.length > 0){
    var worst = L.heatLayer(worst_points,{gradient: {0.1: 'blue', 0.4: 'lime', 0.7: 'red'},
    minOpacity:1,
    radius: 50,
    max:150
    }).addTo(map);
console.log("Peores " + worst_points);
   }
       

        var O3 = L.heatLayer(points_O3,{gradient: {0.1: 'blue', 0.4: 'lime', 0.7: 'red'},
            minOpacity:1,
            radius: 50,
            max:150
            });
            console.log("Ozono " + points_O3);

        var NO2 = L.heatLayer(points_NO2,{gradient: {0.1: 'blue', 0.4: 'lime', 0.7: 'red'},
        minOpacity:0.2,
        radius: 50,
        max:150
        });
        console.log("NO2 " + points_NO2);

        var CO2 = L.heatLayer(points_CO2,{gradient: {0.1: 'blue', 0.2: 'lime', 0.7: 'red'},
        minOpacity:0.2,
        radius: 50,
        max:150
        });
        console.log("CO2 " + points_CO2);

        

        /*var baseMaps = {
            "OpenStreetMap": osm,
        };*/
        
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
}
        /*var overlayMaps = {
            "Mayor contaminación (máximos)": worst,
            "Ozono (O3)": O3,
            "Dióxido de carbono (CO2)": CO2,
            "Oxido de nitrogeno (NO2)": NO2

        };*/
        
        var layerControl = L.control.layers(overlayMaps).addTo(map);
        L.Marker.prototype.options.icon = DefaultIcon;

        var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
            rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
            
        var parks = L.layerGroup([crownHill, rubyHill]);

        layerControl.addOverlay(parks, "Medidas oficiales");
    }




    render(){
        
        return(
            <div>
                <input className="date_input" id="date"></input>
                <input type="submit" onClick={this.validateData}></input>
                <div id="map" className="mapa">
                    
                </div>
            </div>
            
       )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AreaUSuario)