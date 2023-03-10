//front-end of application
//will need to use res.render
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../models');

//import sequelize
const sequelize = require('../../config/connection.js');

router.get('/', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
    const productData = await Product.findAll({
      include: [Product], //will bring in all categories via index.js file 
      //order: [['product_name', 'ASC']]
    })
    const products = productData.map((product) => product.get({plain: true}))
    res.status(200).render('homepage', {products})
  } catch (err) { 
    res.status(400).json(err)
  }
  });

  router.get('/:productid', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
    const productData = await Product.findOne({
      include: [Product], //will bring in all categories via index.js file 
      //order: [['product_name', 'ASC']]
    })
    const product = productData.map((product) => product.get({plain: true}))
    res.status(200).render('product', {product})
  } catch (err) { 
    res.status(400).json(err)
  }
  });

  module.exports = router;
