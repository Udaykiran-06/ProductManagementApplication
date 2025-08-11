// Backend/routes/auth.js
const express = require('express');
const router = express.Router();

// Dummy login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Replace with real authentication logic
  if (username === 'admin' && password === 'admin') {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;