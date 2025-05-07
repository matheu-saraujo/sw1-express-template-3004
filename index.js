const express = require('express')

const app = express()

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (request,response) => {
    //response.send('Testando!!!');
    response.render('home', {nome : "Matheus"});
});


app.get('/tabuada', (request, response) => {
    let resultado = [];
    for(let cont = 1; cont <=10; cont++){
        resultado.push(cont * 5)
    }
    response.render('tabuada', {valores : resultado});
});

app.listen(3000, () => {
    console.log('Servidor na porta3000');
});