const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const operationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        required: true,
        trim: true,
      },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
operationSchema.plugin(toJSON);
operationSchema.plugin(paginate);

/**
 * @typedef User
 */
const Operation = mongoose.model('Operation', operationSchema);

module.exports = Operation;
