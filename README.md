basic-viewer-template
=====================
*Basic Viewer* is a configurable application template that enables you to display an ArcGIS web map using a variety of tools. 

![Screen Shot](https://dl.dropboxusercontent.com/u/24627279/screenshots/basic_viewer_1.jpg)

[View it live] (http://www.arcgis.com/apps/OnePane/basicviewer/index.html?webmap=f5b13dbed07c46cdb783cf361833aa6b)

#Features
The template can be configured using the following options:

- **Map:** Choose the web map used in your application.
- **Color Scheme:** Choose between five color schemes for the application (Blue, Gray, Green, Orange, Purple).
- **Show Title:** Choose whether to include an application title. 
- **Title Text:** The application title. The default title is the web map name.
- **Logo:** Choose a custom logo for your application.
- **Overview Map:** Display a retractable overview map to add context for panning and zooming.
- **Legend:** Display a legend for map layers. *
- **Details:** Display the web map item description. *
- **Editor:** Allows users to interactively create, modify, or delete features in editable layers. *
- **Time Slider:** Enables the display of the time slider. *
- **Print:** Enables printing the map at the current extent. It can be configured to include a legend and supports different layout options.
- **Layer List:** Enables toggling the visibility of operational layers within the web map. *
- **Basemaps:** Enables the display of the basemap gallery. 
- **Bookmarks:** Enables the use of web map bookmarks for navigation. *
- **Measure:** Enables measure tool for interactive area, length, and point measurement.
- **Share:** Allows users to share the application with others via email, Twitter, or Facebook.
- **Search:** Displays the Search box to enable navigation to addresses and places. 
- **Search** for locations within current extent: Enable toggling of search within the current map extent only.

*These options will appear in the application when the web map has properties or layers that support them.



#Instructions

1. Download and unzip the .zip file or clone the repo.
2. Web-enable the directory. 
3. Access the .html page in a browser

Note: If your application edits features in a feature service, contains secure services or web maps that aren't shared publicly or generates requests that exceed 200 characters you may need to setup and use a proxy page. Common situations where you may exceed the URL length are using complex polygons as input to a task or specifying a spatial reference using well-known text (WKT). For details on installing and configuring a proxy page see [Using a proxy page](https://developers.arcgis.com/javascript/jshelp/ags_proxy.html).

For addtional customization options view the [wiki](https://github.com/Esri/basic-viewer-template/wiki). 

#Requirements

- Notepad or HTML editor
- Some background with HTML, CSS and JavaScript
- Experience with the ArcGIS API for JavaScript is helpful. 

#Resources

- [ArcGIS API for JavaScript Resource Center](http://help.arcgis.com/en/webapi/javascript/arcgis/index.html)

#Issues
Found a bug or want to request a new feature? Please let us know by submitting an issue. 

#Contributing
Anyone and everyone is welcome to contribute. 

#Licensing 

Copyright 2012 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
[](Esri Tags: ArcGIS Online Web Application Templates) 
[](Esri Language: JavaScript)
