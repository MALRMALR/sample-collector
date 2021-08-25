const User = require('../models/userModel');
const userController = {};
const fetch = require('node-fetch');

userController.verifyUser = (req, res, next) => {
  // makes a POST request to https://freesound.org/apiv2/oauth2/access_token
  // parameters: client_id, client_secret, grant_type=authorization_code, 
}

userController.createUser = (req, res, next) => {

}

userController.fetchAccessToken = async (req, res, next) => {
  // console.log(req.query);
  try {
    // POST REQUEST to retrieve ACCESS TOKEN
    const body = {
      client_id: process.env.FREESOUND_CLIENT_ID,
      client_secret: process.env.FREESOUND_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: req.query.code
    }
    // create x-www-form-urlencoded payload
    let formBody = [];
    for (const property in body) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(body[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join('&');
    console.log('formBody: ', formBody);
    // send POST request to retrieve access token - step 3 FS authentication
    await fetch('https://freesound.org/apiv2/oauth2/access_token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: formBody,
    })
      .then(res => res.json())
      .then(json => {
        console.log('access_token (userController.fetchAccessToken): ', json);
        res.locals.access_token = json.access_token;
        res.locals.refresh_token = json.refresh_token;
        // console.log('res.locals.access_token: ', res.locals.access_token);
        // console.log('res.locals.refresh_token: ', res.locals.refresh_token);
      });

    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = userController;