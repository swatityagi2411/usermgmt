const express = require('express');
const router = express.Router();

let users = []; // In-memory store

router.get('/', (req, res) => res.json(users));

router.post('/', (req, res) => {
  users.push(req.body);
  res.status(201).send('User created');
});

router.put('/:id', (req, res) => {
  users[req.params.id] = req.body;
  res.send('User updated');
});

router.delete('/:id', (req, res) => {
  users.splice(req.params.id, 1);
  res.send('User deleted');
});

module.exports = router;
