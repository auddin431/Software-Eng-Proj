const jwt = require('jsonwebtoken');

const authToken = function(req, res, next) {
    const token = req.cookies.token;
    if(!token) {
      res.status(401).send('Unauthorized: No token found');
    } else {
      jwt.verify(token, process.env.JWT_SECRET, function(err, hashed) {
        if(err) {
          res.status(401).send('Unauthorized: Unable to authorize token');
        } else {
          req.email = decoded.email;
          next();
        }
      });
    }
  }

module.exports = authToken;