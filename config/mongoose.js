
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://surajsahani70684:suraj123@cluster0.6jzkufc.mongodb.net/?retryWrites=true&w=majority",
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