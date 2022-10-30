const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRound = 10;
//REGISTER
router.post("/register", async (req, res) => {
  try {
    // const {_,email}=req.body
    // const findUser= User.findOne({email})
    // console.log(findUser)
    // if(findUser){
    //   return res.status(400).send({errors:[{msg:'email should be unique'}]});
    //   }
    const newUser = new User({
      ...req.body,
    });
    const hashedPassword = await bcrypt.hash(req.body.password, saltRound);
    newUser.password = hashedPassword;
    await newUser.save();
    res.status(201).send({ msg: "register succ", user: newUser });
  } catch (err) {
    res.status(500).send(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  // req.body { username:'admin',password:'123456'}
  // req.body.username
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      username,
    });

    if (!user) {
      return res.status(401).json("Wrong User Name");
    }
    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      return res.status(401).json("Wrong password");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    res.status(200).send({ user: user, accessToken });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
