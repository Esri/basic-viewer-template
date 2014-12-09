define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors: {
      createMap: "Não foi possível criar o mapa",
      bitly: 'O bitly é utilizado para diminuir a url para compartilhamento. Consulte o arquivo Leia-Me para detalhes sobre criar e utilizar a tecla bitly',
      general: "Erro"
    }
  },
  tools: {
    basemap: {
    title: "Trocar Mapa Base",
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
    title: "Compartilhar Mapa",
    label: "Compartilhar",
    menu: {
      facebook: {
        label: "Facebook"
       },
      twitter: {
        label: "Twitter"
      },
      email: {
        label: "E-mail",
        message: "Desconectar mapa"
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
      datePattern: "d\' de \'MMMM\' de \'yyyy",
      yearPattern: "yyyy",
      hourTimePattern: "H",
      minuteTimePattern: "h:mm a",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "Exibir Seletor de Tempo",
      label: "Tempo",
      timeRange: "${start_time} até ${end_time}",
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
      details: "Clique em um marcador para navegar até o local"
    },
    layers: {
      title: "Exibir lista de camada",
      label: "Camadas"
    },
    search: {
      title: "Localizar endereço ou lugar",
      popupTitle: "Local",
      currentLocation: "Local atual",
      notWhatYouWanted: "Não é o que você desejava?" ,
      selectAnother: "Selecionar outro local",
      errors:{
       missingLocation: "Local não encontrado"
      }
    }
  },
  panel: {
    close: {
      title: "Fechar Painel",
      label: "Fechar"
    }
  }
})
);
