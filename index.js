const express = require('express');
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const flash = require('connect-flash');

const testR = require('./routes/test')



dotenv.config() 

const app = express()

const hbs = exphbs.create({
    defaultLayout:'main',
    extname: 'hbs',
})


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(jsonParser = bodyParser.json())

app.use('/', testR)



const PORT = process.env.DATABASE_PORT || 9000

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
}) 






