const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use("/android", express.static(path.join(__dirname, "android")));

app.get("/", (req, res) => res.send("ZN Battle Royale Server Online"));

const server = app.listen(port, () => console.log(`Server running on port ${port}`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
