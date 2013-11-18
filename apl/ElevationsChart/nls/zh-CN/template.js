define(
({
  display: {
    elevationProfileTitle: "高程剖面图",
    showMe: "显示",
    selectLine: "在地图中选择要素。",
    popupRequirement: "注意: 该要素必须位于要素图层中或者作为启用了弹出窗口的地图服务的组成部分。",
    digitizeDistanceMeasureTool: "使用<b>测量</b>按钮。",
    selectFeatureHelpUrl: "http://help.arcgis.com/zh-cn/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/zh-cn/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "将鼠标悬停在 ",
    touchIPad: "触摸 iPad",
    locationOnMap: "用于显示高程并显示其在地图上的对应位置的高程剖面图图表。"
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "高程: {0} 米",
  chart: {
    title: "高程剖面图",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "高程(以 {0} 为单位)",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "距离(以 {0} 为单位)",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "最小值:{min}   最大值:{max}   起始值:{start}   终止值:{end}   变化值:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: '无效配置错误',
      message: '配置无效。'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: '缺少构造器参数错误',
      message: '缺少构造器参数。'
    },
    MissingInitParameter: {
      code: 17056603,
      name: '缺少初始化参数错误',
      message: '缺少初始参数。'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: '操作不受支持错误',
      message: '此版本的 SOE 不支持此操作。'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: '多部件几何不受支持错误',
      message: "注意: 当前不支持多部件线。"
    }
  }
})
);
