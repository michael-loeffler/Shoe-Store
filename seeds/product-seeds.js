
const { Product } = require('../models');

const productData = [
  {
    product_name: 'PUMA Womens Carina Sneaker',
    price: 49.99,
    stock: 5,
    category_id: 1,
    image_url: '/images/puma-womens-carina-sneaker.jpg',
  },
 {
    product_name: 'Adidas Mens XPLR Running Shoe',
    price: 59.99,
    stock: 5,
    category_id: 2,
    image_url: '/images/adidas-Originals-Mens-X_PLR-Running-Shoe.jpg',
  },
  {
    product_name: 'Reebok Club MEMT Sneaker',
    price: 42.25,
    stock: 5,
    category_id: 1,
    image_url: '/images/Reebok-Mens-Club-MEMT-Casual-Sneakers.jpg',
  },
  {
    product_name: 'New Balance Womens Fresh Foam Running Shoe',
    price: 55.99,
    stock: 5,
    category_id: 2,
    image_url: '/images/New-Balance-Womens-Fresh-Foam-Arishi-V4-Running-Shoe.jpg',
  },
  {
    product_name: 'Ever Boots Mens Work Boot',
    price: 59.99,
    stock: 5,
    category_id: 3,
    image_url: '/images/Work-Boots-For-Men.jpg',
  },
   {
    product_name: 'Lugz Womens Convoy Fur Fashion Boot',
    price: 55.99,
    stock: 5,
    category_id: 3,
    image_url: '/images/Lugz-Womens-Convoy-Fur-Fashion-Boot.jpg',
  },
   {
    product_name: 'Nike Mens Benassi Sandal',
    price: 28.41,
    stock: 5,
    category_id: 4,
    image_url: '/images/Nike-Mens-Benassi-Just-Do-It-Athletic-Sandal.jpg',
  },
   {
    product_name: 'Amazon Essentials Womens Casual Strappy Sandal',
    price: 18.90,
    stock: 5,
    category_id: 4,
    image_url: '/images/Womens-Casual-Strappy-Sandal.jpg',
  },
   {
    product_name: 'Reebok Mens Lifter PR Cross Trainer',
    price: 63.67,
    stock: 5,
    category_id: 5,
    image_url: '/images/Reebox-Mens-Lifter-Cross-Trainer.jpg',
  },
   {
    product_name: 'Reebok Womens Legacy Lifter Cross Trainer',
    price: 199.99,
    stock: 5,
    category_id: 5,
    image_url: '/images/Reebok-Womens-Legacy-Lifter-Cross-Trainer.jpg',
  },
   {
    product_name: 'New Balance Mens 877 V1 Walking Shoe',
    price: 73.28,
    stock: 5,
    category_id: 6,
    image_url: '/images/New-Balance-Mens-Walking-Shoe.jpg',
  },
   {
    product_name: 'Sketchers Womens Go Walk 5',
    price: 39.99,
    stock: 5,
    category_id: 6,
    image_url: '/images/Skechers-Womens-Go-Walk.jpg',
  },
   {
    product_name: 'Allegra K Womens High Heel Buckle Ankle',
    price: 41.99,
    stock: 5,
    category_id: 7,
    image_url: '/images/Allegra-K-Womens-High-Chunky-Heel.jpg',
  },
   {
    product_name: 'Crocs Mens Santa Cruz Loafers',
    price: 27.50,
    stock: 5,
    category_id: 8,
    image_url: '/images/Crocs-Mens-Santa-Cruz-Loafers.jpg',
  },
   {
    product_name: 'Hey Dude Womens Lace Up Loafers',
    price: 31.58,
    stock: 5,
    category_id: 8,
    image_url: '/images/Hey-Dude-Womens-Wendy-Lace-up-Loafers.jpg',
  },
   {
    product_name: 'Bruno Marc Mens Leather Lined Dress Oxford Shoes',
    price: 49.99,
    stock: 5,
    category_id: 9,
    image_url: '/images/Bruno-Marc-mens-dress-shoes.jpg',
  },
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;