import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mi Aplicacion de NodeJS',
            version: '1.0.0',
            description: 'Documentacion para mostrar mis Endpoints',
            termsOfService: 'https://mi-dominio.com/terminos',
            contact: {
                name: 'Equoipo de desarrollo Backend',
                url: 'https://mi-dominio.com/terminos',
                email: 'contacto@gmail.com',
            },
            license: {
                name: 'MIT',
                url: 'httpss://opensource.org/licences/MIT',
            },
        },
        servers: [
            {
                url: 'http://localhost:8080',
                description: 'Servidor Local',
            },
            {
                url: 'https://mi-dominio.com',
                description: 'Serrvidor de produccion',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

const swaggerSpect = swaggerJSDoc(options);

export const setupSwagger = (app) => {
    app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpect));
}