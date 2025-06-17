const Category = require('../models/Category');

// Add a new category
const addCategory = async (req, res) => {
  try {
    const category = await Category.create({ name: req.body.name });
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    print("hello")
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a category (optional)
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addCategory,
  getCategories,
  deleteCategory,
};
