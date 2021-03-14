const faker = require('faker');
const fs = require('fs');
let personData = function () {
	this.firstname = faker.name.firstName();
	this.lastname = faker.name.lastName();
	this.gender = faker.name.gender();
	this.bitcoinaddress = faker.finance.bitcoinAddress();
	this.cardnumber = faker.finance.creditCardNumber();
	this.image = faker.image.imageUrl();
	this.mac = faker.internet.mac();
	this.protocol = faker.internet.protocol();
	this.ip = faker.internet.ip();
};
let resarr = [];
let number = +process.argv[2];

console.log(number);
for (let i = 0; i < number; i++) {
	resarr.push(new personData());
}


fs.writeFileSync('./data.json', JSON.stringify(resarr));
