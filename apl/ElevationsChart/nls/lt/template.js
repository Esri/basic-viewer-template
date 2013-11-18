define(
({
  display: {
    elevationProfileTitle: "Aukščių profilis",
    showMe: "parodyti",
    selectLine: "Pasirinkite elementą žemėlapyje.",
    popupRequirement: "PASTABA: šis elementas turi būti saugomas elementų sluoksnyje, arba turi būti žemėlapio paslaugos, turinčios iškylančius langus, dalis.",
    digitizeDistanceMeasureTool: "Naudokite  mygtuką <b>Matuoti</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Užveskite virš ",
    touchIPad: "naudojant iPad palieskite virš",
    locationOnMap: "aukščių profilio diagramos, bus parodyta aukščio vertė ir vieta žemėlapyje."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Aukštis: {0} metrų",
  chart: {
    title: "Aukščių profilis",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Aukštis {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Atstumas {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Maks:{max}   Pradžia:{start}   Pabaiga:{end}   Pokytis:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Neteisingos konfigūracijos klaida',
      message: 'Neteisinga konfigūracija'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Trūkstamų konstruktoriaus parametrų klaida',
      message: 'Konstruktoriui trūksta parametrų.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Trūkstamo init parametro klaida',
      message: 'Trūkstama parametro init.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Nepalaikomos operacijos klaida',
      message: 'Ši SOE versija operacijos nepalaiko.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Sudėtinės geometrijos nepalaikymo klaida',
      message: "ĮSPĖJIMAS: sudėtinės linijos šiuo metu nėra palaikomos."
    }
  }
})
);
