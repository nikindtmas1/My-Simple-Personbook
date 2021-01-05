/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
let Contact = require('./models/Contact')

let contacts = [
	{
		name:'Piter',
		lastName:'Parkar',
		number:'+359856958624',
		email:'djhguyt@mail.bg'
	},

	{
		name:'Maq',
		number:'+359876879157'
	},

	{
		name:'George',
		number:'+359867235716',
		email:'njkhuiy@giti.com'
	}
];

function getPhonebook(){
	return contacts.slice();
}

function addContact(name, lastName, number, email){
	let contact = new Contact(name, lastName, number, email);

	contacts.push(contact)
}

module.exports = {
	getPhonebook,
	addContact
}