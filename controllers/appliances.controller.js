

exports.ControlDevices = (req,res)=>{
    if(CurrState == 0) CurrState = 1; else CurrState = 0;
    console.log({
        state: CurrState
    });
    return res.json({
        state: CurrState
    });
}


exports.IotHandler = (req,res)=>{
    return res.send(CurrState.toString());
}