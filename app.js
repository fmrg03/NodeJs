const express = require('express')
const hbs = require('hbs')

const app = express()
const PORT = 8080 || process.env.PORT

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static('public'))

app.get('/', (req, res) => res.render('home', {
    nombre: 'Froilan Ramos',
    titulo: 'Curso de NodeJS',
}))

app.get('/elements', (req, res) => res.render('elements', {
    nombre: 'Froilan Ramos',
    titulo: 'Curso de NodeJS',
}))

app.get('/generic', (req, res) => res.render('generic', {
    nombre: 'Froilan Ramos',
    titulo: 'Curso de NodeJS',
}))


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`))