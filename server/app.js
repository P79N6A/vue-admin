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
    res.json({tags:[
        {id:'1001',
         tag:'体育',
         weight:1,
         confidence:0.1111,
         category_tag_level:1
         },
        {id:'1002',
         tag:'语文',
         weight:2,
         confidence:0.2222,
         category_tag_level:2
         },
        {id:'1003',
        tag:'数学',
        weight:3,
        confidence:0.3333,
        category_tag_level:3
        },
        {id:'1004',
        tag:'英语',
        weight:4,
        confidence:0.4444,
        category_tag_level:4
        },
        {id:'1005',
        tag:'物理',
        weight:5,
        confidence:0.5555,
        category_tag_level:5
        },
        {id:'1006',
        tag:'化学',
        weight:6,
        confidence:0.6666,
        category_tag_level:6
        },
        ]
    });// 向前端发送数据
    
});

app.listen(8085, function () {
    console.log('success listen...8085');
});