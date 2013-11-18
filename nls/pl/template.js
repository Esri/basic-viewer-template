define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Nie można utworzyć mapy",
      bitly: 'Serwis Bitly umożliwia skracanie adresów URL, aby ułatwić ich udostępnianie. W pliku readme znajdują się szczegóły dotyczące tworzenia i używania klucza bitly.',
      general: "Błąd"
    }
  },
  tools:{
    basemap: {
    title: "Przełącz mapę bazową",
    label: "Mapa bazowa"
    },
    print: {
    layouts:{
      label1: 'Poziomo (PDF)',
      label2: 'Pionowo (PDF)',
      label3: 'Poziomo (obraz)',
      label4: 'Pionowo (obraz)'
    },
    title: "Drukuj mapę",
    label: "Drukuj"
    },
    share: {
    title: "Udostępnij mapę",
    label: "Udostępnij",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "Email",
        message: "Sprawdź tę mapę"
      }    
    }
    },
    measure: {
      title: "Zmierz",
      label: "Zmierz"
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
      centuryPattern: "g yyyy",
      decadePattern: "yyyy", 
      yearPattern: "mm-yyyy",
      weekPattern: "dd-mm-yyyy",
      hourTimePattern: "hh",
      // e.g. for German: "hh:mm:ss"
      millisecondTimePattern:"ł_h:m:ss.SSS a_ą",
      minuteTimePattern: "hh:mm",
      // e.g. for German: "h:mm"
      monthPattern: "dd-mm-yyyy",
      secondTimePattern: "hh:mm:ss",
      title: "Suwak wyświetlania czasu",
      label: "Czas",
      timeRange: "<b>Okres:</b> ${start_time} do ${end_time}",
      timeRangeSingle: "<b>Okres:</b> ${time}"
    },
    editor: {
      title: "Wyświetl edytor",
      label: "Edytor"
    },
    legend: {
      title: "Wyświetl legendę",
      label: "Legenda"
    },
    details: {
      title: "Wyświetl szczegóły mapy",
      label: "Szczegóły"
    },
    bookmark:{
      title: "Wyświetl zakładki",
      label: "Zakładki",
      details: "Kliknij zakładkę, aby przejść do danej lokalizacji"
    },
    layers: {
      title: "Wyświetl listę warstw tematycznych",
      label: "Warstwy"
    },
    search: {
      title: "Znajdź adres lub miejsce",
      popupTitle: "Lokalizacja",
      currentLocation: "Bieżąca lokalizacja",
      notWhatYouWanted: "Nie to, czego oczekiwano?" ,
      selectAnother: "Wybierz inną lokalizację",
      errors:{
       missingLocation: "Nie odnaleziono lokalizacji"
      }
    }
  },
  panel:{
    close:{
      title: "Zamknij panel",
      label: "Zamknij"
    }
  }
})
);