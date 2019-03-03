const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('./registUser', async (ctx) => {
    console.log('sucess');
    ctx.body = 'sucess';
})

module.exports = router;// 导出