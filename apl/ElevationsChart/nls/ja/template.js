define(
   ({
  display: {
    elevationProfileTitle: "標高グラフ",
    showMe: "表示",
    selectLine: "マップ内のフィーチャを選択します。",
    popupRequirement: "注意: フィーチャはフィーチャ サービス内にあるか、ポップアップが有効なマップ サービスの一部である必要があります。",
    digitizeDistanceMeasureTool: "<b>計測</b>ボタンを使用します。",
    selectFeatureHelpUrl: "http://help.arcgis.com/ja/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/ja/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "地形の断面図をマウスでポイントすると ",
    touchIPad: "(iPad 上ではタップすると)、",
    locationOnMap: "断面図上に標高値とマップ上に位置が表示されます。"
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "標高: {0} メートル",
  chart: {
    title: "標高グラフ",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "標高 ({0})",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "距離 ({0})",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "最小: {min}   最大: {max}   始点: {start}   終点: {end}   標高差: {gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      name: '無効な構成のエラー',
      message: '構成が無効です。'
    },
    MissingConstructorParameters: {
      name: 'コンストラクタ パラメータが見つからないエラー',
      message: 'コンストラクタ パラメータが見つかりません。'
    },
    MissingInitParameter: {
      name: 'init パラメータが見つからないエラー',
      message: 'init パラメータが見つかりません。'
    },
    SOEOperationNotSupported: {
      name: 'サポートされていない操作のエラー',
      message: 'この操作は、このバージョンの SOE ではサポートされていません。'
    },
    SOEMultiPartGeometriesNotSupported: {
      name: 'マルチパート ジオメトリがサポートされていないエラー',
      message: "注意: マルチパート ラインは、現在サポートされていません。"
    }
  }
})
);
