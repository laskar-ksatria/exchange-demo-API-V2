"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _DBConnect = require("./configs/DBConnect");

//Utils
//other things
// import MainRoute from './routes/routes';
//Running config
_dotenv["default"].config();

(0, _DBConnect.MONGODB_CONNECT)(); //variables

var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

var PORT = 3006; //app.use

app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); //Main route

app.get("/", function (req, res, next) {
  return res.send("HELLO");
}); // app.use(MainRoute);
//Error handler

app.listen(PORT, function () {
  return console.log("Server running on 3006");
});
//# sourceMappingURL=app.js.map