const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
//Connect Database
connectDB();

//Init Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "10000kb", extended: true }));
app.use(express.json({ extended: false }));

//Set Path

//Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/bikes", require("./routes/api/bikes"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//Start web server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
