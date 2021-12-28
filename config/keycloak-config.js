var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: true,
    serverUrl: 'http://localhost:8180/auth',
    realm: 'Demo-Realm',
    credentials: {
        secret: 'cbffd605-5a96-4924-984f-fbd4b4cde25e'
    }
}

function initKeycloak (memoryStore) {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    }else {
        console.log("Initializing Keycloak...");
        _keycloak = new Keycloak({store: memoryStore}, keycloakConfig);
        console.log("Keycloak initialized...");
        return _keycloak;
    }
}

function getKeycloak () {
    if (!_keycloak) {
        console.error("Keycloak has not been initialized. Please call it first.");
    }
    return _keycloak;
}

module.exports = {
    initKeycloak, getKeycloak
}