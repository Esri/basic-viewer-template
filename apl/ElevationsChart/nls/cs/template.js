define(
   ({
  display: {
    elevationProfileTitle: "Výškový profil",
    showMe: "ukaž mi",
    selectLine: "Vyberte prvek v mapě.",
    popupRequirement: "POZNÁMKA: prvek se musí nacházet ve vrstvě prvků, nebo musí být součástí mapové služby s povolenými vyskakovacími okny.",
    digitizeDistanceMeasureTool: "Použijte tlačítko <b>Měření</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Přesuňte ukazatel myši nad ",
    touchIPad: "na iPadu klepněte na",
    locationOnMap: "graf výškového profilu pro zobrazení nadmořských výšek a umístění na mapě."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Nadmořská výška: {0} metrů",
  chart: {
    title: "Výškový profil",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Nadmořská výška v {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Vzdálenost v {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Max:{max}   Začátek:{start}   Konec:{end}   Změna:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      name: 'Chyba: neplatná konfigurace',
      message: 'Neplatná konfigurace'
    },
    MissingConstructorParameters: {
      name: 'Chyba: chybí parametry konstruktéru.',
      message: 'Chybí parametry konstruktéru.'
    },
    MissingInitParameter: {
      name: 'Chyba: chybí inicializační parametr',
      message: 'Chybí inicializační parametr.'
    },
    SOEOperationNotSupported: {
      name: 'Chyba: operace není podporována.',
      message: 'Tato verze SOE tuto operaci nepodporuje.'
    },
    SOEMultiPartGeometriesNotSupported: {
      name: 'Chyba: vícenásobné geometrie nejsou podporovány.',
      message: "POZOR: vícenásobné linie v současnosti nejsou podporovány."
    }
  }
})
);
