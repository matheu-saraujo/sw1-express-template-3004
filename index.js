const express = require('express')

const app = express()

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (request,response) => {
    //response.send('Testando!!!');
    response.render('home');
});

app.listen(3000, () => {
    console.log('Servidor na porta3000');
});