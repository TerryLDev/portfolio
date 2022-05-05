// Import Modules
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const env = require('dotenv').config();

// Import Routes
const routes = require('./routes/dev.js');

const port = process.env.PORT || 8080;

const app = express();

if (process.env.NODE_ENV == "development") { 
  app.use(routes)
}

else {
  console.log("Production Routes")
}

app.listen(port, (err) => {

  if (err) console.log(err);
  console.log("Server Running on Port:", port);

})