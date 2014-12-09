define(
   ({
  viewer: {
    main: {
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors: {
      createMap: "Không thể tạo bản đồ",
      bitly: 'bitly được sử dụng để rút ngắn url để chia sẻ. Xem tệp readme để biết chi tiết về việc tạo và sử dụng một khóa bitly',
      general: "Lỗi"
    }
  },
  tools: {
    basemap: {
    title: "Chuyển đổi Bản đồ nền",
    label: "Bản đồ nền"
    },
    print: {
    layouts:{
      label1: 'Khổ ngang (PDF)',
      label2: 'Khổ dọc (PDF)',
      label3: 'Khổ ngang (Hình ảnh)',
      label4: 'Khổ dọc (Hình ảnh)'
    },
    title: "In Bản đồ",
    label: "In"
    },
    share: {
    title: "Chia sẻ Bản đồ",
    label: "Chia sẻ",
    menu: {
      facebook: {
        label: "Facebook"
       },
      twitter: {
        label: "Twitter"
      },
      email: {
        label: "Email",
        message: "Xem bản đồ này"
      }    
    }
    },
    measure: {
      title: "Đo lường",
      label: "Đo lường"
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
      datePattern: "d MMMM, yyyy",
      yearPattern: "yyyy",
      hourTimePattern: "h a",
      minuteTimePattern: "h:mm a",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "Hiển thị Thanh trượt Thời gian",
      label: "Thời gian",
      timeRange: "${start_time} đến ${end_time}",
      timeRangeSingle: "<b>Khoảng thời gian:</b> ${time}"
    },
    editor: {
      title: "Hiển thị Trình biên tập",
      label: "Trình biên tập"
    },
    legend: {
      title: "Hiển thị Chú giải",
      label: "Chú giải"
    },
    details: {
      title: "Hiển thị Chi tiết của Bản đồ",
      label: "Chi tiết"
    },
    bookmark:{
      title: "Hiển thị Đánh dấu",
      label: "Đánh dấu",
      details: "Nhấp chuột vào một thẻ đánh dấu để điều hướng đến vị trí"
    },
    layers: {
      title: "Hiển thị danh sách lớp",
      label: "Lớp"
    },
    search: {
      title: "Tìm địa chỉ hoặc địa điểm",
      popupTitle: "Vị trí",
      currentLocation: "Vị trí hiện tại",
      notWhatYouWanted: "Không phải cái bạn muốn?" ,
      selectAnother: "Chọn một vị trí khác",
      errors:{
       missingLocation: "Không tìm thấy vị trí"
      }
    }
  },
  panel: {
    close: {
      title: "Đóng Bảng điều khiển",
      label: "Đóng"
    }
  }
})
);
