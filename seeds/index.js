// seeding file
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const seedUserProducts = require('./user-product-seeds');
const seedUsers = require('./user-seeds');
const sequelize = require('../config/connection');
const seedAll = async () => {
  await sequelize.sync({ force: true }); //will delete old ones
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedUserProducts();
  console.log('\n----- USER PRODUCTS SEEDED -----\n');
  process.exit(0);
};
seedAll();