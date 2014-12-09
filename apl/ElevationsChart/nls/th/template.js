define(
   ({
  display: {
    elevationProfileTitle: "ภาพตัดขวางความสูง",
    showMe: "แสดง",
    selectLine: "เลือกฟีเจอร์บนแผนที่",
    popupRequirement: "หมายเหตุ: ฟีเจอร์จะต้องอยู่ภายในชั้นข้อมูลเฉพาะหรือเป็นส่วนหนึ่งของแมพเซอร์วิสที่มีหน้าต่างป็อปอัพ",
    digitizeDistanceMeasureTool: "ใช้ปุ่ม <b>วัดความยาว</b>",
    selectFeatureHelpUrl: "http://help.arcgis.com/th/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/th/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "บินอยู่เหนือ ",
    touchIPad: "สัมผัสบน iPad",
    locationOnMap: "แผนภูมิภาพตัดขวางความสูงแสดงความสูงและตำแหน่งที่อยู่บนแผนที่"
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "ความสูง: {0} เมตร",
  chart: {
    title: "ภาพตัดขวางความสูง",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "ความสูง {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "ระยะทาง {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "ต่ำสุด:{min}   สูงสุด:{max}   เริ่ม:{start}   สิ้นสุด:{end}   เปลี่ยน:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      name: 'เกิดข้อผิดพลาดจากการปรับแต่งไม่ถูกต้อง',
      message: 'การปรับแต่งไม่ถูกต้อง'
    },
    MissingConstructorParameters: {
      name: 'ข้อผิดพลาดจากพารามิเตอร์ไม่ครบโครงสร้าง',
      message: 'พารามิเตอร์ไม่ครบโครงสร้าง'
    },
    MissingInitParameter: {
      name: 'ข้อผิดพลาดจากพารามิเตอร์ Init ไม่ครบ',
      message: 'พารามิเตอร์ Init ไม่ครบ'
    },
    SOEOperationNotSupported: {
      name: 'ข้อผิดพลาดจากการไม่สนับสนุนการทำงาน',
      message: 'SOE เวอร์ชันนี้ไม่รองรับการทำงานนี้'
    },
    SOEMultiPartGeometriesNotSupported: {
      name: 'ข้อผิดพลาดเนื่องจากไม่รองรับรูปทรงหลายหลายเหลี่ยม',
      message: "คำเตือน: ไม่รองรับรูปทรงเส้นหลายเส้น"
    }
  }
})
);
