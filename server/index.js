require('dotenv').config();
const express = require('express')
const session = require('express-session')
const app = express()
const {SESSION_SECRET, SERVER_PORT} = process.env
const middleware = require('./middlewares/checkForSession')
const swagCtrl = require('./controllers/swagController')
const authCtrl = require('./controllers/authController')
const cartCtrl = require('./controllers/cartController')
const searchCtrl = require('./controllers/searchController')

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
   secret: SESSION_SECRET
}))
app.use(middleware.user)

app.get('/api/swag', swagCtrl.read)
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.post('/api/signout', authCtrl.signout)
app.get('/api/user' ,authCtrl.getUser)
app.post('/api/cart/checkout', cartCtrl.add )
app.post('/api/cart/:id', cartCtrl.add)
app.delete('/api/cart/:id', cartCtrl.delete)
app.get('/api/search', searchCtrl.search)

app.listen(SERVER_PORT, () => console.log(`I AM ${SERVER_PORT} YEARS YOUNG`))