define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "英語" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors: {
      createMap: "無法建立地圖",
      bitly: 'bitly 用於縮短 url 以便進行分享。有關建立和使用 bitly 金鑰的詳細資訊，請查看 readme 文件',
      general: "錯誤"
    }
  },
  tools: {
    basemap: {
    title: "切換底圖",
    label: "底圖"
    },
    print: {
    layouts:{
      label1: '橫向(PDF)',
      label2: '縱向(PDF)',
      label3: '橫向(圖像)',
      label4: '縱向(圖像)'
    },
    title: "列印地圖",
    label: "列印"
    },
    share: {
    title: "分享地圖",
    label: "分享",
    menu: {
      facebook: {
        label: "Facebook"
       },
      twitter: {
        label: "Twitter"
      },
      email: {
        label: "電子郵件",
        message: "簽出該地圖"
      }    
    }
    },
    measure: {
      title: "測量",
      label: "測量"
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
      datePattern: "年月日",
      yearPattern: "年",
      hourTimePattern: "h a",
      minuteTimePattern: "h:mm a",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "顯示時間滑桿",
      label: "時間",
      timeRange: "${start_time} 至 ${end_time}",
      timeRangeSingle: "<b>時間範圍:</b> ${time}"
    },
    editor: {
      title: "顯示編輯器",
      label: "編輯器"
    },
    legend: {
      title: "顯示圖例",
      label: "圖例"
    },
    details: {
      title: "顯示地圖詳細資訊",
      label: "詳細資訊"
    },
    bookmark:{
      title: "顯示書簽",
      label: "書簽",
      details: "按一下書簽瀏覽至該位置"
    },
    layers: {
      title: "顯示圖層清單",
      label: "圖層"
    },
    search: {
      title: "查詢地址或地點",
      popupTitle: "位置",
      currentLocation: "目前位置",
      notWhatYouWanted: "不是您想要的位置?" ,
      selectAnother: "選擇其他位置",
      errors:{
       missingLocation: "未找到位置"
      }
    }
  },
  panel: {
    close: {
      title: "關閉面板",
      label: "關閉"
    }
  }
})
);
