const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');
const fetch = require('node-fetch');
require('dotenv').config();

// login link from client - step 1 FS authentication
router.get('/login', (req, res) => {
  const url = `https://freesound.org/apiv2/oauth2/authorize/?client_id=${process.env.FREESOUND_CLIENT_ID}&response_type=code`;
  // redirect user to freesound.org URL so that they can login via FS app and 
  res.redirect(url);
});

// callback url - endpoint browser gets redirected to once users successfully login on freesound site - step 2 FS authenticaton
router.get('/login/success', (req, res) => {
  console.log(req.query.code);
  // userController.createUser,
  // userController.verifyUser,
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
  fetch('https://freesound.org/apiv2/oauth2/access_token/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body: formBody,
  })
    .then(res => res.json())
    .then(json => console.log('access_token', json));
  // now that we have access token, verify if user already exists

  // otherwise, create new user


  res.status(200).redirect('/api/search');
});

router.get('/search', 

  (req, res) => {
    res.status(200).send('you\'re at the search route');
  }
)


module.exports = router;