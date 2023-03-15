const { Product, User } = require('../../models');

const purchase = document.getElementById('purchase')

purchase.addEventListener('click', (e)=> {
    //e.preventDefault()
    //i'm not sure if I want to prevent the default
    fetch('/cart')
    .then(function (response) {
        console.log(response)
        console.log("Purchased")
        // Email.send({
        //     SecureToken : securityToken,
        //     To : user.email,
        //     From : "danielletorrise2023@u.northwestern.edu",
        //     Subject : "Your purchase from Shoe Store",
        //     Body : `Hello ${cart.name},
        //     Here is your ${product.name} that you bought for ${product.price}
        //     <img src="${product.image_url}"`
        // }).then(
        //   message => alert("Purchase successful!")
        // );
    }
    )
  
})

//will go in cart handlebars as script tag
//https://smtpjs.com/v3/smtp.js

//password
const securityToken = "d8b56d1a-7d63-406b-8600-6b6f6c43a724"

//  https://mighty-brushlands-95444.herokuapp.com/

