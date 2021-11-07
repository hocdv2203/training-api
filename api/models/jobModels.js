'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var JobSchema = new Schema({
  id: {
    type: String,
    default: Date.now
  },
  description: {
    type: String,
    required: 'description is required',
    default: 'This is description of the job'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'new', 'completed', 'reserved']
    }],
    default: ['new']
  },
  price: {
    type: String,
    default: 0
  },
  tags: {
    type: [String],
    default: []
  }
});

module.exports = mongoose.model('Jobs', JobSchema);