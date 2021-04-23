const express = require("express");
const router = require("./router/indexRouter");
const app = express();
require("./db/mongoose");

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is up on 3000");
});
