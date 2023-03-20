
// require('dotenv').config()
const purchase = document.getElementById('purchase')
// const securityToken = process.env.securityToken

purchase.addEventListener('click', (e)=> {
    //e.preventDefault()
    //i'm not sure if I want to prevent the default
    fetch('/api/users/purchase').then((response) => response.json())
    .then((data) => {
        console.log("DATA HERE: " + data)
        //console.log(data.products[0].product_name)
        //console.log(data.user.email)
        //dynamically render body
        console.log("Purchased")
        //for when I set up the smtpjs server
        // const cartDiv = document.createElement('div')
        // for (i = 0; i < data.products.length; i++) {
        //   const pTagOne = document.createElement('p')
        //   const pTagTwo = document.createElement('p')
        //   const imgTag = document.createElement('img')
          
        //   pTagOne.innerHTML = data.products[i].product_name
        //   pTagTwo.innerHTML = data.products[i].price
        //   imgTag.src = data.products[i].img_url
          
        //   cartDiv.appendChild(pTagOne)
        //   cartDiv.appendChild(pTagTwo)
        //   cartDiv.appendChild(imgTag)
        //   cartDiv.appendChild(document.createElement('br'))
        // }
        // const form = document.createElement('form')
        // const username = document.createElement('input')
        // username.setAttribute('type', 'text')
        // username.value = data.user.name
        // form.appendChild(username)
        const username = document.createElement('p')
        username.innerHTML = data.user.name
        params = {
            user: data.user.name,
            email: data.user.email,
        }

        emailjs.send('service_dztftnr', 'demo_form', params)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });

        window.alert("Purchase successful!")
        //location.reload()
    }
    )

})

