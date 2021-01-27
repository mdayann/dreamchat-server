const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200);
  res.send({
    status: 200,
    message: 'Server is running !',
    data: null,
  });
});

module.exports = router;
