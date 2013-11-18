define(
({
  display: {
    elevationProfileTitle: "Profil för höjdkurva",
    showMe: "visa mig",
    selectLine: "Välj ett geoobjekt på kartan.",
    popupRequirement: "Obs! Geoobjektet måste finnas i ett geoobjektslager eller vara en del av en karttjänst där popupfönster har aktiverats.",
    digitizeDistanceMeasureTool: "Använd knappen <b>Mät</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/sv/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/sv/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Hovra över ",
    touchIPad: "peka på iPad",
    locationOnMap: "diagrammet Profil för höjdkurva för att visa höjder och visa platsen på kartan."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Höjd: {0} meter",
  chart: {
    title: "Profil för höjdkurva",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Höjd i {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Avstånd i {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Max:{max}   Start:{start}   Slut:{end}   Ändring:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Fel: ogiltig konfiguration',
      message: 'Ogiltig konfiguration.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Fel: konstruerarparametrar saknas',
      message: 'Konstruerarparameter saknas.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Fel: initparameter saknas',
      message: 'Initparameter saknas.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Fel: åtgärden stöds inte',
      message: 'Den här versionen av SOE stöder INTE den här åtgärden.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Fel: flerdelade geometrier stöds inte',
      message: "VARNING: flerdelade linjer stöds INTE för tillfället."
    }
  }
})
);
