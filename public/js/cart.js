const { Product, User } = require('../models');

const product = (new Product(product_name, price, image_url))
const user = (new User(name, email))

const purchase = document.getElementById('purchase')

purchase.addEventListener('click', (e)=> {
    //e.preventDefault()
    //i'm not sure if I want to prevent the default
    console.log("purchased")
})

//will go in cart handlebars as script tag
//https://smtpjs.com/v3/smtp.js

//password
const secruityToken = "d8b56d1a-7d63-406b-8600-6b6f6c43a724"

//  https://mighty-brushlands-95444.herokuapp.com/

Email.send({
    SecureToken : secruityToken,
    To : user.email,
    From : "danielletorrise2023@u.northwestern.edu",
    Subject : "Your purchase from Shoe Store",
    Body : `Hello ${user.name},
    Here is your ${product.name} that you bought for ${product.price}
    <img src="${product.image_url}"`
}).then(
  message => alert("Purchase successful!")
);