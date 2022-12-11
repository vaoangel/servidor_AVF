import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';
import "leaflet.heat";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import {connect} from 'react-redux'
import Apis from '../router/index';

const mapDispatchToProps = dispatch => ({
    get_measurements_by_type: (id_user, date, type) =>
    dispatch({ type: "MEASUREMENTS",method:"get_measurements_by_type",api:"TemperatureApi", payload:{id_user, date, type}})
 
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
        var json = {
            date: this.state.measurements_data.date,
            id_user: this.state.measurements_data.id_user,
            type: this.state.measurements_data.type
        }

        var points_O3 = [];
        var points_CO2 = [];
        var points_NO2 = [];

        var result_O3 = Apis.TemperatureApi.get_measurements_by_type(json)
        result_O3.then(value => {
            value.data.forEach(element => {
                points_O3.push([element.Latitud, element.Longitud, element.Valor]);
            });


            json.type = "CO2";
            var result_CO2 = Apis.TemperatureApi.get_measurements_by_type(json)
            result_CO2.then(value2 => {
                value2.data.forEach(element2 => {
                    points_CO2.push([element2.Latitud, element2.Longitud, element2.Valor]);
                });
                
                json.type = "NO2";
                var result_NO2 = Apis.TemperatureApi.get_measurements_by_type(json)
                result_NO2.then(value3 => {
                    value3.data.forEach(element3 => {
                        points_NO2.push([element3.Latitud, element3.Longitud, element3.Valor]);
                    });
                    this.crear_mapa(points_O3, points_CO2, points_NO2);
                    })  
                })    
            })
            
        

    }

    componentDidMount(){
        this.validateData();
        console.log("Current_user: " + this.state.measurements_data.date + this.state.measurements_data.id_user + this.state.measurements_data.type);
        
    }

    crear_mapa(points_O3, points_CO2, points_NO2){
        var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
            denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
            aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
            golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

        var cities = L.layerGroup([littleton, denver, aurora, golden]);
        var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        });


        var map = L.map('map', {
            center: [53, -76],
            zoom: 10,
            layers: osm
        });

        var heatMapPoints = [];

        console.log("en crear_mapa "+ points_O3);
            points_O3.forEach(element => {
                console.log("latitud" + element[0]);
                console.log("longitud" + element[1]);
                console.log("valor" + element[2]);
                heatMapPoints.push([element[0], element[1], element[2]]);
        });
        console.log(heatMapPoints);
   
        var O3 = L.heatLayer(points_O3,{gradient: {0.1: 'blue', 0.2: 'lime', 0.5: 'red'},
            minOpacity:1,
            radius: 50
            }).addTo(map);

        var NO = L.heatLayer(points_NO2,{gradient: {0.1: 'blue', 0.2: 'lime', 0.5: 'red'},
        minOpacity:0.2,
        radius: 50
        });
        var CO2 = L.heatLayer(points_CO2,{gradient: {0.1: 'blue', 0.2: 'lime', 0.5: 'red'},
        minOpacity:0.2,
        radius: 50
        });

        var baseMaps = {
            "OpenStreetMap": osm,
        };

        var overlayMaps = {
            "Ozono (O3)": O3,
            "Dióxido de carbono (CO2)": CO2,
            "Oxido de nitrogeno (NO)": NO

        };
        var layerControl = L.control.layers(overlayMaps).addTo(map);
        L.Marker.prototype.options.icon = DefaultIcon;

        var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
            rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
            
        var parks = L.layerGroup([crownHill, rubyHill]);

        layerControl.addOverlay(parks, "Medidas oficiales");
    }




    render(){
        return(
            <div id="map" className="mapa"></div>
       )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AreaUSuario)