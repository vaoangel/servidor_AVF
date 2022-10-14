import React, { useState, useEffect } from 'react';
import { Card, Box   } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import {  TemperatureApi } from '../router/agent';
import ReactNextPaging from "react-next-paging";
const style = {
 
  color: "white"
};


function AllTemperatures(){

    const [info = new Array(), updateinfo]= useState(new Array());

    useEffect(()=>{
      /*   TemperatureApi.GetAll().then((data)=>{
            updateinfo(data);
        }) */
    }, [])

    if ((info.length!=0) || (info.length >1)) {
        console.log(info);

        return (
      
          <div>

            <div id="temperatura">
               
            <Card sx={{ minWidth: 275 }}>
       
            <div>{renderInfo(info.temperatura)}</div>
            </Card>
            </div>

          </div>
        );
      }else{
        return (
          <div>
            
            <img src="https://media.giphy.com/media/3y0oCOkdKKRi0/giphy.gif"></img>
            <h1>Cargando</h1>
          </div>
        );
      }
}


function renderInfo(data){
    let html = []      
    let sort = data.sort((a, b) =>
    a.fecha.split('/').reverse().join().localeCompare(b.fecha.split('/').reverse().join())); 

    console.log(sort);
    sort.map((elements) => {
        return html = [...html, 
            <div key={elements.id} className="slide" style={{backgroundImage:"url(https://alca.tv/static/u/522d6a86-0dcf-4554-8b22-7655d65a1f66_opt.png)"}}>
                <div style={style} className="number">Temperatura mínima: {elements.temp_min}</div>
                <div style={style} className="number">Temperatura máxima: {elements.temp_max}</div>
                <div style={style} className="number">Fecha: {elements.fecha}</div>


                <div className="body">
                {/* <div className="location">Shibuya, Japan</div> */}
                <div style={style} className="headline">ID :{elements.id}</div>
                 
                </div>
            </div>
        ]
    })

    return html;
}


export default AllTemperatures