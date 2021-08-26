const fetch = require('node-fetch');
const soundController = {};

soundController.searchSamples = async (req, res, next) => {
  try {
    console.log('searchSamples');
    console.log(req.body);
    // make fetch request to FS api
    // let reqHeaders = new Headers({'Authorization': 'Bearer ' + cookie});
    // console.log(reqHeaders);
    const url = `https://freesound.org/apiv2/search/text/?query=${req.body.query}`;
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
        console.log(json)
        res.locals.data = json;
      })
      .catch(err => console.error(err));

    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = soundController;