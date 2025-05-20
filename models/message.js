const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({}, { strict: false }, "candidates"); // loose schema

module.exports = mongoose.model('Message', candidateSchema);
