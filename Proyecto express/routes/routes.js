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


//mostrar solo un usuario por id
app.get('/users/:id', (request, response) => { 
    const id= request.params.id;

    pool.query('SELECT * FROM users WHERE id = ? ', id, (error, result) => { 
        if(error) throw error;

        response.send(result);
    });
});



}