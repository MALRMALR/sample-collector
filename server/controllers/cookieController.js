const cookieController = {};

cookieController.setTokenCookie = (req, res, next) => {
  try {
    console.log("set token cookie");
    console.log(res.locals);
    res.cookie('access_token', res.locals.access_token, {
      httpOnly: true,
      secure: true,
      maxAge: 86400000 // 24 hours in milliseconds
    })
    res.cookie('refresh_token', res.locals.refresh_token, {
      httpOnly: true,
      secure: true,
      maxAge: 86400000
    });
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = cookieController;