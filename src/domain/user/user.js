const t = require('tcomb')
const User = t.struct({
    name: t.String,
    email: t.String,
    password: t.String,
})
module.exports = {
    User
}