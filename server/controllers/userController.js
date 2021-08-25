const User = require('../models/userModel');
const userController = {};

userController.verifyUser = (req, res, next) => {
  // makes a POST request to https://freesound.org/apiv2/oauth2/access_token
  // parameters: client_id, client_secret, grant_type=authorization_code, 
}

userController.createUser = (req, res, next) => {

}

module.exports = userController;