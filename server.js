const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

// Init Middleware
// In order to make body parser work
app.use(express.json({ extended: false }));
var cors = require("cors");
app.use(cors());
//  Defining routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
