const { Queue } = require('../queue/Queue');

const adopted = new Queue();

adopted.enqueue({
  id: 1,
  imageURL:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45761942/1/?bust=1570826536&width=720', 
  imageDescription: 'Happy black and tan dog ready to play',
  name: 'Chesney',
  sex: 'Male',
  age: 14,
  breed: 'Daschund',
  story: 'Surrendered by family due to family issues'
});


module.exports = adopted;