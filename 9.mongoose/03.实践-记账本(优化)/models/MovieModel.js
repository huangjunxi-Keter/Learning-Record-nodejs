const mongoose = require('mongoose');

// 创建文档结构
const MovieSchema = new mongoose.Schema({
    title: String,
    director: String
});

const MovieModel = mongoose.model('movie', MovieSchema);

module.exports = MovieModel;