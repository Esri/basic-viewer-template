/*=============================================================================
 *
 * Copyright 2010 ESRI. All rights reserved.
 *
 * Use subject to ESRI license agreement.
 *
 * Unpublished all rights reserved.
 * Use of this ESRI commercial Software, Data, and Documentation is limited to
 * the ESRI License Agreement. In no event shall the Government acquire greater
 * than Restricted/Limited Rights. At a minimum Government rights to use,
 * duplicate, or disclose is subject to restrictions as set for in FAR 12.211,
 * FAR 12.212, and FAR 52.227-19 (June 1987), FAR 52.227-14 (ALT I, II, and III)
 * (June 1987), DFARS 227.7202, DFARS 252.227-7015 (NOV 1995).
 * Contractor/Manufacturer is ESRI, 380 New York Street, Redlands,
 * CA 92373-8100, USA.
 *
 * SAMPLE CODE IS PROVIDED "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
 * INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE, ARE DISCLAIMED.  IN NO EVENT SHALL ESRI OR CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) SUSTAINED BY YOU OR A THIRD PARTY, HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT; STRICT LIABILITY; OR TORT ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SAMPLE CODE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE TO THE FULL EXTENT ALLOWED BY APPLICABLE LAW.
 *
 * =============================================================================*/

/**
 * apl.ElevationsChart.Pane
 *
 * Elevations Profile Chart
 *  - dijit to show profile chart of elevation values returned from Elevations SOE
 *  - works in conjunction with a map and measure dijits
 *  - works with selected features in Feature Layer or map service with popups enabled
 *  - mouseover/touchmove events to dynamically show elevation on chart and location on map
 *
 * John Grayson
 * Applications Prototype Lab, ESRI
 * Jan 2012
 *
 */
dojo.provide("apl.ElevationsChart.Pane");

dojo.require("dijit._Widget");
dojo.require("dijit._Templated");
dojo.require("dojo.colors");
dojo.require("dojo.fx.easing");
dojo.require("dojox.charting.themes.ThreeD");
dojo.require("apl.ElevationsChart.ElevationsSOE");

dojo.require("dojo.i18n");
dojo.requireLocalization("apl.ElevationsChart", "template");

/**
 *  apl.ElevationsChart.Pane
 */
