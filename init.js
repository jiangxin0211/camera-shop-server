const mongoose = require('mongoose');
const db = 'mongodb://localhost/camera-shop';// 默认端口27017


// 引入 schema
const glob = require('glob');
const path = require('path');
exports.initSchemas = () => {
    glob.sync(path.resolve(__dirname)).forEach(require);//获取当前项目的绝对地址

}


exports.connect = () => {
    // 连接数据库
    mongoose.connect(db, {userNewUrlParser: true});// 解析URL
    // 监听数据库连接（失败后重新建立了连接）
    mongoose.connection.on('disconnected', () => {
        mongoose.connect(db);
    })
    // 数据库出现错误
    mongoose.connection.on('error', err => {
        console.log(err);
        mongoose.connect(db);
    })
    // 连接的时候
    mongoose.connection.once('open', () => {
        console.log('mongodb connect success');
    })
}