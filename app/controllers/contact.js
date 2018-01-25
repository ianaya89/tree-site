var express = require('express'),
  router = express.Router();
  nodemailer = require('nodemailer');
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
  });

module.exports = function (app) {
  app.use('/contact', router);
};

router.get(['/'], function (req, res, next) {
    res.render('under', {
      title: 'TREE Arboricultura | Contacto'
    });
});

router.post(['/'], function (req, res, next) {
  console.log(req.body);
  if (!isEmailValid(req.body)) throw 'Missing parametters';

  transporter.sendMail({
    from: req.body.email,
    to: 'tree.anaya@gmail.com',
    subject: 'Consulta Sitio Web - ' + req.body.subject,
    text: 'Nombre: ' + req.body.name + '\n' +  'E-Mail: ' + req.body.email + '\n' + 'Consulta: ' + req.body.message
  });

  res.send('OK');
});

function isEmailValid(body) {
  if (!body.name) return false;
  if (!body.email) return false;
  if (!body.subject) return false;
  if (!body.message) return false;

  return true;
}