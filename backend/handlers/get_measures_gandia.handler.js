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