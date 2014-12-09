define(
   ({
  display: {
    elevationProfileTitle: "Profil d\'élévation",
    showMe: "me montrer",
    selectLine: "Sélectionnez une entité dans la carte.",
    popupRequirement: "REMARQUE : la ligne doit se trouver dans une couche d\'entités ou faire partie d\'un service cartographique dans lequel les fenêtres contextuelles sont activées.",
    digitizeDistanceMeasureTool: "Cliquez sur le bouton <b>Mesurer</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/fr/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/fr/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Survoler avec le curseur ",
    touchIPad: "toucher sur l\’iPad",
    locationOnMap: "le diagramme Profil d\’élévation pour afficher les élévations et indiquer l\’emplacement sur la carte."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elévation : {0} mètres",
  chart: {
    title: "Profil d\'élévation",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elévation en {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distance en {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min :{min}   Max :{max}   Début :{start}   Fin :{end}   Changement :{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      name: 'Erreur Configuration incorrecte',
      message: 'Configuration incorrecte.'
    },
    MissingConstructorParameters: {
      name: 'Erreur Paramètres de construction manquants',
      message: 'Paramètre de construction manquant.'
    },
    MissingInitParameter: {
      name: 'Erreur Paramètre d\’initialisation manquant',
      message: 'Paramètre d\’initialisation manquant.'
    },
    SOEOperationNotSupported: {
      name: 'Erreur Opération non prise en charge',
      message: 'Cette version du SOE ne prend PAS en charge cette opération.'
    },
    SOEMultiPartGeometriesNotSupported: {
      name: 'Erreur Géométries multi-parties non prises en charge',
      message: "ATTENTION : les lignes multi-parties ne sont actuellement PAS prises en charge."
    }
  }
})
);
