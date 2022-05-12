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

//agregar un nuevo usuario
app.post('/users', (request, response) => { 
   

    pool.query('INSERT INTO users SET ? ', request.body,(error, result) => { 
        if(error) throw error;

        response.status(201).send(`User added with ID: ${result,insertId}`);
    });
});

//actualizar un usuario existente
app.put('/users/:id', (request, response) => { 
    const id= request.params.id;

    pool.query('UPDATE users SET ? WHERE id = ? ', [request.body, id], id, (error, result) => { 
        if(error) throw error;

        response.send('User updated successfully');
    });
});






}