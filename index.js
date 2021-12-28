var express = require("express");
var app = express();

// 서버 구동 시 keycloak 초기화
const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());
// console.log(keycloak.middleware());

// 라우터 설정
var testController = require('./controller/test-controller');
app.use('/test', testController);

// 홈페이지
app.get("/", function (req, res) {
    res.send("Server is up!");
});

app.listen(3000);



// keycloak init > get keycloak 
//  >>> keycloak.middleware() 미들웨어로 사용할 수 있게?? 아직 이해 안 됨
//  >>> keycloak.protect('인증 대상')
