const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/users', userRoutes);
// router.use('/products', productRoutes);
// router.use('/categories', categoryRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;
