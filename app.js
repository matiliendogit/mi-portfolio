const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log('Server online on port 3000');
});

// --------- Establecemos el motor ejs para la propiedad motor de vistas mediante set del entry point ------//

app.set('view engine', 'ejs');



//------Accedo a recursos estaticos (que no se renderizan: img, css, etc) -----//

app.use(express.static('public'));


let routeHome = require('./routes/mainRoute');

app.use('/', routeHome);