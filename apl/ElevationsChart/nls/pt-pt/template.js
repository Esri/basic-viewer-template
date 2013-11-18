define(
({
  display: {
    elevationProfileTitle: "Perfil de Elevação",
    showMe: "mostre-me",
    selectLine: "Selecione um elemento no mapa.",
    popupRequirement: "NOTA: o elemento necessita de estar numa Camada de Elementos (Feature Layer) ou ser parte de um serviço de mapa com janelas Pop-up ativas",
    digitizeDistanceMeasureTool: "Use o botão <b>Medir</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/pt-br/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/pt-br/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Sobrevoar ",
    touchIPad: "toque no iPad",
    locationOnMap: "o gráfico do Perfil de Elevação  para exibir as elevações e mostrar o local no mapa."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elevação: {0} metros",
  chart: {
    title: "Perfil de Elevação",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elevação em {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distância em {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Mín:{min}   Máx:{max}   Inicial:{start}   Final:{end}   Diferença:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Erro de Configuração não válida',
      message: 'Configuração não válida.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Erro de Parâmetros de Construção Ausentes',
      message: 'Parâmetro de construção ausente.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Erro de Parâmetro Inicial Ausente',
      message: 'Parâmetro inicial ausente.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Erro de Operação Não Suportada',
      message: 'Esta versão de SOE, NÃO suporta este tipo de operação.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Erro de Geometrias de Múltiplas Partes não suportadas.',
      message: "ATENÇÃO: linhas com múltiplas partes NÃO são suportadas atualmente."
    }
  }
})
);
