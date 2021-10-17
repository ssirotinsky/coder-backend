const faker = require('faker');

faker.locale = 'es';

const get = () => ({
    nombre: faker.name.findName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.avatar()
});

module.exports = {
    get
}