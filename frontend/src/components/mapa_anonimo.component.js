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

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    });

class Mapa extends React.Component{


    constructor(props){
        super(props);

        this.state = {

            measurements_data:{
                id_empresa: 0,
                date: "2022-11-23", 
                type: "O3"
            }


        }

        this.crear_mapa = this.crear_mapa.bind(this);
        this.validateData = this.validateData.bind(this);
   
    }

    validateData(e){
            var json = {
                date: "2022-11-23",
                id_user: 0
                
            }
       
            console.log(json);

            var points_O3 = [];
            var points_CO2 = [];
            var points_NO2 = [];
            var worst_points = [];
            var latitud_ciudad = 0;
            var longitud_ciudad = 0;
                    
                    
                    json.type = "NO2";
                    var result_NO2 = Apis.TemperatureApi.get_higher_measurements(json)
                    result_NO2.then(value3 => {
                        if(value3.data != false){
                        value3.data.forEach(element3 => {
                            points_NO2.push([element3.Latitud, element3.Longitud, element3.Valor]);
                        });
                        }
                        this.crear_mapa(points_NO2, 38.98, -0.1821);
                        })  
                     
                
        }
    

   

    componentDidMount(){
        
        document.getElementById("date").style.display = "none";
        document.getElementById("date_button").style.display = "none";
        
        this.validateData();
        console.log("Current_user: " + this.state.measurements_data.date + this.state.measurements_data.id_user + this.state.measurements_data.type);
        
    }

    crear_mapa(worst_points, latitud_ciudad, longitud_ciudad){
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
    var worst = L.heatLayer(worst_points,{gradient: {0.3: 'blue', 0.6: 'lime', 1: 'red'},
    minOpacity:0.7,
    radius: 25,
    max:8
    }).addTo(map);
console.log("Peores " + worst_points);
   }
       


    

    

        

        

        

        /*var baseMaps = {
            "OpenStreetMap": osm,
        };*/
        
if(worst_points.length > 0){
    var overlayMaps = {
        "Mayor contaminación (máximos)": worst,
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

        var crownHill = L.marker([38.96797739, -0.19109882]).bindPopup('El valor actual de la estación de Gandia es: 0,056 ppm');
            //rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
            
        var parks = L.layerGroup([crownHill]);

        /*layerControl.addOverlay(O3, "Valores O3");
        layerControl.addOverlay(CO2, "Valores CO2");
        layerControl.addOverlay(NO2, "Valores NO2");*/

        layerControl.addOverlay(parks, "Medidas oficiales");
    }




    render(){
        
        return(
            <div>
                <input className="date_input" id="date"></input>
                <input type="submit" id="date_button" onClick={this.validateData}></input>
                <div id="map" className="mapa">
                    
                </div>
            </div>
            
       )
    }
}


export default Mapa