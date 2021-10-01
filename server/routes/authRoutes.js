const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/google-login', authController.googleLogin);
router.get('/logout', authController.logout);
router.get('/auth-check', authController.authCheck);

module.exports = router;