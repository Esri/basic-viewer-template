define(
   ({
  display: {
    elevationProfileTitle: "언덕 프로필",
    showMe: "표시",
    selectLine: "맵에서 피처를 선택하세요.",
    popupRequirement: "참고: 피처는 피처 레이어에 있거나 팝업이 활성화된 맵 서비스의 일부여야 합니다.",
    digitizeDistanceMeasureTool: "<b>측정</b> 버튼을 사용하세요.",
    selectFeatureHelpUrl: "http://help.arcgis.com/ko/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/ko/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "배회 ",
    touchIPad: "iPad 터치",
    locationOnMap: "언덕을 표시하고 맵에 위치를 표시할 언덕 프로필입니다."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "언덕: {0}미터",
  chart: {
    title: "언덕 프로필",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "언덕({0})",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "거리({0})",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "분:{min}   최대:{max}   시작:{start}   종료:{end}   변경:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      name: '유효하지 않은 구성 오류',
      message: '유효하지 않은 구성입니다.'
    },
    MissingConstructorParameters: {
      name: '누락 생성자 매개변수 오류',
      message: '생성자 매개변수가 누락되었습니다.'
    },
    MissingInitParameter: {
      name: '초기화 매개변수 누락 오류',
      message: '초기화 매개변수가 누락되었습니다.'
    },
    SOEOperationNotSupported: {
      name: '지원되지 않는 작업 오류',
      message: '이 SOE 버전은 이 작업을 지원하지 않습니다.'
    },
    SOEMultiPartGeometriesNotSupported: {
      name: '지원되지 않는 멀티파트 지오메트리 오류',
      message: "주의: 멀티파트 라인이 현재 지원되지 않습니다."
    }
  }
})
);
