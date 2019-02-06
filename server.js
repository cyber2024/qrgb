let express = require('express');
let app = express();
let qrgb = require('./modules/qrgb');
let bodyParser = require('body-parser');
app.post('/', bodyParser.json(), (req,res)=>{
    res.json(req.body)
});
app.get('/', (req,res)=>{
    res.sendFile(process.cwd()+'/index.html');
});

app.listen(8002, ()=>console.log('lstening on 8002.'))