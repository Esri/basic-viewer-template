define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Ei suuda luua kaarti",
      bitly: 'Et jagada url-i on selle lühendamiseks kasutusel bitly. Vaata loemind-faili bitly loomiseks ja kasutamiseks.',
      general: "Viga"
    }
  },
  tools:{
    basemap: {
    title: "Vaheta aluskaart",
    label: "Aluskaart"
    },
    print: {
    layouts:{
      label1: 'Horisontaalpaigutus (PDF)',
      label2: 'Vertikaalpaigutus (PDF)',
      label3: 'Horisontaalpaigutus (Pilt)',
      label4: 'Vertikaalpaigutus (Pilt)'
    },
    title: "Prindi kaart",
    label: "Prindi"
    },
    share: {
    title: "Jaga kaart",
    label: "Jaga",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "E-mail",
        message: "Tutvu kaardiga"
      }    
    }
    },
    measure: {
      title: "Mõõda",
      label: "Mõõda"
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
      datePattern: "MMMM d, yyyy",
      yearPattern: "yyyy",
      hourTimePattern: "h a",
      minuteTimePattern: "h:mm a",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "Kuva ajaliugur",
      label: "Aeg",
      timeRange: "${start_time} kuni ${end_time}",
      timeRangeSingle: "<b>Ajavahemik:</b> ${time}"
    },
    editor: {
      title: "Kuva redaktor",
      label: "Redaktor"
    },
    legend: {
      title: "Kuva legend",
      label: "Legend"
    },
    details: {
      title: "Kuva kaardi detaile",
      label: "Detailid"
    },
    bookmark:{
      title: "Kuva järjehoidjad",
      label: "Järjehoidjad",
      details: "Kliki asukohale liikumiseks järjehoidjale"
    },
    layers: {
      title: "Kuva kihtide loend",
      label: "Kihid"
    },
    search: {
      title: "Leia aadress või koht",
      popupTitle: "Asukoht",
      currentLocation: "Praegune asukoht",
      notWhatYouWanted: "Ei ole see, mida soovisid?" ,
      selectAnother: "Vali muu asukoht",
      errors:{
       missingLocation: "Asukohta ei leitud"
      }
    }
  },
  panel:{
    close:{
      title: "Sulge paneel",
      label: "Sulge"
    }
  }
})
);