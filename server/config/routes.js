const mongoose = require('mongoose');
const UserController = require('./../controllers/users');

module.exports = function(app) {

    // create user
    app.post('/api/users', UserController.create);

    // get user
    app.get('/api/users/:id', UserController.getOne);

    // get user by email
    app.get('/api/users/email/:email', UserController.getOneByEmail);

};
