const express = require("express");
const User = require("./userModel");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Hello World!!",
    apiEndpoints: {
      getUserInfo: "/userinfo/:id",
      login: "/login",
      signup: "/signup",
    },
  });
});

app.get("/userinfo/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { name, email, about, photo } = user;
    return res.send({
      status: "success",
      data: { name, email, about, photo },
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email, password: password });
    if (user) {
      return res.send({
        status: "success",
        data: {
          name: user.name,
          email: user.email,
          about: user.about,
          photo: user.photo,
        },
      });
    }
    return res.send({
      status: "failure",
      data: "User not registered",
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, about } = req.body;
    const imageURL = `https://ui-avatars.com/api/?name=${name}`;
    if (!email.includes("@")) {
      return res.send("Please enter valid email address");
    }
    const userInDB = await User.findOne({ email: email });
    if (userInDB) {
      return res.send("Email already exists. Please LogIn");
    }
    await User.create({
      ...req.body,
      photo: imageURL,
    });
    return res.send({
      status: "success",
      data: { name, email, about, photo: imageURL },
    });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = app;
