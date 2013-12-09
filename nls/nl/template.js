define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Kan kaart niet maken",
      bitly: 'Bitly wordt gebruikt om de URL die u wilt delen, korter te maken. Bekijk het leesmij-bestand voor details over het maken en gebruiken van een bitly-code',
      general: "Fout"
    }
  },
  tools:{
    basemap: {
    title: "Basiskaart wijzigen",
    label: "Basiskaart"
    },
    print: {
    layouts:{
      label1: 'Liggend (PDF)',
      label2: 'Staand (PDF)',
      label3: 'Liggend (afbeelding)',
      label4: 'Staand (afbeelding)'
    },
    title: "Pagina openen om kaart af te drukken",
    label: "Afdrukken"
    },
    share: {
    title: "Kaart delen",
    label: "Delen",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "E-mail",
        message: "Bekijk deze kaart"
      }    
    }
    },
    measure: {
      title: "Meten",
      label: "Meten"
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
      weekPattern: "d. MMMM yyyy",
      hourTimePattern: "H",
      // e.g. for German: "H:mm:ss:SSS"
      millisecondTimePattern:"h:m:ss.SSS a",
      minuteTimePattern: "H:mm",
      // e.g. for German: "H:mm"
      monthPattern: "d MMMM y",
      secondTimePattern: "h:m:s.SSS a",
      title: "Tijdschuifregelaar weergeven",
      label: "Tijd",
      timeRange: "<b>Tijdspanne:</b> ${start_time} tot ${end_time}",
      timeRangeSingle: "<b>Tijdspanne:</b> ${time}"
    },
    editor: {
      title: "Editor weergeven",
      label: "Editor"
    },
    legend: {
      title: "Legenda weergeven",
      label: "Legenda"
    },
    details: {
      title: "Kaartdetails weergeven",
      label: "Details"
    },
    bookmark:{
      title: "Bladwijzers weergeven",
      label: "Bladwijzers",
      details: "Klik op een bladwijzer om naar de locatie te navigeren"
    },
    layers: {
      title: "Lijst met lagen weergeven",
      label: "Kaartlagen"
    },
    search: {
      title: "Adres of plaats zoeken",
      popupTitle: "Locatie",
      currentLocation: "Huidige locatie",
      notWhatYouWanted: "Niet wat u wilde?" ,
      selectAnother: "Een andere locatie selecteren",
      errors:{
       missingLocation: "Locatie niet gevonden"
      }
    }
  },
  panel:{
    close:{
      title: "Sluiten",
      label: "Sluiten"
    }
  }
})
);