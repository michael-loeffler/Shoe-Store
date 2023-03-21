const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    req.session.redirect_url = req.url; // but first, capture their intended destination
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
