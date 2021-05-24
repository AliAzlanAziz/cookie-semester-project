function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }else{
        req.flash('error', 'Log in to continue')
        return res.redirect('/signin')
    }
}

function isLoggedOut(req, res, next){
    if(!req.isAuthenticated()){
        return next()
    }else{
        req.flash('error', 'Log out to continue')
        return res.redirect('/dashboard')
    }
}

function isCookieSet(req, res, next){
    if(!req.cookies.token){
        req.flash('error', 'Cookie not set!')
        return res.redirect('/dashboard')
    } else if(req.cookies.token!='computernetworking') {
        req.flash('error', 'Wrong Cookie Value!')
        return res.redirect('/dashboard')    
    }else{
        return next()
    }
}

export { isLoggedIn, isLoggedOut, isCookieSet }