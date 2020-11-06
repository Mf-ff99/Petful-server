const { Queue } = require('../../modules/queue/Queue');

const users = new Queue;

users.enqueue({
  name: 'Homelander'
});

users.enqueue({
  name: 'Starlight'
});

users.enqueue({
  name: 'Hughie'
});


module.exports = users;