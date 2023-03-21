//front-end of application
//will need to use res.render
const router = require('express').Router();
const { Product, Category, Tag, ProductTag, User, UserProduct } = require('../models');
const withAuth = require('../utils/auth');

//import sequelize
const sequelize = require('../config/connection');



router.get('/', async (req, res) => { // main homepage get route
  try {
    const sort = req.query.sort ?? 'stock' // user's sort preferences
    const order = req.query.order ?? 'DESC'

    const productData = await Product.findAll({
      include: [Category, { model: Tag, through: ProductTag }], 
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
            product.wishlist = true; // renders the buttons clicked if product is already in wishlist
          }
        }
        return product;
      })
      const cart = req.session.cart;
      if (cart) {
        productsLoggedIn = productsLoggedIn.map((product) => {
          for (i = 0; i < cart.length; i++) {
            if (product.id == cart[i]) {
              product.cart = true; // renders the buttons clicked if product is already in cart
            }
          }
          return product;
        })
        //console.log(products)
        //console.log(products[yourProductIndex].tags[tagIndex].tag_name)
      }
      res.status(200).render('homepage', { productsLoggedIn, logged_in: true })
    } else {
      res.status(200).render('homepage', { products }) // buttons do not render if not logged in
    }

  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
});

router.get('/products/:productid', async (req, res) => { // single product page get route
  try {
    const productData = await Product.findByPk(req.params.productid, {
      include: [Category, { model: Tag, through: ProductTag }], 
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
        if (wishlistArray.includes(product_id)) {
          product.wishlist = true; // renders the button clicked if product is already in wishlist
        }
      }

      const cartArray = req.session.cart;
      if (cartArray) {
        if (cartArray.includes(product_id)) {
          product.cart = true; // renders the button clicked if product is already in cart
        }
      }
      res.status(200).render('product', { product, logged_in: true })
    } else {
      res.status(200).render('product', { product }) // buttons do not render if not logged in
    }
  } catch (err) {
    res.status(400).json(err)
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to homepage when click on login button
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login'); // otherwise sends user to login page
});

router.get('/profile', withAuth, async (req, res) => { // get route for Profile page (wishlist)
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
        empty: true // will show empty wishlist message
      });
    } else {
      const cartArray = req.session.cart;
      if (cartArray) {
        user.products.forEach((product) => {
          for (i = 0; i < cartArray.length; i++) {
            if (product.id == cartArray[i]) {
              product.cart = true; // renders the buttons clicked if product is already in cart
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

router.get('/cart', async (req, res) => { // back end get route
  try {
    // console.log(req.session.user_id)
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

module.exports = router;