/* eslint-env node */
import express from "express";
const app = express();
app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
