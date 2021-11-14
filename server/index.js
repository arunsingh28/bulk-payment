const express = require("express");

// init express to App
const app = express();

// middlewares
app.use("/", require("./routes/index"));

// port number
const port = process.env.PORT || 5001;

app.listen(port, console.log(`server is up on port:${port}`));