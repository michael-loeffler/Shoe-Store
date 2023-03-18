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
    const sort = req.query.sort ?? 'stock'
    const order = req.query.order ?? 'DESC'

    const productData = await Product.findAll({
      include: [Category, { model: Tag, through: ProductTag }], //will bring in all categories via index.js file 
      order: [[sort, order]]

    })
    const products = productData.map((product) => product.get({ plain: true }));

    if (req.session.logged_in) {
      const wishlistData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: { model: Product, through: UserProduct },
      });
      const wishlist = wishlistData.get({ plain: true });
      let productsLoggedIn = products.map((product) => {
        for (i = 0; i < wishlist.products.length; i++) {
          if (product.id === wishlist.products[i].id) {
            product.wishlist = true;
          }
        }
        return product;
      })
      const cart = req.session.cart;
      if (cart) {
        productsLoggedIn = productsLoggedIn.map((product) => {
          for (i = 0; i < cart.length; i++) {
            if (product.id == cart[i]) {
              product.cart = true;
            }
          }
          return product;
        })
        //console.log(products)
        //console.log(products[yourProductIndex].tags[tagIndex].tag_name)
      }
      res.status(200).render('homepage', { productsLoggedIn, logged_in: true })
    } else {
      res.status(200).render('homepage', { products })
    }

  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
});

router.get('/products/:productid', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const productData = await Product.findByPk(req.params.productid, {
      include: [Category, { model: Tag, through: ProductTag }], //will bring in all categories via index.js file 
      //order: [['product_name', 'ASC']]
    })
    const product = productData.get({ plain: true })
    const product_id = product.id;

    if (req.session.logged_in) {
      const wishlistData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: { model: Product, through: UserProduct },
      });
      const wishlistPlain = wishlistData.get({ plain: true });
      const wishlistArray = wishlistPlain.products.map((product) => product.id);
      if (wishlistArray.length) {
        console.log(wishlistArray);
        if (wishlistArray.includes(product_id)) {
          product.wishlist = true;
        }
      }

      const cartArray = req.session.cart;
      if (cartArray) {
        if (cartArray.includes(product_id)) {
          product.cart = true;
        }
      }
      res.status(200).render('product', { product, logged_in: true })
    } else {
      res.status(200).render('product', { product })
    }
  } catch (err) {
    res.status(400).json(err)
  }
});

//cart

router.get('/cart', async (req, res) => {
  //console.log("get route")
  // find all categories
  // be sure to include its associated Products
  // 

  try {
    console.log(req.session.user_id)
    const cartData = await User.findByPk(req.session.user_id, {
      include: [Product], //will bring in all categories via index.js file 

    })
    const cart = cartData.map((cart) => cart.get({ plain: true }))
    //console.log(products)
    //console.log(products[yourProductIndex].tags[tagIndex].tag_name)
    res.status(200).json(cart)
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
      include: { model: Product, through: UserProduct },
    });

    const user = userData.get({ plain: true });


    if (!user.products.length) {
      res.render('profile', {
        user,
        logged_in: true,
        empty: true
      });
    } else {
      const cartArray = req.session.cart;
      if (cartArray) {
        user.products.forEach((product) => {
          for (i = 0; i < cartArray.length; i++) {
            if (product.id == cartArray[i]) {
              product.cart = true;
            }
          }
        })
        res.render('profile', {
          user,
          logged_in: true
        });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;