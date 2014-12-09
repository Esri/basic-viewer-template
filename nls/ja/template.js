define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors: {
      createMap: "マップを作成できません",
      bitly: 'bitly を使用すると共有する URL を短縮できます。bitly キーの作成と使用の詳細については、Readme ファイルをご参照ください。',
      general: "エラー"
    }
  },
  tools: {
    basemap: {
    title: "ベースマップの切り替え",
    label: "ベースマップ"
    },
    print: {
    layouts:{
      label1: '横 (PDF)',
      label2: '縦 (PDF)',
      label3: '横 (画像)',
      label4: '縦 (画像)'
    },
    title: "マップの印刷",
    label: "印刷"
    },
    share: {
    title: "マップの共有",
    label: "共有",
    menu: {
      facebook: {
        label: "Facebook"
       },
      twitter: {
        label: "Twitter"
      },
      email: {
        label: "E メール",
        message: "このマップをチェック アウト"
      }    
    }
    },
    measure: {
      title: "計測",
      label: "計測"
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
      datePattern: "yyyy'年'M'月'd'日'",
      yearPattern: "yyyy'年'",
      hourTimePattern: "h a",
      minuteTimePattern: "h:mm a",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "タイム スライダの表示",
      label: "時間",
      timeRange: "${start_time} ～ ${end_time}",
      timeRangeSingle: "<b>時間の範囲:</b> ${time}"
    },
    editor: {
      title: "エディタの表示",
      label: "編集"
    },
    legend: {
      title: "凡例の表示",
      label: "凡例"
    },
    details: {
      title: "マップ詳細の表示",
      label: "詳細"
    },
    bookmark:{
      title: "ブックマークの表示",
      label: "ブックマーク",
      details: "ブックマークをクリックすると、その場所へ移動します"
    },
    layers: {
      title: "レイヤ リストの表示",
      label: "レイヤ"
    },
    search: {
      title: "住所または場所の検索",
      popupTitle: "位置",
      currentLocation: "現在の場所",
      notWhatYouWanted: "他の住所の候補を表示しますか？" ,
      selectAnother: "他の候補を選択",
      errors:{
       missingLocation: "場所が見つかりません"
      }
    }
  },
  panel: {
    close: {
      title: "パネルを閉じる",
      label: "閉じる"
    }
  }
})
);
