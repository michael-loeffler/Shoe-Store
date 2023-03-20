const dropDown = document.getElementById('dropdown');
const wishlistAdd = document.getElementsByClassName('wishlistAdd');
const wishlistRemove = document.getElementsByClassName('wishlistRemove');
const cartAdd = document.getElementsByClassName('cartAdd');
const cartRemove = document.getElementsByClassName('cartRemove');

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
        button.classList.remove('unclicked', 'btn-primary');
        button.classList.add('clicked', 'btn-danger');
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
    const response = await fetch(`/api/users/wishlist/${product_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        button.classList.remove('clicked', 'btn-danger');
        button.classList.add('unclicked', 'btn-primary');
        button.textContent = "Add to Wishlist";
        button.removeEventListener('click', removeFromWishlist)
        button.addEventListener('click', addToWishlist);
        location.reload();
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
    if (response.ok) {
        button.classList.remove('unclicked', 'btn-primary');
        button.classList.add('clicked', 'btn-danger');
        button.textContent = "Remove from Cart";
        button.removeEventListener('click', addToCart)
        button.addEventListener('click', removeFromCart);
    } else {
        alert('Item is already in cart');
    }
};

const removeFromCart = async (e) => {
    const button = e.target;
    const product_id = button.getAttribute('id');
    const response = await fetch(`/api/users/cart/${product_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        button.classList.remove('clicked', 'btn-danger');
        button.classList.add('unclicked', 'btn-primary');
        button.textContent = "Add to Cart";
        button.removeEventListener('click', removeFromCart)
        button.addEventListener('click', addToCart);
        location.reload();
    } else {
        alert('Failed to delete cart item');
    }
};


for (var i = 0; i < wishlistAdd.length; i++) {
    wishlistAdd[i].addEventListener('click', addToWishlist);
}
for (var i = 0; i < cartAdd.length; i++) {
    cartAdd[i].addEventListener('click', addToCart);
}
for (var i = 0; i < wishlistRemove.length; i++) {
    wishlistRemove[i].addEventListener('click', removeFromWishlist);
}
for (var i = 0; i < cartRemove.length; i++) {
    cartRemove[i].addEventListener('click', removeFromCart);
}

