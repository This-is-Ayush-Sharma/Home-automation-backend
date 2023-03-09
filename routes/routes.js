const app = require('express')()

//controller
const appliance_controller = require('../controllers/appliances.controller')

app.get('/health',(req,res)=>{
    return res.json({
        state: "1"
    });
})

app.get('/ChangeState',appliance_controller.ControlDevices);
app.get('/getState',appliance_controller.IotHandler);
app.get ('/fetchState',appliance_controller.AppState);
module.exports = app;