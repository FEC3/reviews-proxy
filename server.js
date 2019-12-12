var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
const express = require('express');
let app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;


app.use(express.static('public'));


// 3001
app.get('/product/:pid', (req,res,next) => {
  let pid = req.params.pid;
  proxy.web(req,res, {target:`http://ec2-13-58-162-184.us-east-2.compute.amazonaws.com:3001/`});
});

//3002
app.get('/images/:pid', (req,res,next) => {
  let pid = req.params.pid;
  proxy.web(req,res, {target:`http://ec2-18-188-250-254.us-east-2.compute.amazonaws.com:3002/`});
});

//3003
app.get('/reviews/:pid', (req,res,next) => {
  let pid = req.params.pid;
  proxy.web(req,res, {target:`http://ec2-13-58-212-164.us-east-2.compute.amazonaws.com:3003/`});
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

