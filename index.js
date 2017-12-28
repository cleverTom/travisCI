const express = require('express');
const app = express();

app.get('/',function(req,res) {
    console.log('someone access here!');
    res.send('welcome to my website and I\'m test my js,hahahah');
});

app.listen(8080,function (err) {
    if(err) {
        return console.log(err);
    }
    console.log('启动服务,监听端口: 8080');
});