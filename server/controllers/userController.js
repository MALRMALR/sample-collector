const db = require('../models/userModel');
const userController = {};
const fetch = require('node-fetch');

userController.verifyUser = (req, res, next) => {
  // check to see if user already exists in DB
  return next();
}

userController.createUser = (req, res, next) => {
  try {
    const query = {
      text: 'INSERT INTO users (first_name, last_name, email, access_token, refresh_token',
      values: [req.body.first_name, req.body.last_name, req.body.email, req.body.access_token, req.body.refresh_token],
    };
    // await db.query(query).then(data => {
    //   console.log(data);
      
    // })
    // 1.  check if user already exists in DB
    // 2.  if not, create new user
    // 3.  if user does exist, update user tuple with new access token and refresh token
    // 4.  
    console.log('req (userController.createUser): ', req.cookies); // why are these cookies from the previous request cycle?

    // console.log('res (userController.createUser): ', res);
    return next();
  } catch (err) {
    return next(err);
  }

}

userController.fetchAccessToken = async (req, res, next) => {
  // console.log(req.query);
  try {
    // POST REQUEST body to retrieve ACCESS TOKEN
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
    // join array elements with '&'
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
      });

    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = userController;