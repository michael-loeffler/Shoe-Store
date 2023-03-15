//for back-end purposes

const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const tagRoutes = require('./tagRoutes');
const userRoutes = require('./userRoutes');
//import sequelize
const sequelize = require('../../config/connection.js');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/users', userRoutes);

module.exports = router;
