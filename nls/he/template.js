define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "לא ניתן ליצור מפה",
      bitly: 'השימוש ב-bit.ly מיועד לקיצור ה- url לצורך שיתוף. קרא את קובץ ה- readme לפרטים על איך ליצור ולהשתמש במפתח bitly',
      general: "שגיאה"
    }
  },
  tools:{
    basemap: {
    title: "החלף מפת בסיס",
    label: "מפת בסיס"
    },
    print: {
    layouts:{
      label1: 'לרוחב (PDF)',
      label2: 'לאורך (PDF)',
      label3: 'לרוחב (Image)',
      label4: 'לאורך (Image)'
    },
    title: "הדפס מפה",
    label: "הדפס"
    },
    share: {
    title: "שתף מפה",
    label: "שתף",
    menu:{
      facebook:{
        label: "פייסבוק"
       },
      twitter:{
        label: "טוויטר"
      },
      email:{
        label: "Email",
        message: "בדוק מפה זו"
      }    
    }
    },
    measure: {
      title: "מדידה",
      label: "מדידה"
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
      centuryPattern: "yyyy G",
      decadePattern: "yyyy", 
      yearPattern: "MMMM yyyy",
      weekPattern: "d, MMMM ,yyyy",
      hourTimePattern: "h a",
      // e.g. for German: "H:mm:ss:SSS"
      millisecondTimePattern:"כן_h:m:ss.SSS a_ש",
      minuteTimePattern: "h:mm a",
      // e.g. for German: "H:mm"
      monthPattern: "MMMM d, y",
      secondTimePattern: "h:m:s.SSS a",
      title: "הצג סרגל זמן",
      label: "זמן",
      timeRange: "<b>טווח זמן: </b> ${start_time} עד ${end_time}",
      timeRangeSingle: "<b>טווח זמן: </b> ${time}"
    },
    editor: {
      title: "הצג עורך",
      label: "עורך"
    },
    legend: {
      title: "הצג מקרא",
      label: "מקרא"
    },
    details: {
      title: "הצג פרטי מפה",
      label: "פרטים"
    },
    bookmark:{
      title: "הצג סימניות",
      label: "סימניות",
      details: "לחץ על סימניה כדי לנווט למיקום"
    },
    layers: {
      title: "הצג רשימת שכבה",
      label: "שכבות"
    },
    search: {
      title: "מצא כתובת או מקום",
      popupTitle: "מיקום",
      currentLocation: "מיקום נוכחי",
      notWhatYouWanted: "לא מה שחיפשת?" ,
      selectAnother: "בחר מיקום אחר",
      errors:{
       missingLocation: "לא נמצא מיקום"
      }
    }
  },
  panel:{
    close:{
      title: "לוח סגור",
      label: "סגור"
    }
  }
})
);