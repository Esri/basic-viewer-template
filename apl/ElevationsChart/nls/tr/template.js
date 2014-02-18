define(
({
  display: {
    elevationProfileTitle: "Yükselti Profili",
    showMe: "göster",
    selectLine: "Haritadan bir detay seçin.",
    popupRequirement: "NOT: detayın bir Detay Katmanı içinde veya Açılan Pencerelerin etkinleştirildiği bir harita servisinin bir parçası olması gerekir.",
    digitizeDistanceMeasureTool: "<b>Ölçüm</b> düğmesini kullanın.",
    selectFeatureHelpUrl: "http://help.arcgis.com/tr/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/tr/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Yükseltileri görüntülemek ve ",
    touchIPad: "iPad\'e dokunun:",
    locationOnMap: "haritada konumu göstermek için Yükselti Profili grafiği üzerinde gezinin."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Yükselti: {0} metre",
  chart: {
    title: "Yükselti Profili",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "{0} olarak yükselti",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "{0} olarak mesafe",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min.:{min}   Maks.:{max}   Başlangıç:{start}   Bitiş:{end}   Değişim:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Geçersiz Yapılandırma Hatası',
      message: 'Geçersiz yapılandırma.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Eksik Yapıcı Parametreleri Hatası',
      message: 'Eksik yapıcı parametresi.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Eksik İlk Değer Parametresi Hatası',
      message: 'Eksik ilk değer parametresi.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'İşlem Desteklenmiyor Hatası',
      message: 'Bu SOE sürümü bu işlemi DESTEKLEMEZ.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Çok Bölümlü Geometriler Desteklenmiyor Hatası',
      message: "DİKKAT: çok parçalı çizgiler henüz DESTEKLENMEMEKTEDİR."
    }
  }
})
);
