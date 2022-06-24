const {https} = require("firebase-functions");
const {default:next} = require("next");

const isDev = false;

const server = next({
    dev: isDev,
    conf: {distDir: '.next'}
});

const nextjsHandle = server.getRequestHandler();

exports.nextServer = https.onRequest((req, res) => {
    return server.prepare().then(
        (result) => {
            return nextjsHandle(req, res);
        }
    )
});