const { Category } = require('../models');

  const categoryData = [
  {

   category_name: 'sneaker'
  },
  {
    category_name: 'running shoe'
  },
  {
    category_name: 'boot'
  },
  {
    category_name: 'sandal'
  },
  {
    category_name: 'athletic shoe'
  },
  {
    category_name: 'walking shoe'
  },
  {
    category_name: 'high heel'
  },
  {
    category_name: 'loafers'
  },
  {
    category_name: 'dress shoe'
  },
  ]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;