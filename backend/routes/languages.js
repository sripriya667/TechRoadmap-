const express = require('express');
const Language = require('../models/Language');

const router = express.Router();

// Get all languages
router.get('/', async (req, res) => {
  try {
    const languages = await Language.find().sort({ name: 1 });
    res.json(languages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get languages by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const languages = await Language.find({ category }).sort({ name: 1 });
    res.json(languages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get language by ID
router.get('/:id', async (req, res) => {
  try {
    const language = await Language.findById(req.params.id);
    
    if (!language) {
      return res.status(404).json({ message: 'Language not found' });
    }
    
    res.json(language);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 