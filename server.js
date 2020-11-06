const express = require('express');
const cors = require('cors');
const catsRouter = require('../petful-server-template/modules/pets/cats.router');
const dogsRouter = require('../petful-server-template/modules/pets/dogs.router');
const usersRouter = require('../petful-server-template/modules/people/people.router');
const adoptedRouter = require('../petful-server-template/modules/adopted/adopted.router');


const app = express();
app.use(cors());


app.use('/api/cats', catsRouter);
app.use('/api/dogs', dogsRouter);
app.use('/api/users', usersRouter);
app.use('/api/adopted', adoptedRouter);



// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(process.env.PORT || 8080,()=>{
  console.log('Serving on 8080');
});
