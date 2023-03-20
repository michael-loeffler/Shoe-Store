

const purchase = document.getElementById('purchase')


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
        window.alert("Congratulations " + data.user.name + ". Your purchase was successful!")
        location.reload()
    }
    )

})

