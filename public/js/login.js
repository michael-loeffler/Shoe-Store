const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const responseJSON = await response.json();
      const data = await responseJSON;
      
      if (data.redirect_url === '/cart') {
        data.redirect_url = '/api/users/cart'
      } else if (!data.redirect_url) {
        data.redirect_url ='/'
      }
      if (response.ok) {
        // If successful, redirect the browser to the page the user was going to
        document.location.replace(data.redirect_url);
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const responseJSON = await response.json();
      const data = await responseJSON;
      
      if (data.redirect_url === '/cart') {
        data.redirect_url = '/api/users/cart'
      } else if (!data.redirect_url) {
        data.redirect_url ='/'
      }  
      if (response.ok) {
        // If successful, redirect the browser to the page the user was going to
        document.location.replace(data.redirect_url);
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  