dojo.declare("apl.ElevationsChart.Pane", [dijit._Widget, dijit._Templated], {

  /** @static */ templateString : dojo.cache("apl.ElevationsChart", "templates/Pane.html"),
  /** @static */ widgetsInTemplate : true,
  /** @static */ baseClass : "aplElevationsChart",

  /**
   * @constructor
   *
   * CREATE AND INSTANCE OF apl.ElevationsChart.Pane
   *
   * @param {Object} options - map, measure, defaultDistanceUnits
   */
  constructor: function(options, srcNodeRef) {
    // MIXIN OPTIONS //
    dojo.mixin(this, options);

    // SOURCE NODE //
    if (srcNodeRef) {
      this.srcNodeRef = srcNodeRef;
    }

    // INSTANCE VARIABLES //
    this.profileSourceIsSelectedFeature = false;
    this.profileChart = null;
    this.elevationData = [];
    this.sampleDist = 1.0;
    this.profilePolyline = null;
    this.chartMoveGroup = null;
    this.chartLocationGraphic = null;

    // USE ELEVATIONS SOE ON SAMPLESERVER //
    this._elevationsSOE = new apl.ElevationsChart.ElevationsSOE();

    /*
     // USE YOUR OWN ELEVATIONS SOE //
     var mySOEService = {
     URL: "http://sampleserver4.arcgisonline.com/ArcGIS/rest/services/Elevation/ESRI_Elevation_World/MapServer/exts/ElevationsSOE/ElevationLayers",
     index: 1,
     version: 10.0,
     label: "Global: SRTM, GTopo30 & GEBCO @ 92m"
     };
     this._elevationsSOE = new apl.ElevationsChart.ElevationsSOE(mySOEService);
     */
  },

  /**
   * postMixInProperties
   */
  postMixInProperties: function() {
    this.inherited(arguments);

    // GET i18n MESSAGES //
    this.messages = dojo.i18n.getLocalization("apl.ElevationsChart", "template", this.lang);

    // MIXIN  i18n MESSAGES //
    dojo.mixin(this, this.messages);
  },

  /**
   * postCreate
   */
  postCreate : function() {
    this.inherited(arguments);

    // MAKE SURE SOURCE NODE WAS PASSED IN //
    if (!this.srcNodeRef) {
      throw this.messages.errors.MissingConstructorParameters;
    }

    // PROVIDE PROPER CONTEXT TO METHODS //
    this.setProfileWindowVisible = dojo.hitch(this, this.setProfileWindowVisible);
    this.setChartVisible = dojo.hitch(this, this.setChartVisible);
    this.getElevationProfile = dojo.hitch(this, this.getElevationProfile);
    this.getElevationLabel = dojo.hitch(this, this.getElevationLabel);
    this.getDistanceLabel = dojo.hitch(this, this.getDistanceLabel);
    this.getDisplayLabel = dojo.hitch(this, this.getDisplayLabel);
    this.getDisplayValue = dojo.hitch(this, this.getDisplayValue);
    this.getDisplayUnits = dojo.hitch(this, this.getDisplayUnits);
    this.getFilledArray = dojo.hitch(this, this.getFilledArray);
    this.adjustYTickStep = dojo.hitch(this, this.adjustYTickStep);
    this.makeProfileChart = dojo.hitch(this, this.makeProfileChart);
    this.onChartLocationMove = dojo.hitch(this, this.onChartLocationMove);
    this.displayChartLocation = dojo.hitch(this, this.displayChartLocation);

    // DISPLAY CAUTION MESSAGE //
    this.cautionMsgNode.innerHTML = this._elevationsSOE.getCautionMessage();
  },

  /**
   * init
   *
   * @param {Object} options
   *    @param {esri.Map} map
   *    @param {esri.dijit.Measurement} measure
   *    @param {String} defaultDistanceUnits (Miles || Meters)
   *    @param {Boolean} showElevationDifference
   */
  init: function(options) {

    // ADJUST INITIAL UI SIZE //
    this.containerNode.resize();

    // MIXIN OPTIONS //
    dojo.mixin(this, options);

    // MAP //
    if (!this.map) {
      throw this.messages.errors.MissingInitParameter;
    }

    // MEASURE //
    if (!this.measure) {
      throw this.messages.errors.MissingInitParameter;
    }

    // DEFAULT DISTANCE UNITS //
    if (!this.defaultDistanceUnits) {
      throw this.messages.errors.MissingInitParameter;
    }

    // POPUP WINDOW EVENTS //
    dojo.connect(this.map.infoWindow, 'onSelectionChange', this, this.mapFeatureSelectionChange);
    dojo.connect(this.map.infoWindow, 'onHide', this, this.mapInfoWindowHide);

    // MEASURE WIDGET EVENTS //
    dojo.connect(this.measure, 'setTool', this, this.onMeasureSetTool);
    dojo.connect(this.measure, 'onMeasureEnd', this, this.onMeasureEnd);
    dojo.connect(this.measure, '_switchUnit', this, this.onMeasureUnitChange);

    // CREATE INITIAL CHART //
    this.makeProfileChart();

    // SET INITIAL STATE OF PROFILE WINDOW //
    this.setProfileWindowVisible(false);
  },

  /**
   * setProfileWindowVisible
   *
   * SETS THE PROFILE PANE AS THE SELECTED PANE OF THE STACK CONTAINER
   *
   * @param {Boolean} visible
   */
  setProfileWindowVisible: function (visible) {
    if (visible) {
      this.setChartVisible(false, dojo.hitch(this, function() {
        this.containerNode.selectChild(this.profileParentPane);

      }));
    } else {
      this.setChartVisible(false, dojo.hitch(this, function() {
        this.containerNode.selectChild(this.profileInfo);
        this.displayChartLocation(-1);
      }));
    }
  },

  /**
   * setChartVisible
   *
   * FADE IN/OUT THE PROFILE CHART
   *
   * @param {Boolean} visible
   * @param {Function} onEnd
   */
  setChartVisible:  function(visible, onEnd) {
    var animateOptions = {
      node: this.profilePane,
      duration: 1000,
      onEnd: onEnd
    };
    if (visible) {
      dojo.fadeIn(animateOptions).play();
    } else {
      dojo.fadeOut(animateOptions).play();
    }
  },

  /**
   * mapFeatureSelectionChange
   *
   * CALLED WHEN THE SELECTED FEATURE OF THE POPUP WINDOW CHANGES
   */
  mapFeatureSelectionChange: function() {
    // REMOVE PREVIOUS MEASURE LOCATIONS RESULTS //
    dojo.query(".measureLocationResult", map.infoWindow.domNode).orphan();
    // SET ACTIVE TOOL NAME //
    var selectedFeature = this.map.infoWindow.getSelectedFeature();
    if (selectedFeature) {
      var activeToolName = 'unknown';
      switch (selectedFeature.geometry.type) {
        case 'polygon':
          activeToolName = 'area';
          break;
        case 'polyline':
          activeToolName = 'distance';
          break;
        case 'point':
          activeToolName = 'location';
          break;
      }
      // CALCULATE ELEVATIONS //
      this.calculateElevations(activeToolName, selectedFeature.geometry, true);
    }
  },

  /**
   * mapInfoWindowHide
   *
   * CALLED WHEN THE POPUP WINDOW IS CLOSED
   */
  mapInfoWindowHide: function() {
    this.setProfileWindowVisible(false);
  },

  /**
   * onMeasureSetTool
   *
   * CALLED WHEN ONE OF THE MEASURE WIDGET TOOLS IS SELECTED
   */
  onMeasureSetTool: function() {
    this.setProfileWindowVisible(false);
  },

  /**
   * onMeasureEnd
   *
   * CALLED WHEN THE MEASURE TOOLS IS FINISHED MEASURING
   *
   * @param {String} activeToolName
   * @param {esri.geometry.Geometry} geometry
   */
  onMeasureEnd: function(activeToolName, geometry) {
    // CALCULATE ELEVATIONS //
    this.calculateElevations(activeToolName, geometry, false);
  },

  /**
   * calculateElevations
   *
   * CALCULATE PROFILE ELEVATIONS FOR GEOMETRIES
   *
   * @param {String} activeToolName
   * @param {esri.geometry.Geometry} geometry
   * @param {Boolean} sourceIsSelectedFeature
   */
  calculateElevations: function(activeToolName, geometry, sourceIsSelectedFeature) {

    this.profileSourceIsSelectedFeature = sourceIsSelectedFeature;

    switch (activeToolName) {
      case 'area':
        this.setProfileWindowVisible(true);
        var distancePolyline = new esri.geometry.Polyline(geometry.spatialReference);
        distancePolyline.addPath(geometry.rings[0]);
        this.getElevationProfile(distancePolyline);
        break;

      case 'distance':
        this.setProfileWindowVisible(true);
        this.getElevationProfile(geometry);
        break;

      case 'location':
        this.setProfileWindowVisible(false);
        var geoPoint = esri.geometry.webMercatorToGeographic(geometry);
        this.map.setMapCursor('wait');
        this._elevationsSOE.GetElevationAtLonLat(geoPoint, dojo.hitch(this, function(response) {
          this.map.setMapCursor('default');
          var elevStr = dojo.number.format(response.elevation, { places: 2 });
          var parentNode = this.measure.resultValue.containerNode;
          if (sourceIsSelectedFeature) {
            parentNode = dojo.query(".actionList", map.infoWindow.domNode)[0];
          }
          dojo.create('div', {
            'class':'measureLocationResult',
            style:  sourceIsSelectedFeature ? 'float:right': '',
            innerHTML : dojo.replace(this.messages.locationResultTemplate, [elevStr])
          }, parentNode, 'last');
        }), dojo.hitch(this, function(error) {
          this.map.setMapCursor('default');
          console.warn(error.message);
        }));
        break;

      default:
        this.setProfileWindowVisible(false);
        break;
    }
  },

  /**
   * onMeasureUnitChange
   *
   * CALLED WHEN THE UNIT OF MEASURE IS CHANGED IN THE MEASURE WIDGET
   *
   */
  onMeasureUnitChange: function() {
    if (this.elevationData) {
      this.makeProfileChart();
    }
  },

  /**
   * getElevationProfile
   *
   * CALLS THE ELEVATIONS SOE WITH THE PASSED IN GEOMETRY.
   * SETS THE ELEVATION DATA, PROFILE GEOMETRY AND SAMPLE DISTANCE.
   *
   * @param {esri.geometry.Polyline} geometry
   */
  getElevationProfile: function(geometry) {

    if (!geometry) {
      return;
    }

    // CLEAR PREVIOUS RESULTS //
    this.elevationData = null;
    this.sampleDist = null;

    this.map.setMapCursor('wait');
    this._elevationsSOE.GetElevations(geometry, dojo.hitch(this, function(response) {
      this.map.setMapCursor('default');

      // ELEVATION DATA //
      if (this._elevationsSOE.getVersion() >= 10.1) {
        // STARTING WITH VERSION 10.1 THE ELEVATIONS SOE RETURNS THE   //
        // ELEVATION VALUES AS THE Z COMPONENT OF THE POINT GEOMETRIES //
        this.elevationData = [];
        dojo.forEach(response.geometries[0].paths, function(path) {
          dojo.forEach(path, function(coords) {
            this.elevationData.push(coords[2]);
          }, this);
        }, this);
      } else {
        this.elevationData = response.elevations[0];
      }

      // PROFILE GRAPHIC //
      this.profilePolyline = new esri.geometry.Polyline(this.map.spatialReference);
      // CREATE A SINGLE PATH FROM ALL PATHS                //
      // ISSUE: WHEN MULTIPLE PATHS ARE RETURNED WE HAVE    //
      //        DUPLICATE POINTS AT END AND START OF PATHS, //
      //        NOT A HUGE ISSUE AS ELEVATIONS VALUES MATCH //
      var profilePath = [];
      dojo.forEach(response.geometries[0].paths, function(path) {
        profilePath = profilePath.concat(path);
      }, this);
      this.profilePolyline.addPath(profilePath);

      // SAMPLE DISTANCE //
      var profileLengthMeters = esri.geometry.geodesicLengths([esri.geometry.webMercatorToGeographic(this.profilePolyline)], esri.Units.METERS)[0];
      this.sampleDist = (profileLengthMeters / this.elevationData.length);

      // CREATE PROFILE CHART //
      this.makeProfileChart();
      this.setChartVisible(true);

    }), dojo.hitch(this, function(error) {
      this.map.setMapCursor('default');
      console.warn(error.message);
    }));
  },

  /**
   * getElevationLabel
   *
   * Y-AXIS LABEL FUNCTION
   *
   * @param {String} label
   * @param {Number} val
   */
  getElevationLabel: function(label, val) {
    var displayUnits = this.getDisplayUnits(true);
    return this.getDisplayLabel(val, displayUnits);
  },

  /**
   * getDistanceLabel
   *
   * X-AXIS LABEL FUNCTION
   *
   * @param {String} label
   * @param {Number} val
   */
  getDistanceLabel: function(label, val) {
    var displayUnits = this.getDisplayUnits(false);
    return this.getDisplayLabel((val * this.sampleDist), displayUnits);
  },

  /**
   * getDisplayLabel
   *
   * GET DISPLAY LABEL GIVEN A VALUE IN METERS AND THE DISPLAY UNITS
   * CONVERT FROM METERS TO MILES THEN FROM MILES TO DISPLAY UNITS
   *
   * @param {Number} valueMeters
   * @param {String} displayUnits
   */
  getDisplayLabel: function(valueMeters, displayUnits) {
    var displayDistance = this.getDisplayValue(valueMeters, displayUnits);
    return dojo.number.format(displayDistance, { 'places': 1 });
  },

  /**
   * getDisplayValue
   *
   * GET DISPLAY VALUE GIVEN A VALUE IN METERS AND THE DISPLAY UNITS
   * CONVERT FROM METERS TO MILES THEN FROM MILES TO DISPLAY UNITS
   *
   * @param {Number} valueMeters
   * @param {String} displayUnits
   */
  getDisplayValue: function(valueMeters, displayUnits) {
    if (displayUnits === this.measure.units.esriMeters) {
      return valueMeters;
    } else {
      var distanceMiles = (valueMeters / this.measure.unitDictionary[this.measure.units.esriMeters]);
      return (distanceMiles * this.measure.unitDictionary[displayUnits]);
    }
  },

  /**
   * getDisplayUnits
   *
   * GET DISPLAY UNITS FOR AXIS LABELS
   * IF USING A SELECTED FEATURE WE'LL USE THE DEFAULT DISTANCE UNITS BASED ON THE MAP SCALEBAR (OR MILES IF NO SCALEBAR)
   * IF GETTING DISPLAY UNITS FOR ELEVATION WE'LL SWITCH TO FEET OR METERS
   *
   * @param {Boolean} isElevation
   */
  getDisplayUnits: function(isElevation) {
    var displayUnits = this.profileSourceIsSelectedFeature ? this.defaultDistanceUnits: this.measure.unit.label;
    if (isElevation) {
      switch (displayUnits) {
        case this.measure.units.esriMiles:
          displayUnits = this.measure.units.esriFeet;
          break;
        case this.measure.units.esriYards:
          displayUnits = this.measure.units.esriFeet;
          break;
        case this.measure.units.esriKilometers:
          displayUnits = this.measure.units.esriMeters;
          break;
      }
    }
    return displayUnits;
  },

  /**
   * getFilledArray
   *
   * GET A FILLED ARRAY OF PASSED IN SIZE WITH PASSED IN VALUES
   * ZEROS USED IF NO VALUE PASSED IN
   *
   * @param {Number} size
   * @param {Object} value
   */
  getFilledArray: function(size, value) {
    var dataArray = new Array(size);
    for (var dataIdx = 0; dataIdx < size; ++dataIdx) {
      dataArray[dataIdx] = value || 0;
    }
    return dataArray;
  },

  /**
   * adjustYTickStep
   *
   * ADJUST Y-AXIS TICK STEP
   *
   * @param {Number} yTickStep
   */
  adjustYTickStep: function(yTickStep) {
    var newYTickStep = yTickStep;
    var limits = [1000,100,10,1];
    dojo.some(limits, function(limit) {
      newYTickStep = ((yTickStep + limit) - ((yTickStep + limit) % limit));
      return (yTickStep > limit);
    });
    return newYTickStep;
  },

  /**
   * makeProfileChart
   *
   * CREATE A PROFILE CHART FROM TEH ELEVATION DATA AND SAMPLE DISTANCE
   *
   * @param {Node} profileChartNode
   */
  makeProfileChart: function(profileChartNode) {

    if (!this.elevationData) {
      return;
    }

    if (profileChartNode) {
      this.profileChart = null;
    }

    // ADJUSTED MIN/MAX ELEVATIONS //
    var yMinSource = this.getArrayMin(this.elevationData);
    var yMaxSource = this.getArrayMax(this.elevationData);
    var yRange = (yMaxSource - yMinSource);
    var yMin = yMinSource - (yRange * 0.05);
    var yMax = yMaxSource + (yRange * 0.05);
    var yTickStep = this.adjustYTickStep((yRange / 5.0));

    // FILLED ZERO ARRAY //
    var waterData = this.getFilledArray(this.elevationData.length);

    if (this.profileChart) {

      this.chartMoveGroup = null;

      // UPDATE CHART //
      this.profileChart.getAxis("y").opt.min = yMin;
      this.profileChart.getAxis("y").opt.max = yMax;
      this.profileChart.getAxis("y").opt.majorTickStep = yTickStep;
      this.profileChart.getAxis("y").opt.title = dojo.replace(this.messages.chart.elevationTitleTemplate, [this.getDisplayUnits(true)]);
      this.profileChart.getAxis("x").opt.title = dojo.replace(this.messages.chart.distanceTitleTemplate, [this.getDisplayUnits(false)]);
      this.profileChart.dirty = true;
      this.profileChart.updateSeries("Water", waterData);
      this.profileChart.updateSeries("Elevation Profile", this.elevationData);
      this.profileChart.render();

    } else {

      // CHART NODE //
      var chartNode = profileChartNode || this.profilePane;

      // ANIMATION OPTIONS //
      var chartAnimationOpts = {
        duration: 1500,
        easing: dojo.fx.easing.linear
      };

      // CREATE CHART //
      this.profileChart = new dojox.charting.Chart2D(chartNode, {
        title: this.messages.chart.title,
        titlePos: "top",
        titleGap: 5,
        titleFontColor: 'darkgreen',
        animationType: chartAnimationOpts.easing
      });

      // SET THEME //
      this.profileChart.setTheme(dojox.charting.themes.ThreeD);
      // OVERRIDE DEFAULTS //
      this.profileChart.fill = 'white';
      this.profileChart.theme.axis.stroke.width = 2;
      this.profileChart.theme.axis.majorTick = {
        color: dojo.Color.named.white.concat(0.5),
        width: 1.0
      };
      this.profileChart.theme.plotarea.fill = {
        type: "linear",
        space: "plot",
        x1: 50, y1: 100, x2: 50, y2: 0,
        colors: [
          { offset: 0.0, color: dojo.Color.named.powderblue },
          { offset: 1.0, color: dojo.Color.named.steelblue }
        ]
      };

      // Y AXIS //
      this.profileChart.addAxis("y", {
        min: yMin,
        max: yMax,
        majorTickStep: yTickStep,
        fontColor: 'black',
        font: "normal normal bold 7pt Tahoma",
        vertical: true,
        fixLower: "major",
        fixUpper: "minor",
        natural: true,
        fixed: true,
        includeZero: false,
        majorTicks: true,
        majorTick: { color: 'black', length: 4 },
        labelFunc: this.getElevationLabel,
        minorTicks: false,
        title: dojo.replace(this.messages.chart.elevationTitleTemplate, [this.getDisplayUnits(true)]),
        titleGap: 30,
        titleFont: "normal normal bold 11pt Tahoma",
        titleFontColor: 'green',
        titleOrientation: 'axis'
      });

      // X AXIS //
      this.profileChart.addAxis("x", {
        fontColor: 'black',
        font: "normal normal bold 7pt Tahoma",
        fixLower: "none",
        fixUpper: "none",
        includeZero: false,
        natural: false,
        fixed: true,
        majorTicks: true,
        majorTick: { color: 'black', length: 4 },
        labelFunc: this.getDistanceLabel,
        minorTicks: true,
        minorTick: { color: 'black', length: 4 },
        title: dojo.replace(this.messages.chart.distanceTitleTemplate, [this.getDisplayUnits(false)]),
        titleGap: 5,
        titleFont: "normal normal bold 11pt Tahoma",
        titleFontColor: 'green',
        titleOrientation: 'away'
      });

      // GRID //
      this.profileChart.addPlot("Grid", {
        type: "Grid",
        hMajorLines: true,
        hMinorLines: false,
        vMajorLines: false,
        vMinorLines: false
      });

      // PROFIlE PLOT //
      this.profileChart.addPlot("default", {
        type: "Areas",
        tension: "X",
        animate: chartAnimationOpts
      });

      // WATER PLOT //
      this.profileChart.addPlot("water", {
        type: "Areas",
        animate: chartAnimationOpts
      });

      // WATER DATA //
      this.profileChart.addSeries("Water", waterData, {
        plot:"water",
        stroke: { color: dojo.Color.named.white, width: 2.0 },
        fill: {
          type: "linear",
          space: "plot",
          x1: 50, y1: 0, x2: 50, y2: 100,
          colors: [
            { offset: 0.0, color: dojo.Color.named.lightblue.concat(0.5) },
            { offset: 1.0, color: dojo.Color.named.blue.concat(0.5) }
          ]
        }
      });

      // PROFILE DATA //
      this.profileChart.addSeries("Elevation Profile", this.elevationData, {
        stroke: { color: dojo.Color.named.tan, width: 1.5 },
        fill: {
          type: "linear",
          space: "plot",
          x1: 50, y1: 0, x2: 50, y2: 100,
          colors: [
            { offset: 0.0, color: dojo.Color.named.saddlebrown },
            { offset: 1.0, color: dojo.Color.named.peru }
          ]
        }
      });

      // DISPLAY CHART LOCATION ON MAP //
      if (!esri.isTouchEnabled) {
        // MOUSE MOVE EVENT //
        this.profileChart.surface.connect("onmousemove", this, function(evt) {
          dojo.stopEvent(evt);
          this.onChartLocationMove(evt.clientX, evt.clientY);
        });
      } else {
        // TOUCH MOVE EVENT //
        this.profileChart.surface.connect("ontouchmove", this, function(evt) {
          dojo.stopEvent(evt);
          if (evt.touches && (evt.touches.length > 0)) {
            this.onChartLocationMove(evt.touches[0].clientX, evt.touches[0].clientY);
          }
        });
        // TOUCH END EVENT //
        this.profileChart.surface.connect("ontouchend", this, function(evt) {
          dojo.stopEvent(evt);
          this.onChartLocationMove(0, 0);
        });
      }

      // RENDER CHART //
      this.profileChart.render();
    }

    // ELEVATION INFO //
    var elevDisplayUnits = this.getDisplayUnits(true);

    var elevMinStr = this.getDisplayLabel(yMinSource, elevDisplayUnits);
    var elevMaxStr = this.getDisplayLabel(yMaxSource, elevDisplayUnits);
    var elevFirst = this.elevationData[0];
    var elevLast = this.elevationData[this.elevationData.length - 1];
    var elevStartStr = this.getDisplayLabel(elevFirst, elevDisplayUnits);
    var elevEndStr = this.getDisplayLabel(elevLast, elevDisplayUnits);
    var startElev = this.getDisplayValue(elevFirst, elevDisplayUnits);
    var endElev = this.getDisplayValue(elevLast, elevDisplayUnits);
    var gainloss = (endElev - startElev);
    var gainlossStr = dojo.number.format(gainloss, {places:1});

    var elevInfo = {
      min: elevMinStr,
      max: elevMaxStr,
      start: elevStartStr,
      end: elevEndStr,
      gainloss: gainlossStr
    };

    // ELEVATION INFO TEXT //
    var elevMinMaxMsg = dojo.replace(this.messages.chart.gainLossTemplate, elevInfo);
    var chartCoords = this.profileChart.getCoords();
    this.profileChart.surface.createText({
      x: chartCoords.x,
      y: (chartCoords.h - 5.0),
      text: elevMinMaxMsg,
      align: "start"
    }).setFont({family:"Tahoma", style:"bold", size:"9pt"}).setFill('darkred');

    // ELEVATION SOURCE TEXT //
    this.profileChart.surface.createText({
      x: (chartCoords.w - 5.0),
      y: (chartCoords.h - 5.0),
      text: this._elevationsSOE.getDataSourceInfo(),
      align: "end"
    }).setFont({family:"Tahoma", style:"bold", size:"9pt"}).setFill('silver');

  },

  /**
   * onChartLocationMove
   *
   * DISPLAY INTERACTIVE VERTICAL LINE AND ELEVATION TEXT AT MOUSE/TOUCH LOCATION
   *
   * @param {Number} clientX
   * @param {Number} clientY
   */
  onChartLocationMove: function(clientX, clientY) {

    if (this.elevationData) {
      var chartCoords = dojo.coords(this.profileChart.node, true);
      var chartOffsets = this.profileChart.offsets;

      // PLOT COORDINATES //
      var plotCoords = {
        x: (clientX - chartCoords.x),
        y: (clientY - chartCoords.y),
        l: (chartCoords.x + chartOffsets.l),
        r: (chartCoords.x + chartCoords.w - chartOffsets.r),
        t: (chartCoords.y + chartOffsets.t),
        b: (chartCoords.y + chartCoords.h - chartOffsets.b)
      };

      if (!this.chartMoveGroup) {
        // CREATE GROUP OF GRAPHICS TO MOVE //
        this.chartMoveGroup = this.profileChart.surface.createGroup();
      } else {
        // REMOVE PREVIOUS //
        this.chartMoveGroup.clear()
      }

      // IS CURSOR OVER CHART PLOT AREA //
      if (((clientX > plotCoords.l) && (clientX < plotCoords.r)) &&
          ((clientY > plotCoords.t) && (clientY < plotCoords.b))) {

        // X POINT INDEX //
        var plotPercentAlongX = ((clientX - plotCoords.l) / (chartCoords.w - plotCoords.l));
        var pointIndex = parseInt((this.elevationData.length - 1) * plotPercentAlongX);
        // DISPLAY CHART LOCATION ON MAP //
        this.displayChartLocation(pointIndex);

        // Y COORDINATE //
        var elev = this.elevationData[pointIndex];
        var elevDisplayUnits = this.getDisplayUnits(true);
        var elevStr = this.getDisplayLabel(elev, elevDisplayUnits);
        var yAxisBounds = this.profileChart.getAxis('y').scaler.bounds;
        var plotPercentAlongY = ((yAxisBounds.upper - elev) / (yAxisBounds.upper - yAxisBounds.lower));
        var chartElevationLineY = (plotCoords.t + ((plotCoords.b - plotCoords.t) * plotPercentAlongY)) - chartCoords.y;
        var chartElevationMiddle = (plotCoords.t + ((plotCoords.b - plotCoords.t) * 0.5)) - chartCoords.y;

        // ELEVATION CHANGE //
        var currentElev = this.getDisplayValue(this.elevationData[pointIndex], elevDisplayUnits);
        var startElev = this.getDisplayValue(this.elevationData[0], elevDisplayUnits);
        var gainloss = (currentElev - startElev);
        var gainlossStr = dojo.number.format(gainloss, {places:1});
        var plotPercentAlongYChange = ((yAxisBounds.upper - this.elevationData[0]) / (yAxisBounds.upper - yAxisBounds.lower));
        var chartElevationLineYChange = (plotCoords.t + ((plotCoords.b - plotCoords.t) * plotPercentAlongYChange)) - chartCoords.y;

        // VERTICAL LINE //
        this.chartMoveGroup.createLine({
          x1: plotCoords.x,
          y1: plotCoords.t - chartCoords.y,
          x2: plotCoords.x,
          y2: plotCoords.b - chartCoords.y
        }).setStroke({color:"black",width:1.5});

        if (!isNaN(chartElevationLineY)) {

          // ELEVATION TEXT //
          var leftOfCenter = (plotCoords.x < (plotCoords.l + ((plotCoords.r - plotCoords.l) * 0.5)));
          var bottomOfMiddle = (chartElevationLineY > chartElevationMiddle);
          var textOffset = 10.0;
          var textX = (leftOfCenter ? (plotCoords.x + textOffset): (plotCoords.x - textOffset));
          var textY = (bottomOfMiddle ? (chartElevationLineY - textOffset): (chartElevationLineY + (textOffset * 3)));

          this.chartMoveGroup.createText({
            x: textX,
            y: textY,
            text: elevStr,
            align: leftOfCenter ? "start": "end"
          }).setFont({family:"Tahoma", weight:"bold", size:"22pt"}).setFill("black").setStroke({color:"white",width:1.5});

          // ELEVATION CHANGE //
          if (this.showElevationDifference && (gainloss != 0.0)) {
            var changeTextX = (!leftOfCenter ? (plotCoords.x + 5.0): (plotCoords.x - 5.0));
            var gainlosslabelcolor = ((gainloss > 0.0) ? "green": "red");

            this.chartMoveGroup.createLine({
              x1: plotCoords.x,
              y1: chartElevationLineYChange,
              x2: plotCoords.x,
              y2: chartElevationLineY
            }).setStroke({color:gainlosslabelcolor,width:3.0});

            var textLength = gainlossStr.length - ((gainloss > 1000) ? 2: 1);
            var textWidth = (textLength * 10.0) + 5.0;
            this.chartMoveGroup.createRect({
              x: leftOfCenter ? (changeTextX - textWidth - 5.0): changeTextX + 5.0,
              y: chartElevationLineYChange - 10.0,
              width: textWidth,
              height: 20.0,
              r: 5.0
            }).setFill(dojo.Color.named.white.concat(0.75)).setStroke({color:gainlosslabelcolor,width:1});

            this.chartMoveGroup.createText({
              x: leftOfCenter ? changeTextX - 10.0: changeTextX + 10.0,
              y: chartElevationLineYChange + 5.0,
              text: gainlossStr,
              align: leftOfCenter ? "end": "start"
            }).setFont({family:"Tahoma", weight:"normal", size:"10pt"}).setFill(gainlosslabelcolor);
          }

          // CIRCLE //
          this.chartMoveGroup.createCircle({
            cx: plotCoords.x,
            cy: chartElevationLineY,
            r: 6
          }).setStroke({color:"white",width:2.0});

        }
      } else {
        this.displayChartLocation(-1);
      }
    }
  },

  /**
   * displayChartLocation
   *
   * DISPLAY CHART LOCATION AS RED X GRAPHIC ON THE MAP
   *
   * @param {Number} pointIndex
   */
  displayChartLocation: function(pointIndex) {

    if (!this.elevationData) {
      return;
    }

    if (!this.chartLocationGraphic) {
      var red = new dojo.Color(dojo.Color.named.red);
      var outline = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, red, 3);
      var chartLocationSymbol = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_X, 13, outline, red);
      this.chartLocationGraphic = new esri.Graphic(null, chartLocationSymbol);
      this.map.graphics.add(this.chartLocationGraphic);
    }

    if ((pointIndex >= 0) && (pointIndex < this.elevationData.length)) {
      this.chartLocationGraphic.setGeometry(this.profilePolyline.getPoint(0, pointIndex))
    } else {
      this.chartLocationGraphic.setGeometry(null);
    }

  },

  /**
   * RETURN THE MAXIMUM VALUE IN THE ARRAY
   *
   * @param {Array} array
   */
  getArrayMax: function(array) {
    return Math.max.apply(Math, array);
  },

  /**
   * RETURN THE MINIMUM VALUE IN THE ARRAY
   *
   * @param {Array} array
   */
  getArrayMin: function(array) {
    return Math.min.apply(Math, array);
  }
});