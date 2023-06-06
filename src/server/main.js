const express = require("express");
const ViteExpress = require("vite-express");
let PORT = process.env.PORT || 3000

const app = express();
app.use(express.static(path.resolve(__dirname, "../build")));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port " + PORT + "...")
);
