const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path")
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

// Add routes, both API and view


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
// Connect to the Mongo DB

mongoose.connect(
   process.env.MONGODB_URI || 'mongodb://localhost/booksdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
