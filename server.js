// Packages
const express = require("express");
const app = express();
const cors = require("cors");

// Port #
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("api/blocks", require("./routes/blocks"));

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
