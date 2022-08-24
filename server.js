const express = require('express');
const server = express();
const path = require('path');

// const PORT = 8080;
const PORT = 443;

server.use('/', express.static(path.join(__dirname, 'rock-paper-scissors/build/')))
// server.get('/rock-paper-scissors', (req, res) => {
//   res.setHeader('Content-Type', 'text/javascript');
//   res.sendFile(path.join(__dirname, './rock-paper-scissors/build/index.html'));
// })

server.listen(PORT, () => {
  console.log(`Sever listening on port ${ PORT }`);
});