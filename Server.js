// server.js
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data/db.json'));
const middlewares = jsonServer.defaults();

// Bind the router db to the app
server.db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(8000, () => {
  console.log('🚀 JSON Server is running at http://localhost:8000');
});



/**
 * 1. creating server
 * 2. json-server version should be in 0.00's only
 * 3. Both json-server and json-server-auth install locally
 * 
 */

 
