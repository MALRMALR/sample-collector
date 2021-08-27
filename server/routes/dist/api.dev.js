"use strict";

var express = require('express');

var router = express.Router();

var userController = require('./../controllers/userController');

var cookieController = require('./../controllers/cookieController');

var soundController = require('./../controllers/soundController');

require('dotenv').config(); // login link from client - step 1 FS authentication


router.get('/login', function (req, res) {
  var url = "https://freesound.org/apiv2/oauth2/logout_and_authorize/?client_id=".concat(process.env.FREESOUND_CLIENT_ID, "&response_type=code"); // redirect user to freesound.org URL so that they can login via FS app and 

  res.redirect(url);
}); // callback url - endpoint browser gets redirected to once users successfully login on freesound site - step 2 FS authenticaton

router.get('/login/success', userController.fetchAccessToken, // POST request - access token
cookieController.setTokenCookie, // sets cookies
// now that we have access token, verify if user already exists
// userController.verifyUser,
// otherwise, create new user
// userController.createUser,
function (req, res) {
  // redirects to Landing page.
  res.redirect('/');
}); // do i need this or can i send it on the front end

router.post('/search', soundController.searchSamples, function (req, res) {
  res.json(res.locals.data);
});
router.post('/save-sample', soundController.saveSample, function (req, res) {
  res.json(res.locals.sample);
});
router.post('/delete-sample', soundController.deleteSample, function (req, res) {
  res.json(res.locals.deleted);
});
router.get('/view-all', soundController.viewSavedSamples, function (req, res) {
  res.json(res.locals.all_samples);
});
module.exports = router;