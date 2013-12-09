define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Det går inte att skapa kartan",
      bitly: 'bitly används för att förkorta URL:en för delning. Information om hur du skapar och använder en bitly-nyckel finns i readme-filen',
      general: "Fel"
    }
  },
  tools:{
    basemap: {
    title: "Byt baskarta",
    label: "Baskarta"
    },
    print: {
    layouts:{
      label1: 'Liggande (PDF)',
      label2: 'Stående (PDF)',
      label3: 'Liggande (bild)',
      label4: 'Stående (bild)'
    },
    title: "Skriv ut karta",
    label: "Skriv ut"
    },
    share: {
    title: "Dela karta",
    label: "Dela",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "E-post",
        message: "Checka ut den här kartan"
      }    
    }
    },
    measure: {
      title: "Mät",
      label: "Mät"
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
      weekPattern: "MMMM d, yyyy",
      hourTimePattern: "h a",
      // e.g. for German: "H:mm:ss:SSS"
      millisecondTimePattern:"h:m:ss.SSS a",
      minuteTimePattern: "h:mm a",
      // e.g. for German: "H:mm"
      monthPattern: "MMMM d, y",
      secondTimePattern: "h:m:s.SSS a",
      title: "Visa tidsreglage",
      label: "Tid",
      timeRange: "<b>Tidsintervall:</b> ${start_time} till ${end_time}",
      timeRangeSingle: "<b>Tidsintervall:</b> ${time}"
    },
    editor: {
      title: "Visa redigerare",
      label: "Redigerare"
    },
    legend: {
      title: "Visa teckenförklaring",
      label: "Teckenförklaring"
    },
    details: {
      title: "Visa kartdetaljer",
      label: "Information"
    },
    bookmark:{
      title: "Visa bokmärken",
      label: "Bokmärken",
      details: "Klicka på ett bokmärke för att navigera till platsen"
    },
    layers: {
      title: "Visa lagerlista",
      label: "Lager"
    },
    search: {
      title: "Sök efter adress eller plats",
      popupTitle: "Plats",
      currentLocation: "Aktuell plats",
      notWhatYouWanted: "Är det inte vad du vill ha?" ,
      selectAnother: "Välj en annan plats",
      errors:{
       missingLocation: "Det gick inte att hitta platsen"
      }
    }
  },
  panel:{
    close:{
      title: "Stäng panel",
      label: "Stäng"
    }
  }
})
);