var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/about', router);
};

router.get(['/'], function (req, res, next) {
    res.render('about', {
      title: 'TREE Arboricultura | Nosotros'
    });
});
