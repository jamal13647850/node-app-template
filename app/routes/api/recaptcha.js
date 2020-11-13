const express = require('express');
const router = express.Router();

// Controllers
const adminController = require('app/http/controllers/admin/adminController');


// Recaptcha Routes
router.post('/verify', adminController.recaptchaVerify);



module.exports = router;