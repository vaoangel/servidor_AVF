import React, { useState, useEffect } from 'react';

const DatosOficiales = (props) => {

  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:3000/get_measures_gandia';
    fetch(url)
        .then( response => response.json() )
        .then( data => {
          console.log(data);
          setMeasures(data);
        } )
        .catch( error => console.log(error) );
  }, []);

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
      <title>Uso de Fetch</title>
      <style dangerouslySetInnerHTML={{__html: "\n        body{\n            background-color: cornflowerblue;\n        }\n        table thead {\n            background:#302b63;\n            color:white;\n        }\n    " }} />
      <div className="container mt-4 shadow-lg p-3 mb-5 bg-body rounded">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>FECHA</th>
              <th>VALOR</th>
              <th>UNIDAD</th>
            </tr>
          </thead>
          <tbody id="data">
            {
              measures.map((measure, index) => {
                const date = new Date(measure.fecha);
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const hourAndMinutes = `${hours > 9 ? hours.toString() : `0${hours}`}:${minutes > 9 ? minutes.toString() : `0${minutes}`}`
                return <tr key={index}>
                  <td>{`${date.toLocaleDateString('es-ES', options)} ${hourAndMinutes}`}</td>
                  <td>{measure.valor}</td>
                  <td>{measure.unidad}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )

}

export default DatosOficiales
  

