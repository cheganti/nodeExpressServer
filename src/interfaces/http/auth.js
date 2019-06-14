const passport = require('passport')
const Strategy = require('passport-jwt');
const User = require('../../domain/user/user');
module.exports = () => {

    const strategy = new Strategy({ username: 'email' }, (email, password, done) => {
        User.findById({ email: email })
            .then((user) => {
                done(null, user)
            })
            .catch((error) => done(error, null))
    })

    passport.use(strategy)

    passport.serializeUser(function (user, done) {
        done(null, user)
    })

    passport.deserializeUser(function (user, done) {
        done(null, user)
    })

    return {
        initialize: () => {
            return passport.initialize()
        },
        authenticate: () => {
            return passport.authenticate('jwt')
        }
    }
}