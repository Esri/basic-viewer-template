define(
({
  display: {
    elevationProfileTitle: "Pacēluma profils",
    showMe: "parādiet man",
    selectLine: "Izvēlēties elementu kartē.",
    popupRequirement: "PIEZĪME: elementam ir jābūt Elementu slānī vai jābūt daļai no kartes servisa, kas ir uznirstošo logu iespējota.",
    digitizeDistanceMeasureTool: "Lietot <b>Mērīt</b> pogu.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Lidināties virs ",
    touchIPad: "pieskarties uz iPad",
    locationOnMap: "Pacēluma profila diagramma, lai parādītu pacēlumus un parādītu izvietojuma vietu kartē."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Pacēlums: {0} metri",
  chart: {
    title: "Pacēluma profils",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Pacēlums {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distance {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Max:{max}   Starts:{start}   Beigas:{end}  Mainīt:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Nederīgas konfigurācijas kļūda',
      message: 'Nederīga konfigurācija.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Kļūda, trūkst konstruktora parametru',
      message: 'Trūkst konstruktora parametrs.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Kļūda, trūkst sākuma parametru',
      message: 'Trūkst sākuma parametrs.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Kļūda, operāciju neatbalsta',
      message: 'Šī SOE versija NEATBALSTA šo darbību.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Multi daļas ģeometrijas neatbalstīšanas kļūda',
      message: "UZMANĪBU: multi daļu līnijas šobrīd NAV atbalstītas."
    }
  }
})
);
