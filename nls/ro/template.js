define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors: {
      createMap: "Nu se poate crea harta",
      bitly: 'O cheie bitly este utilizată pentru scurtarea URL-ului în vederea partajării. Vizualizaţi fişierul readme pentru detalii despre crearea şi utilizarea unei chei bitly',
      general: "Eroare"
    }
  },
  tools: {
    basemap: {
    title: "Schimbare hartă fundal",
    label: "Hartă fundal"
    },
    print: {
    layouts:{
      label1: 'Peisaj (PDF)',
      label2: 'Portret (PDF)',
      label3: 'Peisaj (Imagine)',
      label4: 'Portret (Imagine)'
    },
    title: "Imprimare hartă",
    label: "Imprimare"
    },
    share: {
    title: "Partajare hartă",
    label: "Partajare",
    menu: {
      facebook: {
        label: "Facebook"
       },
      twitter: {
        label: "Twitter"
      },
      email: {
        label: "E-mail",
        message: "Consultare această hartă"
      }    
    }
    },
    measure: {
      title: "Măsurare",
      label: "Măsurare"
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
      datePattern: "d. MMMM yyyy",
      yearPattern: "yyyy",
      hourTimePattern: "H",
      minuteTimePattern: "H:mm",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "Afişare glisor de timp",
      label: "Timp",
      timeRange: "de la ${start_time} până la ${end_time}",
      timeRangeSingle: "<b>Interval de timp:</b> ${time}"
    },
    editor: {
      title: "Afişare editor",
      label: "Editor"
    },
    legend: {
      title: "Afişare legendă",
      label: "Legendă"
    },
    details: {
      title: "Afişare detalii hartă",
      label: "Detalii"
    },
    bookmark:{
      title: "Afişare semne de carte",
      label: "Semne de carte",
      details: "Faceţi clic pe un semn de carte pentru a naviga către locaţia respectivă"
    },
    layers: {
      title: "Afişare listă straturi tematice",
      label: "Straturi tematice"
    },
    search: {
      title: "Găsire adresă sau loc",
      popupTitle: "Locaţie",
      currentLocation: "Locaţie curentă",
      notWhatYouWanted: "Nu este ce doreaţi?" ,
      selectAnother: "Selectaţi altă locaţie",
      errors:{
       missingLocation: "Locaţie negăsită"
      }
    }
  },
  panel: {
    close: {
      title: "Închidere panou",
      label: "Închidere"
    }
  }
})
);
