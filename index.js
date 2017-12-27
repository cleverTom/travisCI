const request = require('superagent');

request.get('http://www.baidu.com').end(function (err, res) {
    if (err) {
        return console.error(err);
    }
    console.log(res.statusCode);
    console.log(res.headers);
    console.log('构建完成');
});

