const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 4000 }); // websocket server port
app.use(express.json());
app.use(cors());
app.use('/api/v1',routes);

global.CurrState = 0

// When a new client connects to the server
wss.on('connection', function connection(ws) {
    console.log('New client connected');
  
    // Send data to the client every second
    const interval = setInterval(function sendData() {
    //   const data = { value: Math.random() }; // generate random data
      console.log('Sending data:',CurrState);
      ws.send(CurrState.toString()); // convert data to string and send
    }, 500);
  
    // When the client disconnects
    ws.on('close', function close() {
      console.log('Client disconnected');
      clearInterval(interval); // stop sending data to the disconnected client
    });
  });

app.listen(5000, ()=> console.log(`App live at port 5000`));