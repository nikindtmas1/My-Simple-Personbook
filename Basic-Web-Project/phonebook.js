/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
let Contact = require('./models/Contact')

let contacts = [
	{
		name:'Piter',
		number:'+359856958624'
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

function addContact(name, number, email){
	let contact = new Contact(name, number, email);

	contacts.push(contact)
}

module.exports = {
	getPhonebook,
	addContact
}