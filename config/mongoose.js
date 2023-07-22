
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://poojapanwar:poojapanwarxyz@cluster0.hha0ca6.mongodb.net/?retryWrites=true&w=majority",
    {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection is successfully");
  })
  .catch((e) => {
    console.log("No Connection");
  });
  // mongodb+srv://poojapanwar:mikkilohar1892001@cluster0.ojk4wgk.mongodb.net/