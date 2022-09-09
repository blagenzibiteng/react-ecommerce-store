const router = require("express").Router();
// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
});

try {
  const savedUser = await newUser.save();
  res.status(200).json(savedUser);
} catch (error) {
  console.log(error);
  res.status(500).json(error);
}
});

module.exports = router;