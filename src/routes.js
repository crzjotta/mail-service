const routes = require('express').Router();
const mailController = require('./app/controllers/MailController');

routes.post('/mail', mailController.store);

module.exports = routes;
