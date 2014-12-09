define({
  root: ({
  display: {
    elevationProfileTitle: "Elevation Profile",
    showMe: "show me",
    selectLine: "Select a feature in the map.",
    popupRequirement: "NOTE: the feature needs to be in a Feature Layer or be part of a map service that has Popups enabled.",
    digitizeDistanceMeasureTool: "Use the <b>Measure</b> button.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Hover over ",
    touchIPad: "touch on iPad",
    locationOnMap: "the Elevation Profile chart to display elevations and show location on map."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elevation: {0} meters",
  chart: {
    title: "Elevation Profile",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elevation in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distance in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Max:{max}   Start:{start}   End:{end}   Change:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Invalid Configuration Error',
      message: 'Invalid configuration.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Missing Constructor Parameters Error',
      message: 'Missing constructor parameter.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Missing Init Parameter Error',
      message: 'Missing init parameter.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Operation Not Supported Error',
      message: 'This version of the SOE does NOT support this operation.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Multi-part Geometries Not Supported Error',
      message: "CAUTION: multi-part lines are currently NOT supported."
    }
  }
}),
"ar": 1,
"de": 1,
"es": 1,
"fr": 1,
"it": 1,
"ja": 1,
"ko": 1,
"nl": 1,
"no": 1,
"pl": 1,
"pt-br": 1,
"ro": 1,
"ru": 1,
"sv": 1,
"zh-cn": 1
});
