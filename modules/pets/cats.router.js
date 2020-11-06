const express = require('express');

const catsRouter = express.Router();
const cats = require('../stores/cat-store');
const Queue = require('../queue/Queue');
const adopted = require('../stores/adopted-store')

catsRouter
  .route('/')
  .get((req, res, next) => {

   return res.status(200).json(cats);
        
  })

  .delete((req, res, next) => {

    adopted.enqueue(cats.dequeue());

    return res.status(204).end();
    
  });




module.exports = catsRouter;