const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://adityasinghofficial06:slhAUwWtS0xNrM92@userdata.qjrjx.mongodb.net"
);

const userSchema = mongoose.Schema({
  name: String,
  task: String,
});

module.exports = mongoose.model("user", userSchema);
