const { Queue } = require('../queue/Queue');

const dogs = new Queue();

dogs.enqueue({
  id: 1,
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  id: 5,
  imageURL:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45166059/1/?bust=1570696061&width=720', 
  imageDescription: 'A smiling pit bull mix',
  name: 'Bella',
  sex: 'Female',
  age: 5,
  breed: 'Pit Bull mix',
  story: 'Owner gave her up'
});


dogs.enqueue({
  id: 6,
  imageURL:'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45490923/1/?bust=1570696081&width=720', 
  imageDescription: 'Medium Sized playful gal',
  name: 'China',
  sex: 'Female',
  age: 2.5,
  breed: 'Pit Bull mix',
  story: 'House caught fire'
});

module.exports = dogs;