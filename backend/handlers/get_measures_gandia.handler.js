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
          "cookie": "JSESSIONID=u0aMV6YLaRrISSDdt-QGDXjRmkE99foJmVaQJnik.CMA01; _ga_TR272KEGV1=GS1.1.1668885079.1.0.1668885079.0.0.0; _ga_BLPND51XDR=GS1.1.1668884960.1.1.1668885085.0.0.0; _ga=GA1.2.1147094638.1668884961; _ga_9FR5ZRCN5S=GS1.1.1668884968.1.1.1668885098.0.0.0; _gid=GA1.2.989626116.1672168703; __session:iframe-92826634:selectedTab=0; jbosscma7101=ffffffffaf17985c45525d5f4f58455e445a4a422d8d; __session:iframe-92826634:=https:; _gat_gtag_UA_44948824_1=1s",
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