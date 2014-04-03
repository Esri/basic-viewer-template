define(
({
  viewer:{
    main:{
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Karttaa ei voi luoda",
      bitly: 'bitly-palvelua käytetään url-osoitteen lyhentämiseksi jakamista varten. Readme-tiedostossa on lisätietoja bitly-avaimen luomisesta ja käyttämisestä',
      general: "Virhe"
    }
  },
  tools:{
    basemap: {
    title: "Vaihda taustakartta",
    label: "Taustakartat"
    },
    print: {
    layouts:{
      label1: 'Maisema (PDF)',
      label2: 'Muotokuva (PDF)',
      label3: 'Maisema (kuva)',
      label4: 'Muotokuva (kuva)'
    },
    title: "Tulosta kartta",
    label: "Tulosta"
    },
    share: {
    title: "Jaa kartta",
    label: "Jaa",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "Sähköposti",
        message: "Tutustu tähän karttaan"
      }    
    }
    },
    measure: {
      title: "Mittaus",
      label: "Mittaus"
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
      hourTimePattern: "h a",
      minuteTimePattern: "h:mm a",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "Näytä ajan liukusäädin",
      label: "Kellonaika",
      timeRange: "${start_time} - ${end_time}",
      timeRangeSingle: "<b>Aikaväli:</b> ${time}"
    },
    editor: {
      title: "Näytä editori",
      label: "Editori"
    },
    legend: {
      title: "Näytä selite",
      label: "Selite"
    },
    details: {
      title: "Näytä kartan tiedot",
      label: "Yksityiskohdat"
    },
    bookmark:{
      title: "Näytä kirjanmerkit",
      label: "Kirjanmerkit",
      details: "Valitse kirjanmerkki sijaintiin siirtymistä varten"
    },
    layers: {
      title: "Näytä karttatasojen luettelo",
      label: "Karttatasot"
    },
    search: {
      title: "Etsi osoite tai paikka",
      popupTitle: "Sijainti",
      currentLocation: "Nykyinen sijainti",
      notWhatYouWanted: "Etkö löytänyt etsimääsi?" ,
      selectAnother: "Valitse toinen sijainti",
      errors:{
       missingLocation: "Sijaintia ei löydy"
      }
    }
  },
  panel:{
    close:{
      title: "Sulje ruutu",
      label: "Sulje"
    }
  }
})
);