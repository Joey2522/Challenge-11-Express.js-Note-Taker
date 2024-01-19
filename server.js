const express = require('express');
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

//Dynamically assigns the port number based on the environment. Defaults to 3001
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.urlencoded({ extend: false })); //This middleware is responsible for parsing incoming data from HTML forms when it is submitted to the server using the application/x-www-form-urlencoded content type. The parsed data is then available in the req.body object for further processing in the application's routes or handlers.
app.use(express.json()); //Configuring the middleware to parse incoming requests with JSON payloads.
app.use(express.static('public')); //Will serve static files from the "public" directory.
app.use(htmlRoutes); //Incorporating the functionality defined in htmlRoutes.
app.use(apiRoutes); //Incorporating the functionality defined in apiRoutes.

app.listen(PORT, () => {
    console.log(`Server runnning on http://localhost:${PORT}`);
});