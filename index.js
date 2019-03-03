const Koa = require('koa');
const app = new Koa();

// 解决跨域问题
const cors = require('koa2-cors');
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}))

//接受前端post请求
const bodyParser = require('koa-bodyparser');
app.use(bodyParser())

// 加载路由
const Router = require('koa-router');
let user = require('./controller/user.js');

let router = new Router();
router.use('/user', user.routes());

app.use(router.routes());
app.use(router.allowedMethods);


const {connect, initSchemas} = require('./init.js');
(async () => {
    await connect();// 建立连接
    initSchemas();// 初始化 Schema
})();




app.use(async (ctx) => {
    ctx.body = "hello nihao";
})

app.listen(3000, () => {
    console.log('start shop server')
})