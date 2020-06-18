const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const app = express()


app.use(express.static(path.join(__dirname, '../public')))


const viewsPath = path.join(__dirname, '../views')
app.set('views', viewsPath)

const partialPath = path.join(__dirname, '../partials')
hbs.registerPartials(partialPath)

//set templeting engine to hbs
app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'GeoffN'
    })
})

app.get('/underconstruction', (req, res) => {
    res.render('underconstruction')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/addfoodbank', (req, res) => {
    res.render('addfoodbank')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})