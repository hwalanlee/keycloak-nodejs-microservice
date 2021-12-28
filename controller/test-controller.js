var express = require('express');
var router = express.Router();

// keycloak 로그인사용할 수 있도록 keycloak 가져오기
const keycloak = require('../config/keycloak-config').getKeycloak();


// 라우터 설정
router.get('/anonymous', (req, res) => {
    res.send('Hello Anonymous');
})

router.get('/user', keycloak.protect('user'), (req, res) => {
    res.send('Hello User');
})

router.get('/admin', keycloak.protect('admin'), (req, res) => {
    res.send('Hello Admin');
})

router.get('/all-user', keycloak.protect(['user', 'admin']), (req, res) => {
    res.send('Hello All User');
})

module.exports = router;