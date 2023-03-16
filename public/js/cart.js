const purchase = document.getElementById('purchase')

//encrypted password token
const securityToken = "d8b56d1a-7d63-406b-8600-6b6f6c43a724"

purchase.addEventListener('click', (e)=> {
    //e.preventDefault()
    //i'm not sure if I want to prevent the default
    fetch('/cart')
    .then(function (response) {
        console.log(response)
        console.log("Purchased")
        // Email.send({
        //     SecureToken : securityToken,
        //     To : cart.email,
        //     From : "danielletorrise2023@u.northwestern.edu",
        //     Subject : "Your purchase from Shoe Store",
        //     Body : `Hello ${cart.name},
        //     Here is your ${cart.product_name} that you bought for ${product.price}
        //     <img src="${cart.image_url}"`
        // }).then(
        //   message => alert("Purchase successful!")
        // );
    }
    )

})

//will go in cart handlebars as script tag
//https://smtpjs.com/v3/smtp.js

//  https://mighty-brushlands-95444.herokuapp.com/