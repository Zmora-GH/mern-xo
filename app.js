const express = require('express');
const config = require('config');

const PORT =  process.env.PORT || config.get('Server.port');
const app = express();

app.use(express.json());

//app.use('/api/auth', require('./backend/routes/auth.router'));

app.listen(PORT, () => {
    console.log(`[>  Server online! Port: ${PORT} <]`);
})
