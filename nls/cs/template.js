define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Nelze vytvořit mapu",
      bitly: 'Služba bitly slouží ke zkracování adresy URL pro usnadnění sdílení. Pro více informací o vytváření a používání klíče bitly si přečtěte soubor readme.',
      general: "Chyba"
    }
  },
  tools:{
    basemap: {
    title: "Přepnout podkladovou mapu",
    label: "Podkladová mapa"
    },
    print: {
    layouts:{
      label1: 'Na šířku (PDF)',
      label2: 'Na výšku (PDF)',
      label3: 'Na šířku (obrázek)',
      label4: 'Na výšku (obrázek)'
    },
    title: "Tisknout mapu",
    label: "Tisk"
    },
    share: {
    title: "Sdílet mapu",
    label: "Sdílet",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "E-mail",
        message: "Prohlédnout mapu"
      }    
    }
    },
    measure: {
      title: "Měření",
      label: "Měření"
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
      centuryPattern: "rrrr G",
      decadePattern: "rrrr", 
      yearPattern: "MMMM rrrr",
      weekPattern: "MMMM d, rrrr",
      hourTimePattern: "h a",
      // e.g. for German: "H:mm:ss:SSS"
      millisecondTimePattern:"Ř_h:m:ss.SSS a_ů",
      minuteTimePattern: "h:mm a",
      // e.g. for German: "H:mm"
      monthPattern: "MMMM d, r",
      secondTimePattern: "h:m:s.SSS a",
      title: "Zobrazit posuvník času",
      label: "Čas",
      timeRange: "<b>Časový rozsah:</b> ${start_time} až ${end_time}",
      timeRangeSingle: "<b>Časový rozsah:</b> ${time}"
    },
    editor: {
      title: "Zobrazit editor",
      label: "Editor"
    },
    legend: {
      title: "Zobrazit legendu",
      label: "Legenda"
    },
    details: {
      title: "Zobrazit podrobnosti mapy",
      label: "Podrobnosti"
    },
    bookmark:{
      title: "Zobrazit záložky",
      label: "Záložky",
      details: "Klikněte na záložku pro přesun k umístění"
    },
    layers: {
      title: "Zobrazit seznam vrstev",
      label: "Vrstvy"
    },
    search: {
      title: "Najít adresu nebo místo",
      popupTitle: "Umístění",
      currentLocation: "Aktuální umístění",
      notWhatYouWanted: "Nenašli jste, co jste hledali?" ,
      selectAnother: "Vybrat jiné umístění",
      errors:{
       missingLocation: "Umístění nenalezeno."
      }
    }
  },
  panel:{
    close:{
      title: "Zavřít panel",
      label: "Zavřít"
    }
  }
})
);