const pool=require('../data/config');

const router =app => { 

    app.get('/', (request, response) => { 
            response.send( { 
                message: 'Bienvenido a nodejs Express REST API'
            });
    });
//mostrar todos los usuarios
app.get('/users',(request, response) => { 
    pool.query('SELECT * FROM users', (error,result) => { 

        response.send(result);
    });
});




}