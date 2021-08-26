const soundController = {};

soundController.searchSamples = (req, res, next) => {
  try {
    console.log(req.body);
    return next();
  } catch (err) {

  }
}

moduleexports = soundController;