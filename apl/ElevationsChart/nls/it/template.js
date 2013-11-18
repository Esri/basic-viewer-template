define(
({
  display: {
    elevationProfileTitle: "Profilo di elevazione",
    showMe: "mostra",
    selectLine: "Selezionare una feature nella mappa.",
    popupRequirement: "NOTA: la feature deve essere inclusa in un feature layer o far parte di un map service per il quale sono abilitati i popup.",
    digitizeDistanceMeasureTool: "Utilizzare il pulsante <b>Misura</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/it/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/it/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Passare il mouse ",
    touchIPad: "toccare su iPad",
    locationOnMap: "sul grafico Profilo di elevazione per visualizzare le elevazioni e mostrare la posizione nella mappa."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elevazione: {0} metri",
  chart: {
    title: "Profilo di elevazione",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elevazione in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distanza in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min: {min}   Max: {max}   Inizio: {start}   Fine: {end}   Variazione: {gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Errore di configurazione non valida',
      message: 'Configurazione non valida.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Errore di parametro constructor mancante',
      message: 'Parametro constructor mancante.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Errore di parametro init mancante',
      message: 'Parametro init mancante.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Errore di operazione non supportata',
      message: 'Questa versione di SOE NON supporta questa operazione.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Errore di geometrie multiparte non supportate',
      message: "ATTENZIONE: le linee multiparte NON sono attualmente supportate."
    }
  }
})
);
