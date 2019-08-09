var express = require('express');
var router = express.Router();
var latest = require('./controller.js')
// 该路由使用的中间件
router.use('/test', function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
});
router.use('/latest', latest);
module.exports = router;