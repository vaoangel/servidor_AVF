function dateConverter(badStringDate) {
  const [dayYearMonthString, hourAndMinutes] = badStringDate.split(' ');

  const [day, month, year] = dayYearMonthString.split('/');

  const yearMonthDateString = [year, month, day].join('-');

  return new Date([yearMonthDateString, hourAndMinutes].join(' '));
}

exports.get_measures_gandia = async () => {
    const { listMediasHorariasTotales } = await (
      await fetch('https://webcat-web.gva.es/webcat_web/datosOnlineRvvcca/obtenerTablaPestanyaDatosOnline', {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          "cookie": "JSESSIONID=SlpPKu-TADjOx0gO2Vo-srDgKXzo4JKANTisXfz1.CMA01; _gid=GA1.2.1570651465.1675297060; jbosscma7101=ffffffffaf17985c45525d5f4f58455e445a4a422d8d; __session:iframe-92826634:selectedTab=0; _ga_LCS5LCNLN6=GS1.1.1675354901.4.1.1675355032.0.0.0; _ga=GA1.2.566290743.1675297060; _gat_gtag_UA_44948824_1=1; __session:iframe-92826634:=https:",
        },
        method: 'POST',
      })
    ).json();
    
    const measures = listMediasHorariasTotales
      .filter((medida) => medida.abreviatura === 'O3')
      .map((medida) => {
        return {
          fecha: dateConverter(`${medida.fecha} ${medida.hora}`),
          valor: medida.valor,
          unidad: medida.unidad,
        };
      });
    return measures;
}