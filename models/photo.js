var ObjectId, Schema, photoSchema, mongoose;

mongoose = require('mongoose');

Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;

photoSchema = new Schema({
  photo_id: { type: ObjectId, index: true },
  title: String,
  content: String,
  url: String,
  date: { type: Date, default: Date.now }
},
{collection: "pintrigue"});

module.exports = mongoose.model('photo', photoSchema);