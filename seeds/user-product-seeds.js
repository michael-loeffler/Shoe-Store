const { UserProduct } = require('../models');


const userProductData = [
  {
    user_id: 1,
    product_id: 1
  },
  {
    user_id: 1,
    product_id: 2
  },
  {
    user_id: 1,
    product_id: 3
  },
  {
    user_id: 1,
    product_id: 4
  },
  {
    user_id: 1,
    product_id: 5
  },
  {
    user_id: 2,
    product_id: 6
  },
  {
    user_id: 2,
    product_id: 7
  },
  {
    user_id: 2,
    product_id: 8
  },
  {
    user_id: 2,
    product_id: 9
  },
  {
    user_id: 2,
    product_id: 10
  },
  {
    user_id: 3,
    product_id: 11
  },
  {
    user_id: 3,
    product_id: 12
  },
  {
    user_id: 3,
    product_id: 13
  },
  {
    user_id: 3,
    product_id: 14
  },
  {
    user_id: 3,
    product_id: 15
  },
]

const seedUserProducts = () => UserProduct.bulkCreate(userProductData);

module.exports = seedUserProducts;