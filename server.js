var express = require('express');

var app = express();

// app.use(express.static(__dirname + '/templates'));

app.get('*', function (req, res) {
    var responseObj = {
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    };
    // console.log(req.headers);
    // console.log(req.rawHeaders[7]);
    res.send(responseObj);
});

app.listen(process.env.PORT, function () {
    console.log('app listening on port ' + process.env.PORT);
});