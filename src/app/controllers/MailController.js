const mail = require('../../config/mail');

class MailController {
  async store(req, res) {
    mail.sendMail({
      to: 'crzjotta@teste.com',
      from: 'crzjotta@teste.com',
      subject: 'Teste de email',
      template: 'email',
      context: {
        user: 'Jotta',
        message: 'Abaixa que é tiro',
      },
    });
    return res.status(201).json({ msg: 'Disparou' });
  }
}

module.exports = new MailController();
