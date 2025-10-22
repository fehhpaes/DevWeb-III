const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API Fatec',
    description: 'Documentação da API usando Swagger',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'x-api-key',
      description: process.env.API_KEY,
    },
  },
  security: [{
    apiKeyAuth: []
  }],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js', './src/routes/userRoute.js', './src/routes/projectRoute.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
