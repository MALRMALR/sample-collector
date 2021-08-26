"use strict";

var fetch = require('node-fetch');

var db = require('../models/sampleModel');

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

          url = "https://freesound.org/apiv2/search/text/?query=".concat(req.body.query, "&fields=id,url,previews,name,description,type,filesize,duration,username,samplerate,bitrate,bitdepth,download,num_downloads,avg_rating,geotag,previews&page_size=50");
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

soundController.saveSample = function (req, res, next) {
  try {
    console.log('soundController.saveSample');
    console.log(req.body); // make db query
    // first check if row exists - if not, save new row

    var query = {
      text: 'INSERT INTO samples (sample_id, name, url, username, download_url, description, type, duration, bitdepth, bitrate, sample_rate, file_size, num_downloads, avg_rating, geotag, previews) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);',
      values: [req.body.id, req.body.name, req.body.url, req.body.username, req.body.download_url, req.body.description, req.body.type, req.body.duration, req.body.bitdepth, req.body.bitrate, req.body.samplerate, req.body.filesize, req.body.num_downloads, req.body.avg_rating, req.body.geotag, req.body.previews]
    };
    db.query(query).then(function (data) {
      console.log(data);
      res.locals.sample = data;
      console.log(res.locals.sample);
      return next();
    });
  } catch (err) {
    return next(err);
  }
};

soundController.viewSavedSamples = function _callee2(req, res, next) {
  var query;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          query = 'SELECT * FROM samples;';
          _context2.next = 4;
          return regeneratorRuntime.awrap(db.query(query).then(function (data) {
            console.log('soundController.viewSavedSamples data: ');
            console.log(data);
            res.locals.all_samples = data.rows;
            console.log(res.locals.all_samples);
            return next();
          }));

        case 4:
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", next(_context2.t0));

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

module.exports = soundController;