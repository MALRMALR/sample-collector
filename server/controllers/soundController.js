const fetch = require('node-fetch');
const db = require('../models/sampleModel');
const soundController = {};

soundController.searchSamples = async (req, res, next) => {
  try {
    console.log('searchSamples');
    console.log(req.body);
    // make fetch request to FS api
    // let reqHeaders = new Headers({'Authorization': 'Bearer ' + cookie});
    // console.log(reqHeaders);
    const url = `https://freesound.org/apiv2/search/text/?query=${req.body.query}&fields=id,url,previews,name,description,type,filesize,duration,username,samplerate,bitrate,bitdepth,download,num_downloads,avg_rating,geotag,previews&page_size=50`;
    console.log(url);
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + req.body.cookie
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        res.locals.data = json;
      })
      .catch(err => console.error(err));

    return next();
  } catch (err) {
    return next(err);
  }
}

soundController.saveSample = (req, res, next) => {
  try {
    console.log('soundController.saveSample');
    console.log(req.body);
    // make db query
    // first check if row exists - if not, save new row
    const query = {
      text: 'INSERT INTO samples (sample_id, name, url, username, download_url, description, type, duration, bitdepth, bitrate, sample_rate, file_size, num_downloads, avg_rating, geotag, previews) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);',
      values: [req.body.id, req.body.name, req.body.url, req.body.username, req.body.download_url, req.body.description, req.body.type, req.body.duration, req.body.bitdepth, req.body.bitrate, req.body.samplerate, req.body.filesize, req.body.num_downloads, req.body.avg_rating, req.body.geotag, req.body.previews]
    };

    db.query(query).then(data => {
      console.log(data);
      res.locals.sample = data;
      console.log(res.locals.sample);
      return next();
    });



  } catch (err) {
    return next(err);
  }
}

soundController.viewSavedSamples = async (req, res, next) => {
  try {
    const query = 'SELECT * FROM samples;';
    await db.query(query).then(data => {
      console.log('soundController.viewSavedSamples data: ')
      console.log(data);
      res.locals.all_samples = data.rows;
      console.log(res.locals.all_samples);
      return next();
    })

  } catch (err) {
    return next(err);
  }
}

module.exports = soundController;