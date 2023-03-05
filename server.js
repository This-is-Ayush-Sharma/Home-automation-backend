const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');

app.use(express.json());
app.use(cors());
app.use('/api/v1',routes);

app.listen(5000, ()=> console.log(`App live at port 5000`));