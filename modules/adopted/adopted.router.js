const express = require('express');

const adoptedRouter = express.Router();
const adopted = require('../stores/adopted-store');
const Queue = require('../queue/Queue');

adoptedRouter
  .route('/')
  .get((req, res, next) => {

    res.status(200).json(Queue.getAll(adopted));
        
  });

module.exports = adoptedRouter;