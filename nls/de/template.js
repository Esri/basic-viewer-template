define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Karte kann nicht erstellt werden",
      bitly: 'Bitly verkürzt die URL für die Freigabe. Details zum Erstellen und Verwenden von Bitly-Schlüsseln finden Sie in der Readme-Datei.',
      general: "Fehler"
    }
  },
  tools:{
    basemap: {
    title: "Grundkarte wechseln",
    label: "Grundkarte"
    },
    print: {
    layouts:{
      label1: 'Querformat (PDF)',
      label2: 'Hochformat (PDF)',
      label3: 'Querformat (Bild)',
      label4: 'Hochformat (Bild)'
    },
    title: "Karte drucken",
    label: "Drucken"
    },
    share: {
    title: "Karte freigeben",
    label: "Freigeben",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "E-Mail",
        message: "Diese Karte ansehen"
      }    
    }
    },
    measure: {
      title: "Messen",
      label: "Messen"
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
      datePattern: "ä_MMMM d, yyyy_Ü",
      yearPattern: "ä_yyyy_Ü",
      hourTimePattern: "H",
      minuteTimePattern: "H:mm",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "Zeitschieberegler anzeigen",
      label: "Zeit",
      timeRange: "ä_${start_time} to ${end_time}_Ü",
      timeRangeSingle: "<b>Zeitbereich:</b> ${time}"
    },
    editor: {
      title: "Editor anzeigen",
      label: "Editor"
    },
    legend: {
      title: "Legende anzeigen",
      label: "Legende"
    },
    details: {
      title: "Kartendetails anzeigen",
      label: "Details"
    },
    bookmark:{
      title: "Lesezeichen anzeigen",
      label: "Lesezeichen",
      details: "Klicken Sie auf ein Lesezeichen, um zu einer Position zu navigieren"
    },
    layers: {
      title: "Layer-Liste anzeigen",
      label: "Layer"
    },
    search: {
      title: "Adresse oder Ort suchen",
      popupTitle: "Position",
      currentLocation: "Aktuelle Position",
      notWhatYouWanted: "Nicht das gewünschte Ergebnis?" ,
      selectAnother: "Andere Position auswählen",
      errors:{
       missingLocation: "Position nicht gefunden"
      }
    }
  },
  panel:{
    close:{
      title: "Fenster schließen",
      label: "Schließen"
    }
  }
})
);