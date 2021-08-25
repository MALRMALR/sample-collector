const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');
const fetch = require('node-fetch');
require('dotenv').config();

// login link from client - step 1 FS authentication
router.get('/login', (req, res) => {
  const url = `https://freesound.org/apiv2/oauth2/authorize/?client_id=${process.env.FREESOUND_API_KEY}&response_type=code`;
  // redirect user to freesound.org URL so that they can login via FS app and 
  res.status(200).redirect(url);
});

// callback url - endpoint browser gets redirected to once users successfully login on freesound site - step 2 FS authenticaton
router.get('/login/success', (req, res) => {
  console.log('REQ: ', req);
  console.log(req.query.code);
  res.locals.auth_code = req.query.code;
  // userController.createUser,
  // userController.verifyUser,
  // res.status(200).redirect('/api/search');
  res.status(200).end();
});

router.get('/search',
  userController.verifyUser,
  (req, res) => {
    
  }
)


module.exports = router;