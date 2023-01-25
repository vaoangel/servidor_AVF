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
          "cookie": "JSESSIONID=GHTvWWIA0gSEqA1Z5i8s_6PyDcdU8N8J9rGS07OE.CMA01; jbosscma7101=ffffffffaf17985c45525d5f4f58455e445a4a422d8d; _gid=GA1.2.699603922.1673602545; _gat_gtag_UA_44948824_1=1; __session:iframe-92826634:=https:; __session:iframe-92826634:selectedTab=0; _ga_LCS5LCNLN6=GS1.1.1673602544.1.1.1673602564.0.0.0; _ga=GA1.2.952790878.1673602544",
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