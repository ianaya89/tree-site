var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get(['/', '/index', '/home'], function (req, res, next) {
    res.render('under', {
      title: 'TREE Arboricultura | Inicio'
    });
});
