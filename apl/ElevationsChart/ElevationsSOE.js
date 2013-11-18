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
 * apl.ElevationsChart.ElevationsSOE
 *
 * Elevations SOE
 *  - initial call to verify proper Elevations SOE url
 *  - provide default configuration to Elevations SOE on sample server
 *  - wrapper methods to call operations on Elevations SOE
 *  - updated to support 10.1 version of Elevations SOE
 *  - perform internal tests if _debug attribute is true
 *
 * John Grayson
 * Applications Prototype Lab, ESRI
 * Jul 2010
 * Jan 2012
 *
 */

dojo.require("dojo.i18n");
dojo.requireLocalization("apl.ElevationsChart", "template");

dojo.provide("apl.ElevationsChart.ElevationsSOE");
dojo.declare("apl.ElevationsChart.ElevationsSOE", [], {

  /**
   * SET TO TRUE TO RUN INTERNAL TESTS ON STARTUP
   */
  _debug: false,

  /**
   * DEFAULT ELEVATION SOE SERVICE
   *
   * @property {String} URL
   * @property {Number} index
   * @property {Number} version
   * @property {String} label
   */
  _globalSOEService:{
    URL: "http://sampleserver4.arcgisonline.com/ArcGIS/rest/services/Elevation/ESRI_Elevation_World/MapServer/exts/ElevationsSOE/ElevationLayers",
    index: 1,
    version: 10.0,
    label: "Global: SRTM, GTopo30 & GEBCO @ 92m"
  },

  /**
   * @constructor
   *
   * CREATE AND INSTANCE OF apl.ElevationsChart.ElevationsSOE
   *
   * @param {Object} soeService (URL, index, version and label)
   */
  constructor: function(soeService) {

    // SET INITIAL ISVALID STATE //
    this._isValid = false;

    // SOE SERVICE //
    this.soeService = (soeService || this._globalSOEService);

    // GET i18n MESSAGES //
    this.messages = dojo.i18n.getLocalization("apl.ElevationsChart", "template", this.lang);

    // PROVIDE PROPER CONTEXT FOR METHODS //
    this.getDataSourceInfo = dojo.hitch(this, this.getDataSourceInfo);
    this.getVersion = dojo.hitch(this, this.getVersion);
    this._callSOE = dojo.hitch(this, this._callSOE);
    this.GetElevationAtLonLat = dojo.hitch(this, this.GetElevationAtLonLat);
    this.GetElevations = dojo.hitch(this, this.GetElevations);
    this.GetElevationData = dojo.hitch(this, this.GetElevationData);

    // CHECK TO SEE IF THIS INSTANCE IS VALID //
    this._callSOE('', {'f': 'json'}).then(dojo.hitch(this, function() {
      this._isValid = true;
      console.log("Elevations SOE ready.");
      // DEBUG //
      if (this._debug) {
        // IF DEBUG RUN INTERNAL TESTS //
        this._internalTests();
      }
    }), dojo.hitch(this, function() {
      this._isValid = false;
      throw this.messages.errors.InvalidConfiguration;
    }));
  },

  /**
   * GET INFORMATION ABOUT THE ELEVATION SOURCE
   */
  getDataSourceInfo: function() {
    return this.soeService.label || "";
  },

  /**
   * GET VERSION NUMBER OF THE ELEVATIONS SOE SERVICE
   */
  getVersion: function() {
    return this.soeService.version || 10.0;
  },

  /**
   * getCautionMessage
   *
   * GET CAUTION MESSAGE ASSOCIATED WITH CURRENT SOE SERVICE
   *
   */
  getCautionMessage: function() {
    return (this.soeService.version < 10.1) ? this.messages.errors.SOEMultiPartGeometriesNotSupported.message: "";
  },

  /**
   * MAKE ELEVATIONS SOE REQUEST
   *
   * @param {String} operation
   * @param {Object} content
   * @param {Function} callback
   * @param {Function} errback
   */
  _callSOE: function(operation, content, callback, errback) {
    // MAKE SOE REQUEST //
    return esri.request({
      url: dojo.replace("{0}/{1}{2}", [this.soeService.URL, this.soeService.index, operation]),
      content: content,
      callbackParamName: "callback",
      load: callback,
      error: errback
    }, {
      disableIdentityLookup: true
    });
  },

  /**
   * GET ELEVATION AT LON/LAT
   *
   * @param {esri.geometry.Point} geoPoint
   * @param {Function} callback
   * @param {Function} errback
   */
  GetElevationAtLonLat: function(geoPoint, callback, errback) {
    if (this._isValid) {
      var content = {
        'f': 'json',
        'lon': geoPoint.x,
        'lat': geoPoint.y
      };
      // MAKE ELEVATIONS SOE REQUEST
      this._callSOE('/GetElevationAtLonLat', content, callback, errback);

    } else {
      if (errback) {
        errback(this.messages.errors.InvalidConfiguration);
      } else {
        throw this.messages.errors.InvalidConfiguration;
      }
    }
  },

  /**
   * GET ELEVATIONS ALONG GEOMETRY
   *
   * @param {esri.geometry.Geometry} geometry
   * @param {Function} callback
   * @param {Function} errback
   */
  GetElevations: function(geometry, callback, errback) {
    if (this._isValid) {
      var content = {
        'f': 'json',
        'geometries': dojo.toJson([geometry.toJson()])
      };
      // MAKE ELEVATIONS SOE REQUEST
      this._callSOE('/GetElevations', content, callback, errback);

    } else {
      if (errback) {
        errback(this.messages.errors.InvalidConfiguration);
      } else {
        throw this.messages.errors.InvalidConfiguration;
      }
    }
  },

  /**
   * GET ELEVATION DATA FOR EXTENT
   *
   * @param {esri.geometry.Extent} extent
   * @param {Number} rows
   * @param {Number} cols
   * @param {Function} callback
   * @param {Function} errback
   */
  GetElevationData: function(extent, rows, cols, callback, errback) {
    if (this._isValid) {
      var content = {
        'f': 'json',
        'Extent': dojo.toJson(extent.toJson()),
        'Rows': rows,
        'Columns': cols
      };
      // MAKE ELEVATIONS SOE REQUEST
      this._callSOE('/GetElevationData', content, callback, errback);

    } else {
      if (errback) {
        errback(this.messages.errors.InvalidConfiguration);
      } else {
        throw this.messages.errors.InvalidConfiguration;
      }
    }
  },

  /**
   * GENERATE ELEVATION PROFILE IMAGE
   *
   * @param {esri.geometry.Polyline} geometry
   * @param {Number} imgWidth
   * @param {Number} imgHeight
   * @param {dojo.Color} backColor
   * @param {Function} callback
   * @param {Function} errback
   */
  GetElevationProfile: function(geometry, imgWidth, imgHeight, backColor, callback, errback) {
    if (this.soeService.version > 10.0) {
      if (errback) {
        errback(this.messages.errors.OperationNotSupported);
      } else {
        throw this.messages.errors.OperationNotSupported;
      }
    } else {
      if (this._isValid) {
        var content = {
          'f': 'json',
          'InputPolyline': dojo.toJson(geometry.toJson()),
          'ImageWidth': imgWidth,
          'ImageHeight': imgHeight,
          'BackgroundColorHex': backColor.toHex(),
          'DisplaySegments': (geometry.paths[0].length > 2)
        };
        // MAKE ELEVATIONS SOE REQUEST
        this._callSOE('/GetElevationProfile', content, callback, errback);

      } else {
        if (errback) {
          errback(this.messages.errors.InvalidConfiguration);
        } else {
          throw this.messages.errors.InvalidConfiguration;
        }
      }
    }
  },

  /**
   * RUN INTERNAL TESTS
   */
  _internalTests: function() {

    console.log("Debug: Starting internal tests...");

    // POINTS //
    var points = [
      [-15302080.87071529,2912256.518787479],
      [-14778366.19622747,3100780.565373888],
      [-14241248.751055818,3271544.6325179385],
      [-13691268.393677574,3422204.4185704254],
      [-13129432.036945209,3550457.9444676004],
      [-12557227.331867652,3654155.2819340974],
      [-11976603.290535893,3731419.1874105586],
      [-11389912.522264391,3780764.636752319],
      [-10799814.929808088,3801202.693606839],
      [-10209149.129485099,3792314.215307351],
      [-9620783.97872743,3754282.1820850545],
      [-9037466.657589449,3687877.5037660776],
      [-8461684.475454455,3594400.5796829057],
      [-8063465.812148443,3513597.621741056],
      [-7670607.966725868,3421021.379053585]
    ];

    // TEST GEOMETRIES //
    var webMercator = new esri.SpatialReference({"wkid":102100});
    var goedesicLine = new esri.geometry.Polyline(webMercator);
    goedesicLine.addPath(points);
    var goedesicPoly = new esri.geometry.Polygon(webMercator);
    goedesicPoly.addRing(points);
    var geodesicMultiPoint = new esri.geometry.Multipoint(webMercator);
    geodesicMultiPoint.addPoint(goedesicLine.getPoint(0, 0));
    geodesicMultiPoint.addPoint(goedesicLine.getPoint(0, 5));
    geodesicMultiPoint.addPoint(goedesicLine.getPoint(0, 10));
    var firstPoint = goedesicLine.getPoint(0, 0);
    var firstPointGeo = esri.geometry.webMercatorToGeographic(firstPoint);
    var geodesicLineExtent = goedesicLine.getExtent();

    // TESTS //
    this.GetElevationAtLonLat(firstPointGeo, function(response) {
      console.log("_internalTests.GetElevationAtLonLat --- ", "INPUT: ", firstPointGeo, "OUTPUT: ", response);
    }, function(error) {
      console.error("_internalTests.GetElevationAtLonLat --- ", error);
    });

    this.GetElevations(firstPoint, function(response) {
      console.log("_internalTests.GetElevations --- ", "INPUT: ", firstPoint, "OUTPUT: ", response);
    }, function(error) {
      console.error("_internalTests.GetElevations --- ", error);
    });

    this.GetElevations(firstPointGeo, function(response) {
      console.log("_internalTests.GetElevations --- ", "INPUT: ", firstPointGeo, "OUTPUT: ", response);
    }, function(error) {
      console.error("_internalTests.GetElevations --- ", error);
    });

    this.GetElevations(geodesicMultiPoint, function(response) {
      console.log("_internalTests.GetElevations --- ", "INPUT: ", geodesicMultiPoint, "OUTPUT: ", response);
    }, function(error) {
      console.error("_internalTests.GetElevations --- ", error);
    });

    this.GetElevations(goedesicLine, function(response) {
      console.log("_internalTests.GetElevations --- ", "INPUT: ", goedesicLine, "OUTPUT: ", response);
    }, function(error) {
      console.error("_internalTests.GetElevations --- ", error);
    });

    this.GetElevations(goedesicPoly, function(response) {
      console.log("_internalTests.GetElevations --- ", "INPUT: ", goedesicPoly, "OUTPUT: ", response);
    }, function(error) {
      console.error("_internalTests.GetElevations --- ", error);
    });

    this.GetElevationData(geodesicLineExtent, 100, 100, function(response) {
      console.log("_internalTests.GetElevationData --- ", "INPUT: ", geodesicLineExtent, "OUTPUT: ", response);
    }, function(error) {
      console.error("_internalTests.GetElevationData: ", error);
    });

    this.GetElevationProfile(goedesicLine, 500, 300, new dojo.Color('white'), function(response) {
      console.log("_internalTests.GetElevationProfile --- ", "INPUT: ", goedesicLine, "OUTPUT: ", response);
    }, function(error) {
      console.error("_internalTests.GetElevationProfile --- ", error);
    });

    console.log("Debug: Finished internal tests.");
  }
});
