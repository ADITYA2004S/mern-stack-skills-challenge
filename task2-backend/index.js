const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
const { name } = require("ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read.ejs", { users });
});

app.get("/edit/:userid", async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.userid });
  res.render("edit", { user });
});

app.post("/update/:userid", async (req, res) => {
  let user = await userModel.findOneAndUpdate(
    { _id: req.params.userid },
    {
      name: req.body.name,
      task: req.body.task,
    }
  );
  res.redirect("/read");
});

app.post("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: req.body.name,
    task: req.body.task,
  });

  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  let users = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

app.listen(3000, () => {
  console.log("Connected ...");
});
