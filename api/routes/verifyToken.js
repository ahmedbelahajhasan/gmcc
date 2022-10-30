const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  try {
    //  import token
    // headers=> authorization
    const token = req.headers["authorization"];
    // console.log(token);
    //   si mathamch token
    if (!token) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized1" }] });
    }
    // you are not authorized
    // on doit verifie si token est valide
    const decoded = jwt.verify(token,process.env.JWT_SEC );
    // test if the user exist with that id
    const user = await User.findOne({ _id: decoded.id }).select("-password");
    // you are not authorised
    if (!user) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized2" }] });
    }

    // si non
    // req bech nzid user
    req.user = user;
    // next
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};