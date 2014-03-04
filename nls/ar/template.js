define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "يتعذر إنشاء الخريطة",
      bitly: 'يستخدم bitly لاختصار عنوان url حتى يمكن مشاركته. أظهر ملف \"اقرأني\" للحصول على تفاصيل إنشاء مفتاح bitly واستخدامه',
      general: "خطأ"
    }
  },
  tools:{
    basemap: {
    title: "تبديل خريطة الأساس",
    label: "خريطة أساسية"
    },
    print: {
    layouts:{
      label1: 'وضع أفقي (PDF)',
      label2: 'وضع عمودي (PDF)',
      label3: 'وضع أفقي (صورة)',
      label4: 'وضع عمودي (صورة)'
    },
    title: "طباعة الخريطة",
    label: "طباعة"
    },
    share: {
    title: "مشاركة الخريطة",
    label: "مشاركة",
    menu:{
      facebook:{
        label: "فيس بوك"
       },
      twitter:{
        label: "تويتر"
      },
      email:{
        label: "البريد الإلكتروني",
        message: "فحص الخريطة"
      }    
    }
    },
    measure: {
      title: "قياس",
      label: "قياس"
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
      datePattern: "dd MMMM, yyyy",
      yearPattern: "yyyy",
      hourTimePattern: "h a",
      minuteTimePattern: "h:mm a",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "عرض شريط تمرير الوقت",
      label: "الوقت",
      timeRange: "${start_time} إلى ${end_time}",
      timeRangeSingle: "<b> نطاق الوقت: </b> ${time}"
    },
    editor: {
      title: "عرض المحرر",
      label: "المحرر"
    },
    legend: {
      title: "عرض مفتاح الخريطة",
      label: "مفتاح الخريطة"
    },
    details: {
      title: "عرض تفاصيل الخريطة",
      label: "التفاصيل"
    },
    bookmark:{
      title: "عرض العلامات المرجعية",
      label: "إشارات مرجعية",
      details: "انقر على علامة مرجعية للانتقال إلى الموقع"
    },
    layers: {
      title: "عرض قائمة الطبقات",
      label: "طبقات"
    },
    search: {
      title: "العثور على عنوان أو مكان ما",
      popupTitle: "موقع",
      currentLocation: "الموقع الحالي",
      notWhatYouWanted: "أليس هذا ما تريده؟" ,
      selectAnother: "حدد موقع آخر",
      errors:{
       missingLocation: "لم يتم العثور على الموقع"
      }
    }
  },
  panel:{
    close:{
      title: "إغلاق اللوحة",
      label: "إغلاق"
    }
  }
})
);