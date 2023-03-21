const router = require('express').Router();
const { User, UserProduct, Product, Category, Tag, ProductTag } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => { // new user sign-up route
  try {
    const userData = await User.create(req.body);

    const redirect_url = req.session.redirect_url;

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.redirect_url = redirect_url; // stores user's intended destination before login page

      res.status(200).json({ user: userData, redirect_url: redirect_url });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({message: 'Be sure to enter a valid email and a password of 8 or more characters'});
  }
});

router.post('/login', async (req, res) => { // authentication route
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const redirect_url = req.session.redirect_url;

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.redirect_url = redirect_url; // stores user's intended destination before login page

      res.json({ user: userData, message: 'You are now logged in!', redirect_url: redirect_url });
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => { //logout route, destroys session
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/wishlist', withAuth, async (req, res) => { // add to wishlist route
  try {

    const userId = req.session.user_id
    const productId = req.body.product_id;

    const wishlistData = await UserProduct.create({
      user_id: userId,
      product_id: productId
    });

    res.status(200).json(wishlistData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/wishlist/:id', withAuth, async (req, res) => { // remove from wishlist route
  try {

    const userId = req.session.user_id
    const wishlistData = await UserProduct.destroy({
      where: {
        user_id: userId,
        product_id: req.params.id
      }
    });

    if (!wishlistData) {
      res.status(404).json({ message: 'No wishlist item found with this id!' });
      return;
    }

    res.status(200).json(wishlistData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/cart', withAuth, async (req, res) => { // add to cart route
  try {
    req.session.save(() => {
      if (req.session.cart) {
        req.session.cart.push(JSON.parse(req.body.product_id));
      } else {
        let emptyCart = [];
        emptyCart.push(JSON.parse(req.body.product_id))
        req.session.cart = emptyCart
      }
      res.status(200).json({ message: 'Added to cart!' });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/cart', withAuth, async (req, res) => {
  try {
    if (typeof req.session.cart !== 'undefined') {
      if (req.session.cart.length == 0) {
        res.render('cart', { empty: true, logged_in: true }) // will render empty cart message if cart exists but has been emptied (empty array)
        return;
      }
      const cartData = req.session.cart;

      const productData = await Product.findAll({
        where: {
          id: cartData
        },
        include: [Category, { model: Tag, through: ProductTag }],
      })
      const products = productData.map((product) => product.get({ plain: true }));
        
      const wishlistData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: { model: Product, through: UserProduct },
      });
      const wishlistPlain = wishlistData.get({ plain: true });
      const wishlistArray = wishlistPlain.products.map((product) => product.id);
      if (wishlistArray.length) {
        products.forEach((product) => {
        if (wishlistArray.includes(product.id)) {
          product.wishlist = true; // renders the buttons clicked if product is already in wishlist
        }
      }) 
      }
      res.render('cart', { products, logged_in: true  })
    } else {
      res.render('cart', { empty: true, logged_in: true  })
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
})

router.delete('/cart/:id', withAuth, async (req, res) => { // remove from cart route
  try {

    const cart = req.session.cart
    const product_id = req.params.id;
    const newCart = cart.filter((product) => product != product_id); // removes product_id of clicked item from cart array
    req.session.cart = newCart;

    res.status(200).json(newCart);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/purchase', withAuth, async (req, res) => { // get route for purchase functionality
  try {
    console.log("LOOK HERE: " + req.session.cart)
    if (req.session.cart) {
      const cartData = req.session.cart;

      req.session.cart.length = 0

      const productData = await Product.findAll({
        where: {
          id: cartData
        },
        include: [Category, { model: Tag, through: ProductTag }], 
      })
      const products = productData.map((product) => product.get({ plain: true }));


      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] }
      })
      const user = userData.get({ plain: true })
      console.log("CART HERE: " + JSON.stringify(products))
      const nestedObject = { products: products, user: user }
      res.json(nestedObject);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
})

router.get('/', async (req, res) => { // back end user route
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      include: { model: Product, through: UserProduct },
    });

    const user = userData.map((user) => user.get({ plain: true }));

    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
