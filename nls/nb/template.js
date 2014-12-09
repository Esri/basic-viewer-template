define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors: {
      createMap: "Kan ikke opprette kart",
      bitly: 'bitly brukes til å forkorte URLen for deling. Les readme-filen for detaljer om å opprette og bruke en bitly-nøkkel',
      general: "Feil"
    }
  },
  tools: {
    basemap: {
    title: "Bytt bakgrunnskart",
    label: "Bakgrunnskart"
    },
    print: {
    layouts:{
      label1: 'Liggende (PDF)',
      label2: 'Stående (PDF)',
      label3: 'Liggende (bilde)',
      label4: 'Stående (bilde)'
    },
    title: "Skriv ut kart",
    label: "Skriv ut"
    },
    share: {
    title: "Del kart",
    label: "Del",
    menu: {
      facebook: {
        label: "Facebook"
       },
      twitter: {
        label: "Twitter"
      },
      email: {
        label: "E-post",
        message: "Sjekk ut dette kartet"
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
      minuteTimePattern: "H.mm",
      secondTimePattern: "t:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "Vis tidskyvebryter",
      label: "Tid",
      timeRange: "${start_time} til ${end_time}",
      timeRangeSingle: "<b>Tidsområde:</b> ${time}"
    },
    editor: {
      title: "Vis redigeringsverktøy",
      label: "Redigeringsverktøy"
    },
    legend: {
      title: "Vis tegnforklaring",
      label: "Tegnforklaring"
    },
    details: {
      title: "Vis kartdetaljer",
      label: "Detaljer"
    },
    bookmark:{
      title: "Vis bokmerker",
      label: "Bokmerker",
      details: "Klikk på et bokmerke for å navigere til lokasjonen"
    },
    layers: {
      title: "Vis lagliste",
      label: "Lag"
    },
    search: {
      title: "Finn adresse eller sted",
      popupTitle: "Plassering",
      currentLocation: "Gjeldende plassering",
      notWhatYouWanted: "Ikke den du ville ha?" ,
      selectAnother: "Velg en annen lokasjon",
      errors:{
       missingLocation: "Fant ikke lokasjonen"
      }
    }
  },
  panel: {
    close: {
      title: "Lukk panelet",
      label: "Lukk"
    }
  }
})
);
