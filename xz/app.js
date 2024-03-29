//1.引入express
const express=require('express');

//引入body-parse中间件
const bodyParser=require('body-parser');

//引入用户路由器(路径：进入当前目录下，在routes中)
const userRouter=require('./routes/user.js');

//2.创建web服务器
var app=express();
//3.监听端口
app.listen(8080);


//托管静态资源到当前目录下的public目录下
app.use(express.static('public'));

//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false
}));





//使用路由器，挂载到/user下
app.use('/user',userRouter);



