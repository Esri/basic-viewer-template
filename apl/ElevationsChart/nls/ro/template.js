define(
({
  display: {
    elevationProfileTitle: "Profil elevaţie",
    showMe: "arată",
    selectLine: "Selectaţi un obiect spaţial din hartă.",
    popupRequirement: "NOTĂ: linia trebuie să se afle într-un strat tematic de obiecte spaţiale sau să facă parte dintr-un serviciu de hartă care are activate Mesaje pup-up.",
    digitizeDistanceMeasureTool: "Utilizaţi butonul <b>Măsurare</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/ro/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/ro/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Suprapuneţi mouse-ul peste ",
    touchIPad: "atingeţi pe iPad",
    locationOnMap: "diagrama Profil elevaţie pentru a afişa elevaţiile şi pentru a afişa locaţia pe hartă."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elevaţie: {0} metri",
  chart: {
    title: "Profil elevaţie",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elevaţie în {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distanţă în {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min.:{min}   Max.:{max}   Pornire:{start}   Sfârşit:{end}   Modificare:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Eroare Configuraţie nevalidă',
      message: 'Configuraţie nevalidă.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Eroare Absenţă parametri constructor',
      message: 'Lipsesc parametrii constructorului.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Eroare Absenţă parametru iniţial',
      message: 'Lipseşte parametrul iniţial.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Eroare Operaţie neacceptată',
      message: 'Această versiune SOE NU acceptă această operaţie.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Eroare Geometrii multicomponente neacceptate',
      message: "PRECAUŢIE: liniile multicomponente NU sunt acceptate în acest moment."
    }
  }
})
);
