var express = require('express');
var router = express.Router();
var login_audit = require('./login_audit');
// var imageRouter = require('./imageService');
// var cloudRouter = require('./cloudService');


router.use((req, res, next) => {
    console.log("Called: ", req.path);
    next();
});

router.use(login_audit);
// router.use(imageRouter);
// router.use(cloudRouter);

module.exports = router;