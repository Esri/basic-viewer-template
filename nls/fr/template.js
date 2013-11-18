define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Impossible de créer la carte",
      bitly: 'bitly permet de raccourcir l\'URL pour le partage. Consultez le fichier Lisezmoi pour plus d\'informations sur la création et l\'utilisation d\'une clé bitly',
      general: "Erreur"
    }
  },
  tools:{
    basemap: {
    title: "Changer de fond de carte",
    label: "Fond de carte"
    },
    print: {
    layouts:{
      label1: 'Paysage (PDF)',
      label2: 'Portrait (PDF)',
      label3: 'Paysage (Image)',
      label4: 'Portrait (Image)'
    },
    title: "Imprimer la carte",
    label: "Imprimer"
    },
    share: {
    title: "Partager la carte",
    label: "Partager",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "Adresse électronique",
        message: "Extraire cette carte"
      }    
    }
    },
    measure: {
      title: "Mesurer",
      label: "Mesurer"
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
      weekPattern: "d MMMM yyyy",
      hourTimePattern: "HH",
      // e.g. for German: "H:mm:ss:SSS"
      millisecondTimePattern:"æ_h:m:ss.SSS a_Â",
      minuteTimePattern: "HH:mm",
      // e.g. for German: "H:mm"
      monthPattern: "d MMMM y",
      secondTimePattern: "h:m:s.SSS a",
      title: "Afficher le curseur temporel",
      label: "Heure",
      timeRange: "<b>Plage de temps :</b> de ${start_time} à ${end_time}",
      timeRangeSingle: "<b>Plage de temps :</b> ${time}"
    },
    editor: {
      title: "Afficher l\'éditeur",
      label: "Editeur"
    },
    legend: {
      title: "Afficher la légende",
      label: "Légende"
    },
    details: {
      title: "Afficher les détails de la carte",
      label: "Détails"
    },
    bookmark:{
      title: "Afficher les géosignets",
      label: "Géosignets",
      details: "Cliquez sur un géosignet pour accéder à l\'emplacement"
    },
    layers: {
      title: "Afficher la liste des couches",
      label: "Couches"
    },
    search: {
      title: "Rechercher une adresse ou un lieu",
      popupTitle: "Emplacement",
      currentLocation: "Emplacement actuel",
      notWhatYouWanted: "Ce n\'est pas ce que vous vouliez ?" ,
      selectAnother: "Sélectionnez un autre emplacement",
      errors:{
       missingLocation: "Emplacement introuvable"
      }
    }
  },
  panel:{
    close:{
      title: "Fermer le volet",
      label: "Fermer"
    }
  }
})
);