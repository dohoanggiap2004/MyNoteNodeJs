const homeRouter = require('./home')
const loginRouter = require('./login')
const signUpRouter = require('./sign-up')
const notesRouter = require('./notes')

function route(app) {

    app.use('/', homeRouter)
    app.use('/', loginRouter)
    app.use('/', signUpRouter)
    app.use('/', notesRouter)
}

module.exports = route
