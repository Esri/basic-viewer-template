define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors: {
      createMap: "Δεν είναι δυνατή η δημιουργία χάρτη",
      bitly: 'Το bitly χρησιμοποιείται για σύντμηση του URL της κοινοποίησης. Δείτε το αρχείο readme για λεπτομέρειες σχετικά με τη δημιουργία και τη χρήση ενός κλειδιού bitly',
      general: "Σφάλμα"
    }
  },
  tools: {
    basemap: {
    title: "Αλλαγή υποβάθρου",
    label: "Υπόβαθρο"
    },
    print: {
    layouts:{
      label1: 'Οριζόντιος προσανατολισμός (PDF)',
      label2: 'Κατακόρυφος προσανατολισμός (PDF)',
      label3: 'Οριζόντιος προσανατολισμός (εικόνα)',
      label4: 'Κατακόρυφος προσανατολισμός (εικόνα)'
    },
    title: "Εκτύπωση χάρτη",
    label: "Εκτύπωση"
    },
    share: {
    title: "Κοινοποίηση χάρτη",
    label: "Κοινοποίηση",
    menu: {
      facebook: {
        label: "Facebook"
       },
      twitter: {
        label: "Twitter"
      },
      email: {
        label: "Email",
        message: "Δείτε αυτόν το χάρτη"
      }    
    }
    },
    measure: {
      title: "Μέτρηση",
      label: "Μέτρηση"
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
      datePattern: "d MMMM yyyy",
      yearPattern: "yyyy",
      hourTimePattern: "h",
      minuteTimePattern: "hh:mm",
      secondTimePattern: "hh:mm:ss",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "Εμφάνιση μπάρας κύλισης χρόνου",
      label: "Χρόνος",
      timeRange: "${start_time} έως ${end_time}",
      timeRangeSingle: "<b>Εύρος χρόνου:</b> ${time}"
    },
    editor: {
      title: "Εμφάνιση εργαλείου επεξεργασίας",
      label: "Εργαλείο επεξεργασίας"
    },
    legend: {
      title: "Εμφάνιση υπομνήματος",
      label: "Υπόμνημα"
    },
    details: {
      title: "Εμφάνιση λεπτομερειών χάρτη",
      label: "Λεπτομέρειες"
    },
    bookmark:{
      title: "Εμφάνιση σελιδοδεικτών",
      label: "Σελιδοδείκτες",
      details: "Κάντε κλικ σε έναν σελιδοδείκτη για να πλοηγηθείτε στην τοποθεσία"
    },
    layers: {
      title: "Εμφάνιση θεματικών επιπέδων",
      label: "Θεματικά επίπεδα"
    },
    search: {
      title: "Βρείτε μια διεύθυνση ή ένα μέρος",
      popupTitle: "Τοποθεσία",
      currentLocation: "Τρέχουσα τοποθεσία",
      notWhatYouWanted: "Δεν είναι αυτή που θέλατε;" ,
      selectAnother: "Επιλέξτε άλλη τοποθεσία",
      errors:{
       missingLocation: "Η τοποθεσία δεν βρέθηκε"
      }
    }
  },
  panel: {
    close: {
      title: "Κλείσιμο πλαισίου",
      label: "Κλείσιμο"
    }
  }
})
);
