define(
({
  viewer:{
    main:{
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Harita oluşturulamıyor",
      bitly: 'bitly, paylaşmak üzere url\'yi kısaltmak için kullanılır. Bir bitly anahtarı oluşturma ve kullanmanın ayrıntıları için readme dosyasına bakın',
      general: "Hata"
    }
  },
  tools:{
    basemap: {
    title: "Altlık Haritayı Değiştir",
    label: "Altlık Harita"
    },
    print: {
    layouts:{
      label1: 'Yatay (PDF)',
      label2: 'Dikey (PDF)',
      label3: 'Yatay (Görüntü)',
      label4: 'Dikey (Görüntü)'
    },
    title: "Haritayı Yazdır",
    label: "Yazdır"
    },
    share: {
    title: "Haritayı Paylaş",
    label: "Paylaş",
    menu:{
      facebook:{
        label: "Facebook"
       },
      twitter:{
        label: "Twitter"
      },
      email:{
        label: "E-posta",
        message: "Bu haritayı teslim al"
      }    
    }
    },
    measure: {
      title: "Ölç",
      label: "Ölç"
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
      datePattern: "d MMMM yyyy",
      yearPattern: "yyyy",
      hourTimePattern: "h a",
      minuteTimePattern: "h:mm a",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "Zaman Kaydırıcısını Göster",
      label: "Zaman",
      timeRange: "${start_time} - ${end_time}",
      timeRangeSingle: "<b>Saat Aralığı:</b> ${time}"
    },
    editor: {
      title: "Düzenleyiciyi Göster",
      label: "Düzenleyici"
    },
    legend: {
      title: "Göstergeyi Görüntüle",
      label: "Gösterge"
    },
    details: {
      title: "Harita Ayrıntılarını Görüntüle",
      label: "Ayrıntılar"
    },
    bookmark:{
      title: "Yer İşaretlerini Görüntüle",
      label: "Yer İşaretleri",
      details: "Konuma gitmek için bir yer işaretine tıklayın"
    },
    layers: {
      title: "Katman listesini görüntüle",
      label: "Katmanlar"
    },
    search: {
      title: "Adres veya yer bul",
      popupTitle: "Konum",
      currentLocation: "Geçerli Konum",
      notWhatYouWanted: "İstediğiniz bu değil mi?" ,
      selectAnother: "Başka bir konum seç",
      errors:{
       missingLocation: "Konum bulunamadı"
      }
    }
  },
  panel:{
    close:{
      title: "Paneli Kapat",
      label: "Kapat"
    }
  }
})
);