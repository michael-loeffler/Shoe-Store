
const { Product } = require('../models');

const productData = [
  {
    product_name: 'PUMA Womens Carina Sneaker',
    price: 49.99,
    stock: 5,
    category_id: 1,
    image_url: 'https://www.amazon.com/PUMA-Womens-Carina-Sneaker-Silver/dp/B07HJRV1YQ/ref=sr_1_1?keywords=Carina+White&qid=1678410346&refinements=p_89%3APUMA&sr=8-1',
  },
 {
    product_name: 'Adidas Mens XPLR Running Shoe',
    price: 59.99,
    stock: 5,
    category_id: 2,
    image_url: 'https://www.amazon.com/adidas-Originals-X_PLR-Running-White/dp/B072BX1H4G/ref=sr_1_2?crid=2F9BRDETWBAVK&keywords=xplr+running+shoe&qid=1678410738&sprefix=xplr+running+shoe%2Caps%2C102&sr=8-2',
  },
  {
    product_name: 'Reebok Club MEMT Sneaker',
    price: 42.25,
    stock: 5,
    category_id: 1,
    image_url: 'https://www.amazon.com/Reebok-Mens-Sneaker-White-Collegiate/dp/B07W1KMVX4/ref=sr_1_5?crid=3VPPSSBJOWPRF&keywords=mens+sneaker&qid=1678410580&sprefix=mens+sneaker%2Caps%2C117&sr=8-5',
  },
  {
    product_name: 'New Balance Womens Fresh Foam Running Shoe',
    price: 55.99,
    stock: 5,
    category_id: 2,
    image_url: 'https://www.amazon.com/New-Balance-Womens-Running-Metallic/dp/B09H3P6ZFS/ref=sr_1_4?crid=3NI3DMCJ33H37&keywords=womens+running+shoe&qid=1678410756&sprefix=womens+running+shoe%2Caps%2C106&sr=8-4',
  },
  {
    product_name: 'Ever Boots Mens Work Boot',
    price: 59.99,
    stock: 5,
    category_id: 3,
    image_url: 'https://www.amazon.com/EVER-BOOTS-Insulated-Construction-Darkbrown/dp/B01AVBLZS8/ref=sxin_19_ac_d_hl?ac_md=1-0-T3ZlcmFsbCBDaG9pY2U%3D-ac_d_hl_hl_ac&content-id=amzn1.sym.ea5a3043-3172-4e81-bcc4-eb7524db4f7c%3Aamzn1.sym.ea5a3043-3172-4e81-bcc4-eb7524db4f7c&crid=24CLO9HT2PYUB&cv_ct_cx=mens+boot&keywords=mens+boot&pd_rd_i=B01AVBLZS8&pd_rd_r=8783956b-5e4b-4947-a287-f93247ede540&pd_rd_w=EPCJN&pd_rd_wg=5pzXW&pf_rd_p=ea5a3043-3172-4e81-bcc4-eb7524db4f7c&pf_rd_r=8457J5AADWRN0GBA8GFX&qid=1678411429&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mens+boot%2Caps%2C133&sr=1-1-25fd44b4-555a-4528-b40c-891e95133f20',
  },
   {
    product_name: 'Lugz Womens Convoy Fur Fashion Boot',
    price: 55.99,
    stock: 5,
    category_id: 3,
    image_url: 'https://www.amazon.com/Lugz-Womens-Convoy-Classic-Fashion/dp/B08B665CGX/ref=sr_1_3?crid=3QN36FHWK31ZQ&keywords=womens+boot&qid=1678411467&sprefix=womens+boot%2Caps%2C104&sr=8-3',
  },
   {
    product_name: 'Nike Mens Benassi Sandal',
    price: 28.41,
    stock: 5,
    category_id: 4,
    image_url: 'https://www.amazon.com/NIKE-Benassi-Black-White-Blanc/dp/B00B05EC2Q/ref=sr_1_10?crid=3AXYTA954J7PD&keywords=mens+sandal&qid=1678411558&sprefix=mens+sandal%2Caps%2C110&sr=8-10',
  },
   {
    product_name: 'Amazon Essentials Womens Casual Strappy Sandal',
    price: 18.90,
    stock: 5,
    category_id: 4,
    image_url: 'https://www.amazon.com/Amazon-Essentials-Womens-Strappy-Natural/dp/B07FS9TG1G/ref=sr_1_2?crid=QKWVA5AOX693&keywords=womens+sandal&qid=1678411613&sprefix=womens+sandal%2Caps%2C110&sr=8-2',
  },
   {
    product_name: 'Reebok Mens Lifter PR Cross Trainer',
    price: 63.67,
    stock: 5,
    category_id: 5,
    image_url: 'https://www.amazon.com/Reebok-womens-Legacy-Chartreuse-Horizon/dp/B0829SMS7J/ref=sr_1_5?crid=1RFRQDR7FKU5X&keywords=womens+lifting+shoe&qid=1678411744&sprefix=womens+lifting+shoe%2Caps%2C114&sr=8-5',
  },
   {
    product_name: 'Reebok Womens Legacy Lifter Cross Trainer',
    price: 199.99,
    stock: 5,
    category_id: 5,
    image_url: 'https://www.amazon.com/New-Balance-Mens-MW877-Walking/dp/B00F5VGZIA/ref=sr_1_5?crid=8FKQXKPR3O26&keywords=mens+walking+shoe&qid=1678411792&sprefix=mens+walking+hsoe%2Caps%2C108&sr=8-5',
  },
   {
    product_name: 'New Balance Mens 877 V1 Walking Shoe',
    price: 73.28,
    stock: 5,
    category_id: 6,
    image_url: 'https://www.amazon.com/New-Balance-Mens-MW877-Walking/dp/B00F5VGZIA/ref=sr_1_5?crid=8FKQXKPR3O26&keywords=mens+walking+shoe&qid=1678411792&sprefix=mens+walking+hsoe%2Caps%2C108&sr=8-5',
  },
   {
    product_name: 'Sketchers Womens Go Walk 5',
    price: 39.99,
    stock: 5,
    category_id: 6,
    image_url: 'https://www.amazon.com/Skechers-Womens-Walk-5-15901-Black/dp/B07N14FN1W/ref=sr_1_4?crid=5EX923KNKQG3&keywords=womens+walking+shoe&qid=1678411842&sprefix=womens+walking+shoe%2Caps%2C114&sr=8-4',
  },
   {
    product_name: 'Allegra K Womens High Heel Buckle Ankle',
    price: 41.99,
    stock: 5,
    category_id: 7,
    image_url: 'https://www.amazon.com/Allegra-Womens-Chunky-Sandals-Burgundy/dp/B01F3TTVLQ/ref=sr_1_2?crid=I6NEEJ2Z52F&keywords=high+heel&qid=1678411902&sprefix=high+heel%2Caps%2C108&sr=8-2',
  },
   {
    product_name: 'Crocs Mens Santa Cruz Loafers',
    price: 27.50,
    stock: 5,
    category_id: 8,
    image_url: 'https://www.amazon.com/Crocs-Mens-Santa-Loafer-Khaki/dp/B0017U3R1Q/ref=sr_1_4?crid=24RJXLC0N6F1E&keywords=mens+loafers&qid=1678411955&sprefix=mens+loafers%2Caps%2C111&sr=8-4',
  },
   {
    product_name: 'Hey Dude Womens Lace Up Loafers',
    price: 31.58,
    stock: 5,
    category_id: 8,
    image_url: 'https://www.amazon.com/Hey-Dude-Womens-Wendy-Chambray/dp/B07HHDSGVP/ref=sr_1_16?crid=3GRXOEBG1YUOV&keywords=womens+loafers&qid=1678412012&sprefix=womens+loafers%2Caps%2C105&sr=8-16',
  },
   {
    product_name: 'Bruno Marc Mens Leather Lined Dress Oxford Shoes',
    price: 49.99,
    stock: 5,
    category_id: 9,
    image_url: 'https://www.amazon.com/Bruno-Prince-16-Brown-Leather-Oxfords/dp/B01KAU1BUC/ref=sr_1_3?crid=1SCZ6ZUCTCIT1&keywords=mens+dress+shoe&qid=1678412078&sprefix=mens+dress+shoe%2Caps%2C114&sr=8-3',
  },
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;