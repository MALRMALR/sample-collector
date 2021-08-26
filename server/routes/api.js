const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');
const cookieController = require('./../controllers/cookieController');
const soundController = require('./../controllers/soundController');
require('dotenv').config();

// login link from client - step 1 FS authentication
router.get('/login', (req, res) => {
  const url = `https://freesound.org/apiv2/oauth2/logout_and_authorize/?client_id=${process.env.FREESOUND_CLIENT_ID}&response_type=code`;
  // redirect user to freesound.org URL so that they can login via FS app and 
  res.redirect(url);
});

// callback url - endpoint browser gets redirected to once users successfully login on freesound site - step 2 FS authenticaton
router.get('/login/success', 
  userController.fetchAccessToken,  // POST request - access token
  cookieController.setTokenCookie,  // sets cookies
  // now that we have access token, verify if user already exists
  // userController.verifyUser,
  // otherwise, create new user
  // userController.createUser,
  (req, res) => {
    // redirects to Landing page.
    res.redirect('/');
});

// do i need this or can i send it on the front end
router.post('/search',
  soundController.searchSamples,
  (req, res) => {
    res.json(res.locals.data);
});

router.post('/saveSample',
  soundController.saveSample,
  (req, res) => {
    res.json(res.locals.sample);
  }
)



module.exports = router;