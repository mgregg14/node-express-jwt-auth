const { Router } = require('express');
const authController = require('../controllers/authControllers');

const router = Router();

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.get('/logout', authController.logout_get);

module.exports = router;


