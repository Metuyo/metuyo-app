module.exports = function(app) {
    var auth = require('./../controllers/auth.controller')

    app.get("/log", auth.get);
    app.post("/signup", auth.signup);
    app.post("/login", auth.login);
    app.post("/check", auth.checkToken);
    app.post("/checkAuthorized", auth.isAuthorized, (req, res) => {
        res.send("ONLY WHEN AUTHORIZED")
    })
}