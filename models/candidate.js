const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({}, { strict: false },"messages"); // loose schema

module.exports = mongoose.model('Candidate', candidateSchema);
