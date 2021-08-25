const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');
const cookieController = require('./../controllers/cookieController');
const fetch = require('node-fetch');
require('dotenv').config();

// login link from client - step 1 FS authentication
router.get('/login', (req, res) => {
  const url = `https://freesound.org/apiv2/oauth2/logout_and_authorize/?client_id=${process.env.FREESOUND_CLIENT_ID}&response_type=code`;
  // redirect user to freesound.org URL so that they can login via FS app and 
  res.redirect(url);
});

// callback url - endpoint browser gets redirected to once users successfully login on freesound site - step 2 FS authenticaton
router.get('/login/success', 
  userController.fetchAccessToken,
  cookieController.setTokenCookie,
  // now that we have access token, verify if user already exists

  // otherwise, create new user
  (req, res) => {
    res.status(200).redirect('/api/search');
});

router.get('/search', 

  (req, res) => {
    res.status(200).send('you\'re at the search route');
  }
)


module.exports = router;