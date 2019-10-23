const express = require("express");
const app = express();
const mongoose = require("../Db/db");
const router = require("../Routes/route");

app.use(express.json());

app.use("/users", router);

app.listen(3000, () => console.log("server started"));
