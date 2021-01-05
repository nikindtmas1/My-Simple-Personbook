const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    let contacts = phonebook.getPhonebook
    res.render('index', { contacts });
    // TODO: load index page
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
    let name = req.body.name;
    let lastName = req.body.lastName;
    let number = req.body.number;
    let email = req.body.email;
    phonebook.addContact(name, lastName, number, email);

    res.redirect('/');
  }
}