define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Nevar izveidot karti",
      bitly: 'bitly tiek izmantots, lai saīsinātu url uz koplietošanu. Apskatīt readme faila informāciju par bitly taustiņa izveidošanas un lietošanas detaļām',
      general: "Kļūda"
    }
  },
  tools:{
    basemap: {
    title: "Pārslēgt pamatkarti",
    label: "Pamatkarte"
    },
    print: {
    layouts:{
      label1: 'Ainava (PDF)',
      label2: 'Portrets (PDF)',
      label3: 'Ainava (Attēls)',
      label4: 'Portrets (Attēls)'
    },
    title: "Drukāt karti",
    label: "Drukāt"
    },
    share: {
    title: "Koplietot karti",
    label: "Koplietot",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "Epasts",
        message: "Pārbaudiet šo karti"
      }    
    }
    },
    measure: {
      title: "Izmērīt",
      label: "Izmērīt"
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
      weekPattern: "yyyy.MM.dd",
      hourTimePattern: "H a",
      // e.g. for German: "H:mm:ss:SSS"
      millisecondTimePattern:"h:m:ss.SSS a",
      minuteTimePattern: "HH:mm",
      // e.g. for German: "H:mm"
      monthPattern: "y.MMMM.d",
      secondTimePattern: "h:m:s.SSS a",
      title: "Parādīt laika slīdni",
      label: "Laiks",
      timeRange: "<b>Laika diapazons:</b> ${start_time} līdz ${end_time}",
      timeRangeSingle: "<b>Laika diapazons:</b> ${time}"
    },
    editor: {
      title: "Parādīt redaktoru",
      label: "Redaktors"
    },
    legend: {
      title: "Parādīt leģendu",
      label: "Leģenda"
    },
    details: {
      title: "Parādīt kartes detaļas",
      label: "Detaļas"
    },
    bookmark:{
      title: "Parādīt grāmatzīmes",
      label: "Grāmatzīmes",
      details: "Noklikšķiniet uz grāmatzīmēm, lai virzītos uz izvietojumu"
    },
    layers: {
      title: "Parādīt slāņu sarakstu",
      label: "Slāņi"
    },
    search: {
      title: "Atrast adresi vai vietu",
      popupTitle: "Izvietojums",
      currentLocation: "Pašreizējais izvietojums",
      notWhatYouWanted: "Nav tas, ko vēlējāties?" ,
      selectAnother: "Izvēlieties citu izvietojumu",
      errors:{
       missingLocation: "Izvietojums nav atrasts"
      }
    }
  },
  panel:{
    close:{
      title: "Aizvērt paneli",
      label: "Aizvērt"
    }
  }
})
);