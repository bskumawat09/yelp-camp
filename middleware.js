const isLoggedIn = (req, res, next) => {
    // console.log("Current user: ", req.user);
    if (!req.isAuthenticated()) {
        // store the url user should return after login
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be logged in');
        return res.redirect('/login');
    }
    next();
}

module.exports = isLoggedIn;