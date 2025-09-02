const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  resources: [{
    title: String,
    url: String,
    type: String // 'video', 'article', 'course', etc.
  }],
  order: {
    type: Number,
    required: true
  }
});

const roadmapSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['fullstack', 'app', 'datascience', 'aiml']
  },
  steps: [stepSchema],
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  estimatedTime: {
    type: String,
    default: '3-6 months'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Roadmap', roadmapSchema); 