const dropDown = document.getElementById('dropdown');
const wishlist = document.getElementsByClassName('wishlist')
const unclicked = document.getElementsByClassName('unclicked');
const clicked = document.getElementsByClassName('clicked');
const cartBtn = document.getElementsByClassName('cart');

//sortby = [what's being sorted]
//order = asc or desc
// dropDown.onchange = function () {
//     // grab the search query, parse it into a `URLSearchParams` set
//     const queryData = new URLSearchParam(window.location.search.slice(1))

//     // manipulate the parameters as desired
//     queryData.set("sortBy", dropDown.value) //price high to low
//     //queryData.set("order", dropDown.value)

//     // assemble the new URL using the current URL as the base
//     const newUrl = new URL(window.location.href)
//     newUrl.search = queryData

//     // redirect to the new URL
//     window.location.href = newUrl
// }

const addToWishlist = async (e) => {
    const button = e.target;
    const product_id = button.getAttribute('id');

    const response = await fetch('/api/users/wishlist', {
        method: 'POST',
        body: JSON.stringify({ product_id }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        button.classList.remove('unclicked')
        button.classList.add('clicked');
        button.textContent = "Remove from Wishlist";
        button.removeEventListener('click', addToWishlist)
        button.addEventListener('click', removeFromWishlist);
    } else {
        alert('Item is already on wishlist');
    }
};

const removeFromWishlist = async (e) => {
    const button = e.target;
    const product_id = button.getAttribute('id');
    console.log(product_id);
    const response = await fetch(`/api/users/wishlist/${product_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        button.classList.remove('clicked')
        button.classList.add('unclicked');
        button.textContent = "Add to Wishlist";
        button.removeEventListener('click', removeFromWishlist)
        button.addEventListener('click', addToWishlist);
    } else {
        alert('Failed to delete wishlist item');
    }
};

const addToCart = async (e) => {
    const button = e.target;
    const product_id = button.getAttribute('id');

    const response = await fetch('/api/users/cart', {
        method: 'POST',
        body: JSON.stringify({ product_id }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('posted!');
    if (response.ok) {
        // button.classList.remove('unclicked')
        button.classList.add('clicked');
        // button.textContent = "Remove from Wishlist";
        // button.removeEventListener('click', addToWishlist)
        // button.addEventListener('click', removeFromWishlist);
    } else {
        alert('Item is already in cart');
    }
};




for (var i = 0; i < unclicked.length; i++) {
    unclicked[i].addEventListener('click', addToWishlist);
}
for (var i = 0; i < cartBtn.length; i++) {
    cartBtn[i].addEventListener('click', addToCart);
}
for (var i = 0; i < clicked.length; i++) {
    clicked[i].addEventListener('click', removeFromWishlist);
}



// unclicked.addEventListener('click', addToWishlist);
// clicked.addEventListener('click', removeFromWishlist);
