define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "맵을 생성할 수 없음",
      bitly: 'bitly가 공유를 위해 url을 단축하는 데 사용됩니다. bitly 키 생성 및 사용에 대한 자세한 내용은 readme 파일을 참조하세요.',
      general: "오류"
    }
  },
  tools:{
    basemap: {
    title: "베이스맵 전환",
    label: "베이스맵"
    },
    print: {
    layouts:{
      label1: '가로(PDF)',
      label2: '세로(PDF)',
      label3: '가로(Image)',
      label4: '세로(Image)'
    },
    title: "맵 인쇄",
    label: "인쇄"
    },
    share: {
    title: "맵 공유",
    label: "공유",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "이메일",
        message: "이 맵 체크 아웃"
      }    
    }
    },
    measure: {
      title: "측정",
      label: "측정"
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
      weekPattern: "yyyy MMMM d",
      hourTimePattern: "a h",
      // e.g. for German: "H:mm:ss:SSS"
      millisecondTimePattern:"한_h:m:ss.SSS a_빠",
      minuteTimePattern: "a h:mm",
      // e.g. for German: "H:mm"
      monthPattern: "MMMM d, y",
      secondTimePattern: "h:m:s.SSS a",
      title: "시간 슬라이더 표시",
      label: "시간",
      timeRange: "<b>시간 범위:</b> ${start_time} ~ ${end_time}",
      timeRangeSingle: "<b>시간 범위:</b> ${time}"
    },
    editor: {
      title: "편집기 표시",
      label: "편집기"
    },
    legend: {
      title: "범례 표시",
      label: "범례"
    },
    details: {
      title: "맵 세부정보 표시",
      label: "설명"
    },
    bookmark:{
      title: "책갈피 표시",
      label: "책갈피",
      details: "책갈피를 클릭하여 위치 탐색"
    },
    layers: {
      title: "레이어 목록 표시",
      label: "레이어"
    },
    search: {
      title: "주소 또는 위치 찾기",
      popupTitle: "위치",
      currentLocation: "현재 위치",
      notWhatYouWanted: "원하는 결과가 아닌가요?" ,
      selectAnother: "다른 위치 선택",
      errors:{
       missingLocation: "위치 없음"
      }
    }
  },
  panel:{
    close:{
      title: "패널 닫기",
      label: "닫기"
    }
  }
})
);