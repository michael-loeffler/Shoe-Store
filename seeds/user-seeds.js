const { User } = require('../models');

const userData = [
    {
        name: 'Cameron Dassow',
        email: 'cameron@test.com',
        password: 'password123',
    },
    {
        name: 'Danielle Torrise',
        email: 'danielle@test.com',
        password: 'password456',
    },
    {
        name: 'Michael Loeffler',
        email: 'michael@test.com',
        password: 'password789',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
