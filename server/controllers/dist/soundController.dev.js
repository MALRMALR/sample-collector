"use strict";

var fetch = require('node-fetch');

var soundController = {};

soundController.searchSamples = function _callee(req, res, next) {
  var url;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('searchSamples');
          console.log(req.body); // make fetch request to FS api
          // let reqHeaders = new Headers({'Authorization': 'Bearer ' + cookie});
          // console.log(reqHeaders);

          url = "https://freesound.org/apiv2/search/text/?query=".concat(req.body.query, "&fields=id,url,previews,name,description,type,filesize,duration,username,samplerate,bitrate,bitdepth,download,num_downloads,avg_rating,geotag,previews&page_size=150");
          console.log(url);
          _context.next = 7;
          return regeneratorRuntime.awrap(fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + req.body.cookie
            }
          }).then(function (res) {
            return res.json();
          }).then(function (json) {
            console.log(json);
            res.locals.data = json;
          })["catch"](function (err) {
            return console.error(err);
          }));

        case 7:
          return _context.abrupt("return", next());

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", next(_context.t0));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

soundController.loadSample = function _callee2(req, res, next) {
  var url;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          console.log(req.body);
          console.log(req.headers.cookies);
          url = "https://freesound.org/apiv2/sounds/".concat(req.body.id);
          return _context2.abrupt("return", next());

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", next(_context2.t0));

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports = soundController;