// 1.引入express
const express = require("express");
const req = require("express/lib/request");

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装, response是对响应报文的封装
app.get("/server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 设置响应体
  response.send("HELLO AJAX");
});

app.post("/server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 设置响应体
  response.send("HELLO AJAX POST");
});

// 可以接收任意类型的请求
app.all("/server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 响应头：允许自定义请求头
  response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  response.send("HELLO AJAX POST");
});

app.all("/json-server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 响应头：允许自定义请求头
  response.setHeader("Access-Control-Allow-Headers", "*");
  // 响应一个数据
  const data = {
    name: "张三",
  };
  // 对对象进行字符串转换
  let str = JSON.stringify(data);
  // 设置响应体
  response.send(str); // send方法里只能接受字符串和buffer
});

// 针对IE缓存
app.get("/ie", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 响应头：允许自定义请求头
  response.setHeader("Access-Control-Allow-Headers", "*");
  // 设置响应体
  response.send("Hello IE -2");
});

// 延时响应
app.all("/delay", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 定时器 设置响应体
  setTimeout(() => {
    response.send("延时响应");
  }, 3000);
});

// jQuery 服务
app.all("/jquery-server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 响应头：允许自定义请求头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //   response.send("Hello jQuery AJAX");
  const data = { name: "zz" };
  response.send(JSON.stringify(data));
});

// axios 服务
app.all("/axios-server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 响应头：允许自定义请求头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //   response.send("Hello axios AJAX");
  const data = { name: "zz" };
  response.send(JSON.stringify(data));
});

// fetch 服务
app.all("/fetch-server", (request, response) => {
  // 设置响应头 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 响应头：允许自定义请求头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //   response.send("Hello fetch AJAX");
  const data = { name: "zz" };
  response.send(JSON.stringify(data));
});

// jsonp 服务
app.all("/jsonp-server", (request, response) => {
  // response.send("console.log('hello jsonp')");
  const data = {
    name: "zz",
  };
  // 将数据转化为字符串
  let str = JSON.stringify(data);
  // 返回结果
  response.end(`handle(${str})`);
});

// 用户名检测是否存在
app.all("/check-username", (request, response) => {
  // response.send("console.log('hello jsonp')");
  const data = {
    exist: 1,
    msg: "用户名已经存在",
  };
  // 将数据转化为字符串
  let str = JSON.stringify(data);
  // 返回结果
  response.end(`handle(${str})`);
});

// jquery-jsonp
app.all("/jquery-jsonp-server", (request, response) => {
  const data = {
    name: "zz",
    city: ["海南", "深圳", "厦门"],
  };
  // 将数据转化为字符串
  let str = JSON.stringify(data);
  // 接收 callback 参数
  let cb = request.query.callback;
  // 返回结果
  response.end(`${cb}(${str})`);
});

// cors
app.all("/cors-server", (request, response) => {
  // 设置响应头
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Method", "*");
  response.send("hello CORS");
});

// 4.监听端口启动服务
app.listen(8000, () => {
  console.log("服务已经启动，8000端口监听中");
});
