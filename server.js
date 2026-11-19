const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
    res.status(200).send("Application is running");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Node.js application running on port ${PORT}`);
});