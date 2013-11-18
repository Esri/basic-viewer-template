define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Impossibile creare la mappa",
      bitly: 'a livello di bit viene utilizzata per abbreviare l\'URL per la condivisione. Per informazioni dettagliate sulla creazione e l\'utilizzo di una chiave a livello di bit, vedere il file Readme.',
      general: "Errore"
    }
  },
  tools:{
    basemap: {
    title: "Cambia mappa di base",
    label: "Mappa di base"
    },
    print: {
    layouts:{
      label1: 'Orizzontale (PDF)',
      label2: 'Verticale (PDF)',
      label3: 'Orizzontale (immagine)',
      label4: 'Verticale (immagine)'
    },
    title: "Stampa mappa",
    label: "Stampa"
    },
    share: {
    title: "Condividi mappa",
    label: "Condividi",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "E-mail",
        message: "Guarda questa mappa"
      }    
    }
    },
    measure: {
      title: "Misura",
      label: "Misura"
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
      centuryPattern: "yyyy G",
      decadePattern: "yyyy", 
      yearPattern: "MMMM yyyy",
      weekPattern: "d MMMM yyyy",
      hourTimePattern: "H",
      // e.g. for German: "H.mm.ss.SSS"
      millisecondTimePattern:"é_h:m:ss.SSS a_È",
      minuteTimePattern: "H.mm",
      // e.g. for German: "H.mm"
      monthPattern: "d MMMM y",
      secondTimePattern: "h.m.s.SSS",
      title: "Visualizza cursore temporale",
      label: "Data/Ora",
      timeRange: "<b>Intervallo di tempo:</b> da ${start_time} a ${end_time}",
      timeRangeSingle: "<b>Intervallo di tempo:</b> ${time}"
    },
    editor: {
      title: "Visualizza editor",
      label: "Editor"
    },
    legend: {
      title: "Visualizza legenda",
      label: "Legenda"
    },
    details: {
      title: "Visualizza dettagli mappa",
      label: "Dettagli"
    },
    bookmark:{
      title: "Visualizza segnalibri",
      label: "Segnalibri",
      details: "Fare clic su un segnalibro per passare alla posizione corrispondente"
    },
    layers: {
      title: "Visualizza elenco layer",
      label: "Layer"
    },
    search: {
      title: "Trova luogo o indirizzo",
      popupTitle: "Posizione",
      currentLocation: "Posizione corrente",
      notWhatYouWanted: "Non è quanto desiderato?" ,
      selectAnother: "Selezionare un\'altra posizione",
      errors:{
       missingLocation: "Impossibile trovare la località"
      }
    }
  },
  panel:{
    close:{
      title: "Chiudi pannello",
      label: "Chiudi"
    }
  }
})
);