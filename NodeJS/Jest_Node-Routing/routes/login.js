const express = require("express");
const jwt = require('jsonwebtoken');
const fs = require('fs');

const router = express.Router();

router.post("/", function (req, res) {
  console.log('Login', req.body, req.headers.authorization);
  res.send({});;
});
function validateEmailAndPassword (email, password,) {
  return ((email !== '') && (password !== ''))
}
function findUserIdForEmail (email) {
  return userId = email?.split("@")[0];
}
function loginRoute(req, res) {
  console.log('Signed Cookies: ', req.body);
  //const RSA_PRIVATE_KEY = fs.readFileSync('./utils/private.key', 'utf8');
  //console.log("RSA_PRIVATE_KEY -> ", RSA_PRIVATE_KEY);
  const email = req.body.email,
        password = req.body.password;

  if (validateEmailAndPassword(email, password)) {
    //console.log("TRUE => validateEmailAndPassword");
     const userId = findUserIdForEmail(email);
    //console.log(userId);
    /*const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
              algorithm: 'RS2048',
              expiresIn: 120,
              subject: userId
          }
      )
      console.log(jwtBearerToken);*/
      const i  = 'Pramod';   // Issuer 
      const s  = 'pramodk0404@gmail.com';   // Subject 
      const a  = 'http://localhost';   // Audience
      const signOptions = {
        issuer:  i,
        subject:  s,
        audience:  a,
        expiresIn:  "12h",
        algorithm:  "RS256"
       };
      //const jwtBearerToken = jwt.sign(userId, RSA_PRIVATE_KEY, signOptions);
      //console.log("Token - " + jwtBearerToken)
      // send the JWT back to the user
      let options = {
        maxAge: 1000 * 60 * 15, // would expire after 15 minutes
        httpOnly: true, // The cookie only accessible by the web server
        signed: true // Indicates if the cookie should be signed
      }

      // Set cookie
      res.cookie('jwtToken', userId, options) // options is optional
      res.send({"userId": userId});
                                   
  }
  else {
    console.log('401 Unauthorized');
      // send status 401 Unauthorized
      res.sendStatus(401); 
  }
}

module.exports = loginRoute;