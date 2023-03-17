const router = require('express').Router();
const { User, UserProduct, Product, Category, Tag, ProductTag } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
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

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
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

router.post('/wishlist', withAuth, async (req, res) => {
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

router.delete('/wishlist/:id', withAuth, async (req, res) => {
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

router.post('/cart', withAuth, async (req, res) => {
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
    const cartData = req.session.cart;
    
    const productData = await Product.findAll({
        where: {
            id: cartData 
        },
      include: [Category, { model: Tag, through: ProductTag }], //will bring in all categories via index.js file 
    })
    const products = productData.map((product) => product.get({ plain: true }));

    
    res.render('cart', { products })
  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
})

router.get('/purchase', withAuth, async (req, res) => {
  try {
    console.log("LOOK HERE: " + req.session.cart)
    if (req.session.cart) {
      const cartData = req.session.cart;

      const productData = await Product.findAll({
        where: {
          id: cartData 
      },
        include: [Category, { model: Tag, through: ProductTag }], //will bring in all categories via index.js file 
      })
      const products = productData.map((product) => product.get({ plain: true }));


      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] }
      }) 
      const user = userData.get({ plain: true })
      console.log("CART HERE: " + JSON.stringify(products))
      const nestedObject = {products: products, user: user}
      res.json(nestedObject); 
    } 
  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
})

router.delete('/cart/:id', withAuth, async (req, res) => {
  try {

    const cart = req.session.cart
    const product_id = req.params.id;
    const newCart = cart.filter((product) => product != product_id);
    req.session.cart = newCart;

    res.status(200).json(newCart);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
module.exports = router;
