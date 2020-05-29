/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const express = require('express');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 3000;

app.use(serveStatic('build'));
app.use((req, res) => {
  return res.sendFile(path.join(`${__dirname}/../build/index.html`));
});
app.listen(port, () =>
  console.log(`UncharTech Web is running on ${port} port`),
);
