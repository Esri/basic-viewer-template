define(
   ({
  display: {
    elevationProfileTitle: "Hoogteprofiel",
    showMe: "mij tonen",
    selectLine: "Selecteer een lijnobject op de kaart.",
    popupRequirement: "OPMERKING: de lijn moet in een objectlaag liggen of deel uitmaken van een mapservice waarvoor pop-ups zijn ingeschakeld.",
    digitizeDistanceMeasureTool: "Gebruik de knop <b>Meten</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/nl/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/nl/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Beweeg over ",
    touchIPad: "aanraken op iPad",
    locationOnMap: "het Hoogteprofiel om hoogten weer te geven en de locatie op de kaart te tonen."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Hoogte: {0} meter",
  chart: {
    title: "Hoogteprofiel",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Hoogte in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Afstand in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Max:{max}   Start:{start}   Einde :{end}   Wijzigen:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      name: 'Fout ongeldige configuratie',
      message: 'Ongeldige configuratie.'
    },
    MissingConstructorParameters: {
      name: 'Fout ontbrekende opbouwparameters',
      message: 'Ontbrekende opbouwparameter.'
    },
    MissingInitParameter: {
      name: 'Fout ontbrekende init-parameter',
      message: 'Ontbrekende init-parameter.'
    },
    SOEOperationNotSupported: {
      name: 'Fout bewerking niet ondersteund',
      message: 'Deze versie van SOE biedt GEEN ondersteuning voor deze bewerking.'
    },
    SOEMultiPartGeometriesNotSupported: {
      name: 'Fout meerdelige geometrie niet ondersteund',
      message: "OPGELET: meerdelige lijnen worden momenteel NIET ondersteund."
    }
  }
})
);
