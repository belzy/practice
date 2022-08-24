const express = require('express');
const server = express();
const path = require('path');

// const PORT = 8080;
const PORT = 443;

server.use('/', express.static(path.join(__dirname, 'client/build/')))

server.listen(PORT, () => {
  console.log(`Sever listening on port ${ PORT }`);
});