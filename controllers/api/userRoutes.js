const router = require('express').Router();
const { User, UserProduct, Product } = require('../../models');
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

// router.get('/', async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(8, {
//       attributes: { exclude: ['password'] },
//       include: { model: Product, through: UserProduct },
//     });

//     const user = userData.get({ plain: true });

//     res.status(200).json(userData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

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

module.exports = router;
