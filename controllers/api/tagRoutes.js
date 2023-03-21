
//for back-end purposes
const router = require('express').Router();
//const { UPSERT } = require('sequelize/types/lib/query-types');
const { Tag, Product, ProductTag } = require('../../models');

//import sequelize
const sequelize = require('../../config/connection.js');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
    // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: [Product] //will bring in all categories via index.js file 
  })
  res.status(200).json(tags)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.findOne({
    where: {id: req.params.id},
    include: [Product]
  })
  res.status(200).json(tag)
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body)
    res.status(200).json(tag)
    } catch(err) {
      console.log(err);
      res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    }) 
    res.status(200).json(tag)
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  await Tag.destroy({
    where: {
      id: req.params.id 
    }
  })
  res.status(200).json('Deleted')
});

module.exports = router;
