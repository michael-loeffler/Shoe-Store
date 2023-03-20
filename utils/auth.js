const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    req.session.redirect_url = req.url;
    console.log(req.session.redirect_url);
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
