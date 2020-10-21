const http = require('http');
const app = require('./app');

// Get the port from the enviroment or run on 3000
const port = process.env.PORT || 3000;
// Run the server which will run the app API
const server = http.createServer(app);

// Listen to incoming connections
server.listen(port, () => console.log(`Server running on port: ${port}...`));