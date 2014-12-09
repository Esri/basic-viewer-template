define(
   ({
  display: {
    elevationProfileTitle: "Perfil de Elevação",
    showMe: "mostre-me",
    selectLine: "Selecione uma feição no mapa.",
    popupRequirement: "NOTA: A feição precisa estar em uma Camada de Feição ou ser parte de um serviço de mapa com Pop-ups habilitados.",
    digitizeDistanceMeasureTool: "Use o botão <b>Medir</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/pt-br/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/pt-br/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Pairar ",
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
    gainLossTemplate: "Mín:{min}   Máx:{max}   Inicial:{start}   Final:{end}   Alterar:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      name: 'Erro de Configuração Inválida',
      message: 'Configuração inválida.'
    },
    MissingConstructorParameters: {
      name: 'Erro dos Parâmetros do Construtor Ausentes',
      message: 'Parâmetro do construtor ausente.'
    },
    MissingInitParameter: {
      name: 'Erro do Parâmetro Ini Ausente',
      message: 'Parâmetro ini ausente.'
    },
    SOEOperationNotSupported: {
      name: 'Erro de Operação Sem Suporte',
      message: 'Esta versão de SOE, NÃO tem suporte para esta operação.'
    },
    SOEMultiPartGeometriesNotSupported: {
      name: 'Erro de Geometrias de Múltiplas Partes Sem Suporte.',
      message: "ATENÇÃO: linhas de múltiplas partes NÃO tem suporte atualmente."
    }
  }
})
);
