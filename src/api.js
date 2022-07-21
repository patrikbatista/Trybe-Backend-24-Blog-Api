const express = require('express');
require('express-async-errors');

const handleError = require('./middlewares/handlerError');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', routes.login);
app.use('/user', routes.user);
app.use('/categories', routes.category);
app.use(handleError);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
