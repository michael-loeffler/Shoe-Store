// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const User = require('./User');
const UserProduct = require('./UserProduct');


// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  foreignKey: 'product_id', 
  through: ProductTag
})

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  foreignKey: 'tag_id', //originally product_id
  through: ProductTag
})

User.belongsToMany(Product, {
  foreignKey: 'user_id', 
  through: UserProduct
})

Product.belongsToMany(User, {
  foreignKey: 'product_id', 
  through: UserProduct
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
  User,
  UserProduct
};
