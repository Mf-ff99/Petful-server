const express = require('express');

const catsRouter = express.Router();
const cats = require('../stores/cat-store');
const Queue = require('../queue/Queue');
const adopted = require('../stores/adopted-store')

catsRouter
  .route('/')
  .get((req, res, next) => {

   return res.status(200).json(Queue.getAll(cats));
        
  })

  .delete((req, res, next) => {

    adopted.enqueue(Pets.cats.dequeue());

    return res.status(204).end();
    
  });




module.exports = catsRouter;