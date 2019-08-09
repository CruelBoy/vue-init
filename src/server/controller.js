const axios = require('axios');
module.exports = function (req, res, next) {
  axios
    .get('https://news-at.zhihu.com/api/4/news/latest')
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
