const express = require('express');
const router = express.Router();

// User model
const User = require('../../models/User');

// @route GET api/users/test
// @description users route
// @access Public
router.get('/test', (req, res) => res.send('Users test route is working!'));

// @route GET api/users
// @description Get all users
// @access Public
router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch(err => res.status(404).json({ nousersfound: 'No Users found' }));
});

// @route GET api/users/:id
// @description Get single user by id
// @access Public
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch(err => res.status(404).json({ nouserfound: 'No User found' }));
});

// @route POST api/users
// @description Create a new user
// @access Public
router.post('/', (req, res) => {
  User.create(req.body)
    .then(() => res.json({ msg: 'New user created!' }))
    .catch(err => res.status(400).json({ error: 'Unable to create a new user' }));
});

// @route PUT api/users/:id
// @description Update an existing user
// @access Public
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ msg: 'User updated succesfully!' }))
    .catch(err => res.status(404).json({ error: 'Unable to update the user' }));
});

// @route DELETE api/users/:id
// @description Delete an existing user
// @access Public
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then(() => res.json({ msg: 'User deleted succesfully!' }))
    .catch(err => res.status(404).json({ error: 'Unable to delete the user' }));
});

module.exports = router;
