const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/titles', {useNewUrlParser: true}, (err) => {
  if(err) console.log(err);// eslint-disable-line
  console.log('mongoose connected!');// eslint-disable-line
  
});



module.exports = mongoose;

