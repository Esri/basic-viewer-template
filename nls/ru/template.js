define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Не удалось создать карту",
      bitly: 'Для сокращения url при предоставления общего доступа используется ключ bitly. Информация о создании и использовании ключа bitly находится в файле readme.',
      general: "Ошибка"
    }
  },
  tools:{
    basemap: {
    title: "Переключить базовую карту",
    label: "Базовая карта"
    },
    print: {
    layouts:{
      label1: 'Альбомная (PDF)',
      label2: 'Книжная (PDF)',
      label3: 'Альбомная (Image)',
      label4: 'Книжная (Image)'
    },
    title: "Печать карты",
    label: "Печать"
    },
    share: {
    title: "Общий доступ к карте",
    label: "Общий доступ",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "Email",
        message: "Открепить карту"
      }    
    }
    },
    measure: {
      title: "Измерить",
      label: "Измерить"
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
      centuryPattern: "гггг G",
      decadePattern: "yyyy", 
      yearPattern: "ММММ гггг",
      weekPattern: "dd MMMM yyyy \'г.\'",
      hourTimePattern: "H",
      // e.g. for German: "Ч:мм:сс:ССС"
      millisecondTimePattern:"h:m:ss.SSS a",
      minuteTimePattern: "H:mm",
      // e.g. for German: "Ч:мм"
      monthPattern: "ММММ ч, г",
      secondTimePattern: "ч:м:с.ССС a",
      title: "Показать бегунок времени",
      label: "Время",
      timeRange: "<b>Временной диапазон:</b> ${start_time} to ${end_time}",
      timeRangeSingle: "<b>Временной диапазон:</b> ${time}"
    },
    editor: {
      title: "Показать редактор",
      label: "Редактор"
    },
    legend: {
      title: "Показать легенду",
      label: "Легенда"
    },
    details: {
      title: "Просмотр информации о карте",
      label: "Детали"
    },
    bookmark:{
      title: "Показать закладки",
      label: "Закладки",
      details: "Щелкните закладку, чтобы перейти к местоположению"
    },
    layers: {
      title: "Показать список слоев",
      label: "Слои"
    },
    search: {
      title: "Найти адрес или место",
      popupTitle: "Местоположение",
      currentLocation: "Текущее местоположение",
      notWhatYouWanted: "Не то, что вам нужно?" ,
      selectAnother: "Выберите другое местоположение",
      errors:{
       missingLocation: "Местоположение не найдено"
      }
    }
  },
  panel:{
    close:{
      title: "Закрыть панель",
      label: "Закрыть"
    }
  }
})
);