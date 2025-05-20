import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: String,
  breed: String,
  age: Number,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  imageUrl: String
});

const Pet = mongoose.model('Pet', petSchema);

export default Pet;

