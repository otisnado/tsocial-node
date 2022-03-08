const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['all users']);
});

// router.get('/:username', (req, res) => {
//   res.json([req.params]);
// });

router.get('/:id', (req, res) => {
  res.json([req.params]);
});

router.post('/', (req, res) => {
  
});

router.put('/', (req, res) => {
  
});

router.delete('/:id', (req, res) => {
  res.json([req.params.id]);
});

module.exports = router;
