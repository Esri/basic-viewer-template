define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "ไม่สามารถสร้างแผนที่ได้",
      bitly: 'bitly ใช้เพื่อทำให้ URL สำหรับการแชร์สั้นลง อ่านไฟล์ Readme สำหรับรายละเอียดในการสร้างและใช้ bitly key',
      general: "ข้อผิดพลาด"
    }
  },
  tools:{
    basemap: {
    title: "เปลี่ยนแผนที่ฐาน",
    label: "แผนที่ฐาน"
    },
    print: {
    layouts:{
      label1: 'แนวนอน (PDF)',
      label2: 'แนวตั้ง (PDF)',
      label3: 'แนวนอน (Image)',
      label4: 'แนวตั้ง (Image)'
    },
    title: "พิมพ์แผนที่",
    label: "พิมพ์"
    },
    share: {
    title: "แชร์แผนที่",
    label: "แชร์",
    menu:{
      facebook:{
        label: "เฟสบุค"
       },
      twitter:{
        label: "ทวิตเตอร์"
      },
      email:{
        label: "อีเมล์",
        message: "ดูแผนที่นี้"
      }    
    }
    },
    measure: {
      title: "มาตรา",
      label: "มาตรา"
    },
    time: {
      // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
      // yyyy: full year, e.g. 2011
      // MMMM: full month name, e.g. December
      // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
      // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
      // a: am/pm
      // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
      // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
      // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
      datePattern: "MMMM d, yyyy",
      yearPattern: "yyyy",
      hourTimePattern: "h a",
      minuteTimePattern: "h:mm a",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "แสดงตัวเลื่อนเวลา",
      label: "เวลา",
      timeRange: "${start_time} ถึง ${end_time}",
      timeRangeSingle: "<b>ช่วงเวลา:</b> ${time}"
    },
    editor: {
      title: "แสดงแถบเครื่องมือแก้ไข",
      label: "เครื่องมือแก้ไข"
    },
    legend: {
      title: "แสดงคำอธิบายสัญลักษณ์",
      label: "คำอธิบายสัญลักษณ์"
    },
    details: {
      title: "แสดงรายละเอียดของแผนที่",
      label: "รายละเอียดของแผนที่"
    },
    bookmark:{
      title: "แสดงบุ๊คมาร์ค",
      label: "บุ๊คมาร์ค",
      details: "คลิกบุ๊คมาร์คเพื่อไปยังตำแหน่งที่บันทึกไว้"
    },
    layers: {
      title: "แสดงรายชื่อชั้นข้อมูล",
      label: "รายชื่อชั้นข้อมูล"
    },
    search: {
      title: "ค้นหาที่อยู่หรือสถานที่",
      popupTitle: "ตำแหน่ง",
      currentLocation: "ตำแหน่งปัจจุบัน",
      notWhatYouWanted: "ไม่ใช่สิ่งที่ต้องการ?" ,
      selectAnother: "เลือกตำแหน่งใหม่",
      errors:{
       missingLocation: "ไม่พบตำแหน่งที่ต้องการ"
      }
    }
  },
  panel:{
    close:{
      title: "ปิดแถบเครื่องมือ",
      label: "ปิด"
    }
  }
})
);