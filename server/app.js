/**
 * Created by ant on 2019/4/30.
 */
var express = require('express');

var app = express();

const bodyParser = require('body-parser');

//设置全局使用
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");// 这里设置允许所有跨域访问
    res.header("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});



//响应post请求
app.post('/submit', function (req, res) {
    console.log(req.body);
    res.json({tags:[{tag:'normal',score:0.8}]});// 向前端发送数据
    
})

app.listen(8085, function () {
    console.log('success listen...8085');
});