var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/contact', router);
};

router.get(['/'], function (req, res, next) {
    res.render('contact', {
      title: 'TREE Arboricultura | Contacto'
    });
});

router.post(['/'], function (req, res, next) {
   res.end('ok');
});
