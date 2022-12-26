const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

// create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

// create model
const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo
Photo.create({
  title: 'Photo Title 2',
  description: 'Photo Description 2 lorem ipsum',
});

//read a photo
Photo.find({}, (err, data) => {
  console.log(data);
});

//update a photo
const id = '63a9b4216ab3f550fd069a19';

Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title 1 Updated',
    description: 'Photo Description 1 Updated',
  },
  (err, data) => {
    console.log(data);
  }
);

//delete a photo
Photo.findByIdAndRemove(id, (err, data) => {
  console.log('Photo is removed...');
});
