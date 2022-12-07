import React from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';
import "leaflet.heat";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    });

class AreaUSuario extends React.Component{


    constructor(props){
        super(props);
   
    }

    componentDidMount(){
        this.crear_mapa();
    }

    crear_mapa(){
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
            center: [39.73, -104.99],
            zoom: 10,
            layers: osm
        });
        var O3 = L.heatLayer([
        [39.61, -105.02, 1], // lat, lng, intensity
        [39.74, -104.99, 0.5],
        [39.74, -104.99, 0.6],
        [39.77, -105.23, 0.7],
        [39.51, -105.02, 1], // lat, lng, intensity
        [39.64, -104.99, 0.5],
        [39.64, -104.99, 0.6],
        [39.67, -105.23, 0.7],
        ],{gradient: {0.1: 'blue', 0.2: 'lime', 0.5: 'red'},
        minOpacity:0.2,
        radius: 50
        }).addTo(map);

        var NO = L.heatLayer([
        [38.61, -105.02, 1], // lat, lng, intensity
        [38.74, -104.99, 0.5],
        [38.74, -104.99, 0.6],
        [38.77, -105.23, 0.7],
        [38.51, -105.02, 1], // lat, lng, intensity
        [38.64, -104.99, 0.5],
        [38.64, -104.99, 0.6],
        [38.67, -105.23, 0.7],
        ],{gradient: {0.1: 'blue', 0.2: 'lime', 0.5: 'red'},
        minOpacity:0.2,
        radius: 50
        })/*.addTo(map)*/;
        var CO2 = L.heatLayer([
        [37.61, -105.02, 1], // lat, lng, intensity
        [37.74, -104.99, 0.5],
        [37.74, -104.99, 0.6],
        [37.77, -105.23, 0.7],
        [37.51, -105.02, 1], // lat, lng, intensity
        [37.64, -104.99, 0.5],
        [37.64, -104.99, 0.6],
        [37.67, -105.23, 0.7],
        ],{gradient: {0.1: 'blue', 0.2: 'lime', 0.5: 'red'},
        minOpacity:0.2,
        radius: 50
        })/*.addTo(map)*/;

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


export default AreaUSuario