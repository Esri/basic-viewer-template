define(
({
  display: {
    elevationProfileTitle: "Профиль рельефа",
    showMe: "показать",
    selectLine: "Выберите объект на карте.",
    popupRequirement: "ПРИМЕЧАНИЕ: Пространственный объект должен принадлежать векторному слою или быть частью картографического сервиса со включенными всплывающими окнами.",
    digitizeDistanceMeasureTool: "Используйте кнопку <b>Изменить</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/ru/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/ru/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Задержать над ",
    touchIPad: "сенсорный iPad",
    locationOnMap: "график профиля рельефа для отображения высот и местоположений на карте."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Высота: {0} метров",
  chart: {
    title: "Профиль рельефа",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Высота в {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Расстояние в {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Мин:{min}   Макс:{max}   Начало:{start}   Конец:{end}   Изменено:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Ошибка некорректной конфигурации',
      message: 'Некорректная конфигурация'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Ошибка пропуска параметров конструктора',
      message: 'Пропуск параметра конструктора.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Ошибка пропуска начального параметра',
      message: 'Пропущен начальный параметр.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Ошибка отсутствия поддержки операции',
      message: 'Эта версия SOE НЕ поддерживает эту операцию.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Ошибка отсутствия поддержки составной геометрии',
      message: "ВНИМАНИЕ: составная линия в настоящий момент НЕ поддерживается."
    }
  }
})
);
