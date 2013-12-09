define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Žemėlapio sukurti nepavyko",
      bitly: 'bitly naudojamas url trumpinimui bendrinant. Susipažinkite su išsamia informacija, pateikiama faile skaityk (readme) kaip sukurti bitly raktą',
      general: "Klaida"
    }
  },
  tools:{
    basemap: {
    title: "Pakeisti pagrindo žėmėlapį",
    label: "Pagrindo žemėlapis"
    },
    print: {
    layouts:{
      label1: 'Gulsčiai (PDF)',
      label2: 'Stačiai (PDF)',
      label3: 'Gulsčiai (Paveikslėlis)',
      label4: 'Stačiai (Paveikslėlis)'
    },
    title: "Spausdinti žemėlapį",
    label: "Spausdinti"
    },
    share: {
    title: "Bendrinti žemėlapį",
    label: "Bendrinti",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "El. paštas",
        message: "Išregistruoti šį žemėlapį"
      }    
    }
    },
    measure: {
      title: "Matuoti",
      label: "Matuoti"
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
      yearPattern: "yyyy MMMM",
      weekPattern: "yyyy.MMMM.d",
      hourTimePattern: "H a",
      // e.g. for German: "HH:mm:ss:SSS"
      millisecondTimePattern:"h:m:ss.SSS a",
      minuteTimePattern: "HH:mm",
      // e.g. for German: "HH:mm"
      monthPattern: "y MMMM, d",
      secondTimePattern: "hh:m:s.SSS",
      title: "Rodyti laiko šliaužiklį",
      label: "Laikas",
      timeRange: "<b>Laiko intervalas:</b> ${start_time} iki ${end_time}",
      timeRangeSingle: "<b>Laiko intervalas:</b> ${time}"
    },
    editor: {
      title: "Rodyti redaktorių",
      label: "Redaktorius"
    },
    legend: {
      title: "Rodyti legendą",
      label: "Legenda"
    },
    details: {
      title: "Rodyti žemėlapio apibūdinimą",
      label: "Detali informacija"
    },
    bookmark:{
      title: "Rodyti žymes",
      label: "Žymės",
      details: "Perėjimui į vietą, paspauskite žymę"
    },
    layers: {
      title: "Rodyti sluoksnių sąrašą",
      label: "Sluoksniai"
    },
    search: {
      title: "Surasti adresą arba vietą",
      popupTitle: "Vieta",
      currentLocation: "Esama padėtis",
      notWhatYouWanted: "Ne tai ko norėjote?" ,
      selectAnother: "Pasirinkite kitą vietą",
      errors:{
       missingLocation: "Vieta nerasta"
      }
    }
  },
  panel:{
    close:{
      title: "Uždaryti skydelį",
      label: "Užverti"
    }
  }
})
);