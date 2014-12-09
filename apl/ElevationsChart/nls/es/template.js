define(
   ({
  display: {
    elevationProfileTitle: "Perfil de elevación",
    showMe: "mostrarme",
    selectLine: "Seleccionar una entidad en el mapa.",
    popupRequirement: "NOTA: La entidad tiene que estar en una capa de entidad o formar parte de un servicio de mapas con las ventanas emergentes activadas.",
    digitizeDistanceMeasureTool: "Utilizar el botón <b>Medir</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/es/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/es/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Pasar el ratón ",
    touchIPad: "tocar en el iPad",
    locationOnMap: "el gráfico de perfil de elevación para ver las elevaciones y la ubicación en el mapa."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elevación: {0} metros",
  chart: {
    title: "Perfil de elevación",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elevación en {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distancia en {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Mín:{min}   Máx:{max}   Inicio:{start}   Fin:{end}   Cambio:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      name: 'Error de configuración no válida',
      message: 'Configuración no válida.'
    },
    MissingConstructorParameters: {
      name: 'Error de parámetros de constructor faltantes',
      message: 'Parámetro de constructor faltante.'
    },
    MissingInitParameter: {
      name: 'Error de parámetro inic. faltante',
      message: 'Parámetro inic. faltante.'
    },
    SOEOperationNotSupported: {
      name: 'Error de operación no compatible',
      message: 'Esta versión de SOE NO es compatible con esta operación.'
    },
    SOEMultiPartGeometriesNotSupported: {
      name: 'Error de geometrías de varias partes no compatibles',
      message: "AVISO: Las líneas formadas por varias partes NO son compatibles."
    }
  }
})
);
