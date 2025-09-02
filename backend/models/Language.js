const mongoose = require('mongoose');

const codeSnippetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  }
});

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: ['frontend', 'backend', 'database', 'other']
  },
  description: {
    type: String,
    required: true
  },
  useCase: {
    type: String,
    required: true
  },
  codeSnippets: [codeSnippetSchema],
  logo: {
    type: String,
    default: ''
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Language', languageSchema); 