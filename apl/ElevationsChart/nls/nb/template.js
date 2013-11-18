define(
({
  display: {
    elevationProfileTitle: "Høydeprofil",
    showMe: "vis meg",
    selectLine: "Velg geoobjekter på kartet.",
    popupRequirement: "MERK: geoobjektet må være i et geoobjektlag eller en del av en karttjeneste som har popups aktivert.",
    digitizeDistanceMeasureTool: "Bruk <b>Mål</b>-knappen.",
    selectFeatureHelpUrl: "http://help.arcgis.com/no/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/no/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Før musen over ",
    touchIPad: "trykk på iPad",
    locationOnMap: "høydeprofildiagrammet for å vise høyder og lokasjonen på kartet."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Høyde: {0} meter",
  chart: {
    title: "Høydeprofil",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Høyde i {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Avstand i {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Maks:{max}   Start:{start}   Slutt:{end}   Endring:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Ugyldig konfigurasjonsfeil',
      message: 'Ugyldig konfigurasjon.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Mangler konstruksjonsparameterfeil',
      message: 'Mangler konstruksjonsparameter.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Mangler initparameterfeil',
      message: 'Mangler initparameter.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Operasjonen støttes ikke-feil',
      message: 'Denne versjonen av SOE støtter IKKE denne operasjonen.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Geometri i flere deler støttes ikke-feil',
      message: "ADVARSEL: linjer i flere deler støttes for tiden IKKE."
    }
  }
})
);
