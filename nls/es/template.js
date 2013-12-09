define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "No se puede crear el mapa",
      bitly: 'bitly se usa para acortar la url para compartir. Ve el archivo léame para más información sobre cómo crear y usar una clave bitly',
      general: "Error"
    }
  },
  tools:{
    basemap: {
    title: "Cambiar mapa base",
    label: "Mapa base"
    },
    print: {
    layouts:{
      label1: 'Horizontal (PDF)',
      label2: 'Vertical (PDF)',
      label3: 'Horizontal (Imagen)',
      label4: 'Vertical (Imagen)'
    },
    title: "Imprimir mapa",
    label: "Imprimir"
    },
    share: {
    title: "Compartir mapa",
    label: "Compartir",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "Correo electrónico",
        message: "Examinar este mapa"
      }    
    }
    },
    measure: {
      title: "Medir",
      label: "Medir"
    },
    time: {
      // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
      // yyyy: full year, e.g. 2011
      // MMMM: full month name, e.g. December
      // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
      // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
      // a: am/pm
      // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
      // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
      // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
      centuryPattern: "aaaa G",
      decadePattern: "yyyy", 
      yearPattern: "MMMM aaaa",
      weekPattern: "d\' de \'MMMM\' de \'yyyy",
      hourTimePattern: "H",
      // e.g. for German: "H:mm:ss:SSS"
      millisecondTimePattern:"h:m:ss.SSS a",
      minuteTimePattern: "H:mm",
      // e.g. for German: "H:mm"
      monthPattern: "MMMM d, a",
      secondTimePattern: "h:m:s.SSS a",
      title: "Mostrar control deslizante de tiempo",
      label: "Hora",
      timeRange: "<b>Intervalo de tiempo:</b>de ${start_time} a ${end_time}",
      timeRangeSingle: "<b>Intervalo de tiempo:</b> ${time}"
    },
    editor: {
      title: "Mostrar editor",
      label: "Editor"
    },
    legend: {
      title: "Mostrar leyenda",
      label: "Leyenda"
    },
    details: {
      title: "Mostrar detalles del mapa",
      label: "Detalles"
    },
    bookmark:{
      title: "Mostrar marcadores",
      label: "Marcadores",
      details: "Haz clic en un marcador para ir a la ubicación"
    },
    layers: {
      title: "Mostrar lista de capas",
      label: "Capas"
    },
    search: {
      title: "Buscar dirección o lugar",
      popupTitle: "Ubicación",
      currentLocation: "Ubicación actual",
      notWhatYouWanted: "¿No es lo que querías?" ,
      selectAnother: "Selecciona otra ubicación",
      errors:{
       missingLocation: "Ubicación o encontrada"
      }
    }
  },
  panel:{
    close:{
      title: "Cerrar panel",
      label: "Cerrar"
    }
  }
})
);