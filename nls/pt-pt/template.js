define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Não foi possível criar o mapa",
      bitly: 'O bitly é utilizado para encurtar a url de partilha. Consulte o ficheiro Leia-Me para obter mais detalhes sobre criar e utilizar a chave bitly',
      general: "Erro"
    }
  },
  tools:{
    basemap: {
    title: "Mudar Mapa Base",
    label: "Mapa Base"
    },
    print: {
    layouts:{
      label1: 'Paisagem (PDF)',
      label2: 'Retrato (PDF)',
      label3: 'Paisagem (imagem)',
      label4: 'Retrato (imagem)'
    },
    title: "Imprimir Mapa",
    label: "Imprimir"
    },
    share: {
    title: "Partilhar Mapa",
    label: "Partilhar",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "Correio eletrónico",
        message: "Consulte este mapa"
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
      datePattern: "ã_MMMM d, yyyy_Ç",
      yearPattern: "ã_yyyy_Ç",
      hourTimePattern: "H",
      minuteTimePattern: "H:mm",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "Exibir Controlo do Tempo",
      label: "Tempo",
      timeRange: "ã_${start_time} to ${end_time}_Ç",
      timeRangeSingle: "<b>Intervalo de Tempo:</b> ${time}"
    },
    editor: {
      title: "Exibir Editor",
      label: "Editor"
    },
    legend: {
      title: "Exibir Legenda",
      label: "Legenda"
    },
    details: {
      title: "Exibir Detalhes do Mapa",
      label: "Detalhes"
    },
    bookmark:{
      title: "Exibir Marcadores",
      label: "Marcadores",
      details: "Clique num marcador para navegar até o local"
    },
    layers: {
      title: "Exibir lista de camadas",
      label: "Camadas"
    },
    search: {
      title: "Localizar endereço ou lugar",
      popupTitle: "Local",
      currentLocation: "Localização atual",
      notWhatYouWanted: "Não é o que pretendia?" ,
      selectAnother: "Selecionar outra localização",
      errors:{
       missingLocation: "Local não encontrado"
      }
    }
  },
  panel:{
    close:{
      title: "Fechar Painel",
      label: "Fechar"
    }
  }
})
);