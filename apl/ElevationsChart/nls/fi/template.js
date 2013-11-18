define(
({
  display: {
    elevationProfileTitle: "Korkeusprofiili",
    showMe: "näytä minut",
    selectLine: "Valitse kartasta kohde.",
    popupRequirement: "HUOM.: kohteen on oltava sellaisessa kohteen karttatasossa tai osa sellaista karttapalvelua, jossa ponnahdusikkunat ovat käytössä.",
    digitizeDistanceMeasureTool: "Käytä <b>Mittaus</b>-painiketta.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Siirry päälle ",
    touchIPad: "koske iPadissa",
    locationOnMap: "Korkeusprofiili-kaaviota, niin voit näyttää korkeustasot ja sijainnin kartalla."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Korkeustaso: {0} metriä",
  chart: {
    title: "Korkeusprofiili",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Korkeustaso yksiköissä {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Etäisyys yksiköissä {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min.:{min}   Maks.:{max}   Alku:{start}   Loppu:{end}   Muutos:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Virheellinen kokoonpano -virhe',
      message: 'Virheellinen kokoonpano.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Muodostusohjelman parametreja puuttuu -virhe.',
      message: 'Muodostusohjelman parametri puuttuu.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Alustusparametri puuttuu -virhe.',
      message: 'Alustusparametri puuttuu.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Toimintoa ei tueta -virhe',
      message: 'Tämä SOE-versio EI tue tätä toimintoa.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Moniosaisia kohteita ei tueta -virhe',
      message: "HUOM.: tällä hetkellä EI tueta moniosaisia viivoja."
    }
  }
})
);
