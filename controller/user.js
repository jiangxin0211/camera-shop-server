const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/registUser', async (ctx) => {
    //获取model
    const User = mongoose.model('User');
    // 接受post请求，并封装成user对象
    let newUser = new User(ctx.request.body);

    // 使用mongoose下的save方法保存用户信息
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: '注册成功'
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            message: err
        }
    })
})

module.exports = router;// 导出