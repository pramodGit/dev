const express = require("express");
const router = express.Router();
const loginRoute = require('./login');

const defaultRoutes = [
  {
    path: '/login',
    route: loginRoute,
  }
]

// Home page route.
/*router.use("/", function (req, res) {
  res.send("Home page");
});*/

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;