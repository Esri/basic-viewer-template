define({
  root: ({
  viewer: {
    main: {
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors: {
      createMap: "Unable to create map",
      bitly: 'bitly is used to shorten the url for sharing. View the readme file for details on creating and using a bitly key',
      general: "Error"
    }
  },
  tools: {
    basemap: {
    title: "Switch Basemap",
    label: "Basemap"
    },
    print: {
    layouts:{
      label1: 'Landscape (PDF)',
      label2: 'Portrait (PDF)',
      label3: 'Landscape (Image)',
      label4: 'Portrait (Image)'
    },
    title: "Print Map",
    label: "Print"
    },
    share: {
    title: "Share Map",
    label: "Share",
    menu: {
      facebook: {
        label: "Facebook"
       },
      twitter: {
        label: "Twitter"
      },
      email: {
        label: "Email",
        message: "Check out this map"
      }    
    }
    },
    measure: {
      title: "Measure",
      label: "Measure"
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
      datePattern: "MMMM d, yyyy",
      yearPattern: "yyyy",
      hourTimePattern: "h a",
      minuteTimePattern: "h:mm a",
      secondTimePattern: "h:m:s.SSS a",
      millisecondTimePattern:"h:m:ss.SSS a",
      title: "Display Time Slider",
      label: "Time",
      timeRange: "${start_time} to ${end_time}",
      timeRangeSingle: "<b>Time Range:</b> ${time}"
    },
    editor: {
      title: "Display Editor",
      label: "Editor"
    },
    legend: {
      title: "Display Legend",
      label: "Legend"
    },
    details: {
      title: "Display Map Details",
      label: "Details"
    },
    bookmark:{
      title: "Display Bookmarks",
      label: "Bookmarks",
      details: "Click a bookmark to navigate to the location"
    },
    layers: {
      title: "Display layer list",
      label: "Layers"
    },
    search: {
      title: "Find address or place",
      popupTitle: "Location",
      currentLocation: "Current location",
      notWhatYouWanted: "Not what you wanted?" ,
      selectAnother: "Select another location",
      errors:{
       missingLocation: "Location not found"
      }
    }
  },
  panel: {
    close: {
      title: "Close Panel",
      label: "Close"
    }
  }
}),
"ar": 1,
"cs": 1,
"da": 1,
"de": 1,
"el": 1,
"es": 1,
"et": 1,
"fi": 1,
"fr": 1,
"he": 1,
"it": 1,
"ja": 1,
"ko": 1,
"lt": 1,
"lv": 1,
"nl": 1,
"nb": 1,
"pl": 1,
"pt-br": 1,
"pt-pt": 1,
"ro": 1,
"ru": 1,
"sv": 1,
"tr": 1,
"th": 1,
"vi": 1,
"zh-cn": 1
});
