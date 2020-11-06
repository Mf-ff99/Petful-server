const { Queue } = require('../queue/Queue');

const cats = new Queue();

cats.enqueue({
  id: 2,
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

cats.enqueue({
  id: 3,
  imageURL:'http://photos.petfinder.com/photos/pets/46259630/1/?bust=1570923302&width=500&-x.jpg', 
  imageDescription: 'Black and White cat cuddling in her bed',
  name: 'Rose',
  sex: 'Female',
  age: 1,
  breed: 'Domestic Medium Hair',
  story: 'Found on the street ownerless'
});


cats.enqueue({
  id: 4,
  imageURL:'http://photos.petfinder.com/photos/pets/46271842/1/?bust=1571079930&width=500&-x.jpg', 
  imageDescription: 'Medium sized black cat ready to pounce(play)',
  name: 'Kylo Ren',
  sex: 'Male',
  age: 3,
  breed: 'Domestic Short Hair',
  story: 'Found on the street ownerless'
});

module.exports = cats;