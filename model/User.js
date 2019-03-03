const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// 定义一个模型
const userSchema = new Schema({
    userId: Schema.Types.ObjectId,
    userName: {unique: true, type: String},
    password: String,
    createDate: {type: Date, default: Date.now()}
});

// 发布模型
mongoose.model('User',userSchema);
