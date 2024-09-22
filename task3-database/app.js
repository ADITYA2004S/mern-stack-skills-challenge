const express = require("express");
const app = express();
const path = require("path");
const movieModel = require("./models/movies");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
const { name } = require("ejs");
const { title } = require("process");

app.get("/", (req, res) => {
  res.render("create.ejs");
});

app.get("/read", async (req, res) => {
  let movies = await movieModel.find();
  res.render("read.ejs", { movies });
});

app.get("/edit/:userid", async (req, res) => {
  let movie = await movieModel.findOne({ _id: req.params.userid });
  res.render("edit", { movie });
});

app.post("/update/:userid", async (req, res) => {
  let user = await movieModel.findOneAndUpdate(
    { _id: req.params.userid },
    {
      title: req.body.title,
      description: req.body.description,
      director: req.body.director,
      year: req.body.year,
      genre: req.body.genre,
    }
  );
  res.redirect("/read");
});

app.post("/create", async (req, res) => {
  let createdMovie = await movieModel.create({
    title: req.body.title,
    description: req.body.description,
    director: req.body.director,
    year: req.body.year,
    genre: req.body.genre,
  });

  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  let movies = await movieModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

app.listen(3000, () => {
  console.log("Connected ...");
});
