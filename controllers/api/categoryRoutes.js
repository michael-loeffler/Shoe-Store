//for back-end purposes
const router = require('express').Router();
const { Category, Product } = require('../../models');

//import sequelize
const sequelize = require('../../config/connection.js');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: [Product] //will bring in all categories via index.js file 
  })
  res.status(200).json(categories)
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
    const category = await Category.findOne({
      where: {id: req.params.id},
      include: [Product]
    })
    res.status(200).json(category)

});

router.post('/', async (req, res) => {
  // create a new category
  try {
  const category = await Category.create(req.body)
  res.status(200).json(category)
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
  const category = await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }) 
  res.status(200).json(category)
} catch(err) {
  console.log(err);
  res.status(400).json(err);
}
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200).json('Deleted')
});

module.exports = router;
