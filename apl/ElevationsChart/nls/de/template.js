define(
({
  display: {
    elevationProfileTitle: "Höhenprofil",
    showMe: "anzeigen",
    selectLine: "Wählen Sie ein Feature auf der Karte aus.",
    popupRequirement: "HINWEIS: Das Feature muss in einem Feature-Layer enthalten oder Teil eines Karten-Service sein, für den Pop-ups aktiviert sind.",
    digitizeDistanceMeasureTool: "Verwenden Sie die Schaltfläche <b>Messen</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/de/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/de/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Zeigen Sie auf ",
    touchIPad: "berühren Sie auf dem iPad",
    locationOnMap: "das Höhenprofildiagramm, um Höhen anzuzeigen und die Position auf der Karte zu zeigen."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Höhe: {0} Meter",
  chart: {
    title: "Höhenprofil",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Höhe in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Entfernung in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min.:{min}   Max.:{max}   Start:{start}   Ende:{end}   Veränderung:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Ungültige Konfiguration - Fehler',
      message: 'Ungültige Konfiguration.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Fehlende Konstruktorparameter - Fehler',
      message: 'Fehlender Konstruktorparameter.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Fehlender Initialisierungsparameter - Fehler',
      message: 'Fehlende Initialisierungsparameter.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Vorgang wird nicht unterstützt - Fehler',
      message: 'Diese Version von SOE unterstützt diesen Vorgang NICHT.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Multipart-Geometrien werden nicht unterstützt - Fehler',
      message: "ACHTUNG: Multipartlinien werden derzeit NICHT unterstützt."
    }
  }
})
);
