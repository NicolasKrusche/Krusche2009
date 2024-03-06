const { fakerDE } = require('@faker-js/faker');

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.person.firstName());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.person.lastName());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.animal.cat())
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.phone.imei());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.airline.airport());
}