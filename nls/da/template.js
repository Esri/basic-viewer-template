define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors: {
      createMap: "Kan ikke oprette kort",
      bitly: 'bitly bruges til at forkorte webadressen med henblik på deling. Se readme-filen for oplysninger om at oprette og bruge en bitly-nøgle',
      general: "Fejl"
    }
  },
  tools: {
    basemap: {
    title: "Skift baggrundskort",
    label: "Baggrundskort"
    },
    print: {
    layouts:{
      label1: 'På langs (PDF)',
      label2: 'På højkant (PDF)',
      label3: 'På langs (billede)',
      label4: 'På højkant (billede)'
    },
    title: "Udskriv kort",
    label: "Udskriv"
    },
    share: {
    title: "Del kort",
    label: "Del",
    menu: {
      facebook: {
        label: "Facebook"
       },
      twitter: {
        label: "Twitter"
      },
      email: {
        label: "E-mail",
        message: "Se dette kort"
      }    
    }
    },
    measure: {
      title: "Mål",
      label: "Mål"
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
      title: "Vis tidsskyderen",
      label: "Tid",
      timeRange: "${start_time} til ${end_time}",
      timeRangeSingle: "<b>Tidsrum:</b> ${time}"
    },
    editor: {
      title: "Vis redigering",
      label: "Redigering"
    },
    legend: {
      title: "Vis signaturforklaring",
      label: "Signaturforklaring"
    },
    details: {
      title: "Vis kortoplysninger",
      label: "Oplysninger"
    },
    bookmark:{
      title: "Vis bogmærker",
      label: "Bogmærker",
      details: "Klik på et bogmærke for at navigere til stedet"
    },
    layers: {
      title: "Vis liste over lag",
      label: "Lag"
    },
    search: {
      title: "Find adresse eller sted",
      popupTitle: "Sted",
      currentLocation: "Aktuel placering",
      notWhatYouWanted: "Var det ikke det, du ville?" ,
      selectAnother: "Vælg et andet sted",
      errors:{
       missingLocation: "Sted ikke fundet"
      }
    }
  },
  panel: {
    close: {
      title: "Luk panel",
      label: "Luk"
    }
  }
})
);
