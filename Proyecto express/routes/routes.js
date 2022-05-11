const pool=require('../data/config');

const router =app => { 

    app.get('/', (request, response) => { 
            response.send( { 
                message: 'Bienvenido a nodejs Express REST API'
            });
    });








}