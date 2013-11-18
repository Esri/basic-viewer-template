define(
({
  display: {
    elevationProfileTitle: "Kõrgusprofiil",
    showMe: "näita",
    selectLine: "Vali objekt kaardilt.",
    popupRequirement: "MÄRKUS: objekt peab olema objektikihis või olema osa kaarditeenusest, millel on hüpikaknad lubatud.",
    digitizeDistanceMeasureTool: "Kasuta <b>Mõõda</b> nuppu.",
    selectFeatureHelpUrl: "http://help.arcgis.com/et/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/et/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Liiguta üle ",
    touchIPad: "puuduta iPad-i",
    locationOnMap: "kõrgusprofiili graafik kõrguste kuvamiseks ja kaardil asukoha näitamiseks."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Kõrgus: {0} meetrit",
  chart: {
    title: "Kõrgusprofiil",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Kõrgus {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Vahemaa {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Max:{max}   Algus:{start}   Lõpp:{end}   Muutus:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Vale konfiguratsiooni viga',
      message: 'Vale konfiguratsioon.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Puuduvate konstruktori parameetrite viga',
      message: 'Puuduv konstruktori parameeter.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Puuduva algparameetri viga',
      message: 'Puuduv algparameeter.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Mittetoetatud tegevuse viga',
      message: 'See SOE versioon EI toeta seda tegevust.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Mitmeosalise geomeetria mittetoetamise viga',
      message: "HOIATUS: mitmeosalised jooned EI ole hetkel toetatud."
    }
  }
})
);
