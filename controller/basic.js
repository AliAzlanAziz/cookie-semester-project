import passport from 'passport'

export default {
    getHome: (req, res, next) => {
        res.render('../views/basic/home')
    },

    getDashboard: (req, res, next) => {
        res.render('../views/basic/dashboard')
    },

    getPrivate: (req, res, next) => {
        res.render('../views/basic/private')
    },

    getSetCookie: (req, res, next) => {
        res.cookie("token", "computernetworking")
        return res.redirect('/dashboard')
    },

    getSetWrongCookie: (req, res, next) => {
        res.cookie("token", "IAMWRONGVALUE")
        return res.redirect('/dashboard')
    }, 

    getRemoveCookie: (req, res, next) => {
        res.cookie("token", "")
        return res.redirect('/dashboard')
    },

    getSignup: (req, res, next) => {
        res.render('../views/basic/signup')
    },

    postSignup: passport.authenticate('local-signup', {
        successRedirect : '/dashboard',
        failureRedirect : 'home',
        failureFlash : true
    }),

    getSignin: (req, res, next) => {
        res.render('../views/basic/signin')
    },

    postSignin: passport.authenticate('local-login', {
        successRedirect : '/dashboard',
        failureRedirect : 'home',
        failureFlash : true
    }),

    getLogout: function(req, res, next){ 
        req.logout()
        req.session.passport.user = null;
        res.redirect("/home")
    },
}