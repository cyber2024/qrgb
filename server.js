let express = require('express');
let app = express();
let qrgb = require('./modules/qrgb')();
let bodyParser = require('body-parser');
app.post('/generate', bodyParser.json({limit:'50mb'}), (req,res)=>{
    qrgb(req.body.data)
    .then(data=>res.json(data))
});
app.get('/', (req,res)=>{
    res.sendFile(process.cwd()+'/index.html');
});

app.listen(8002, ()=>console.log('lstening on 8002.'))