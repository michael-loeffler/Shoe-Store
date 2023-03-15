//front-end of application
//will need to use res.render
const router = require('express').Router();
const { Product, Category, Tag, ProductTag, User, UserProduct } = require('../models');
const withAuth = require('../utils/auth');

//import sequelize
const sequelize = require('../config/connection');



router.get('/', async (req, res) => {
  //console.log("get route")
    // find all categories
    // be sure to include its associated Products
    // 

    try {
    const sort = req.query.sortBy ?? 'stock'
    const order = req.query.order ?? 'DESC'

    const productData = await Product.findAll({
      include: [Category, {model: Tag, through: ProductTag}], //will bring in all categories via index.js file 
      order: [[sort, order]]
      
    })
    const products = productData.map((product) => product.get({plain: true}))
    //console.log(products)
    //console.log(products[yourProductIndex].tags[tagIndex].tag_name)
    res.status(200).render('homepage', {products})
  } catch (err) { 
    res.status(400).json(err)
  }
  });

  router.get('/products/:productid', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
    const productData = await Product.findByPk(req.params.productid, {
      include: [Category, {model: Tag, through: ProductTag}], //will bring in all categories via index.js file 
      //order: [['product_name', 'ASC']]
    })
    const product = productData.get({plain: true})
    res.status(200).render('product', {product})
  } catch (err) { 
    res.status(400).json(err)
  }
  });

  router.get('/sortBy=price&order=asc', async (req, res) => {
    // sort by price low to high
    try {
    const productData = await Product.findAll( {
      include: [Category, {model: Tag, through: ProductTag}], //will bring in all categories via index.js file 
      order: [['product_name', 'ASC']]
    })
    const product = productData.get({plain: true})
    res.status(200).render('product', {product})
  } catch (err) { 
    res.status(400).json(err)
  }
  });



router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});

router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: {model: Product, through: UserProduct},
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;