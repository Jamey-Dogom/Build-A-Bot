const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports = {
    // create a user if validations are met - else return errors 
    create: function (req, res) {
        User.create(req.body)
            .then(user => {
                res.json(user)
            })
            .catch(e => {
                const errors = [];

                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
    },


    getOne(req, res) {
        // promise that returns a user or returns an error
        User.find({ _id: req.params.id })
            .then(user => res.json(user))
            .catch(e => {
                const errors = [];
                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
        },

        getOneByEmail(req, res) {
            // promise that returns a user or returns an error
            User.find({ email: req.params.email })
                .then(user => res.json(user))
                .catch(e => {
                    const errors = [];
                    for (key in e.errors) {
                        errors.push(e.errors[key].message);
                    }
                    res.json({
                        errors
                    })
                })
            },

};