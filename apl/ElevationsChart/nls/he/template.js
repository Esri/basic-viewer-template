define(
({
  display: {
    elevationProfileTitle: "פרופיל גבהים",
    showMe: "הצג בפניי",
    selectLine: "בחר ישות במפה.",
    popupRequirement: "הערה: הישות צריכה להיות בשכבת ישויות או חלק משירות מפה שאופשרה בו תצוגת חלונות קופצים.",
    digitizeDistanceMeasureTool: "השתמש בכפתור <b>המדידה</b>",
    selectFeatureHelpUrl: "http://help.arcgis.com/he/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/he/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "רחף מעל ",
    touchIPad: "נגיעה באייפד",
    locationOnMap: "תרשים פרופיל הגבהים להצגת גבהים ומיקום על מפה."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "גובה: {0} מטרים",
  chart: {
    title: "פרופיל גבהים",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "גובה ב {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "מרחק ב {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "מינימום:{min}   מקסימום:{max}   התחלה:{start}   סוף:{end}   שינוי:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'שגיאה תצורה לא תקינה',
      message: 'קביעת תצורה לא תקינה.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'שגיאת פרמטר Constructor חסר',
      message: 'מחסור בפרמטר Constructor'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'שגיאה במחסור בפרמטר Init',
      message: 'חסר פרמטר אתחול'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'שגיאת פעולה לא נתמכת',
      message: 'גרסה זו של SOE לא תומכת בפעולה זו.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'שגיאת גיאומטריות מרובות חלקים לא נתמכות',
      message: "זהירות: קווים מרובי חלקים כרגע לא נתמכים."
    }
  }
})
);
