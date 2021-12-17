const mongoose = require("mongoose");
const app = require("express")();
require("dotenv").config();
require("./routes")(app);

const {PORT,db}=process.env;



mongoose
  .connect(db)
  .then(() => console.log("Connected to: ", db))
  .catch((err) => console.log("Cannot connect to the database Error:",err));

app.listen(PORT||5000, (err) => {
  if (!err) console.log("Listening to port "+ PORT);
});
