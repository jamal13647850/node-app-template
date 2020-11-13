const express = require('express');
const router = express.Router();

// Reaptcha Router
const reaptchaRouter = require('app/routes/api/recaptcha');
router.use('/recaptch', reaptchaRouter);


module.exports = router;
