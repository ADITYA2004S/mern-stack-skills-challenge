const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://adityasinghofficial06:wMgJinLYouOOtNyz@movies.ryj66.mongodb.net/"
);

const movieSchema = mongoose.Schema({
  title: String,
  description: String,
  director: String,
  year: String,
  genre: String,
});

module.exports = mongoose.model("user", movieSchema);
