"use strict"
var app = require('./app/app.js');
var main = require('./js/main.js');
var resize = require('./js/resize.js');

var articles_controller = require('./app/Ctrls/articles.controller.js');
var gymnastic_controller = require('./app/Ctrls/gymnastic.controller.js');
var mission_controller = require('./app/Ctrls/mission.controller.js');
var baletCtrl = require('./app/Ctrls/balet.controller.js');
var teamCtrl = require('./app/Ctrls/team.controller.js');
var atmosn_controller = require('./app/Ctrls/atmosn.controller.js');
var main_controller = require('./app/Ctrls/main.controller.js');

var mainService = require('./app/services/mainService.js');
var gymnService = require('./app/services/gymnService.js');
var imagesService = require('./app/services/imagesService.js');
var teamService = require('./app/services/teamService.js');
var articlesService = require('./app/services/articlesService.js');
var categorysService = require('./app/services/categorysService.js');
