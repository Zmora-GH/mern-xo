const express = require('express');
const config = require('config');
const Sequelize = require('sequelize');
const cors = require('cors')

const PORT =  process.env.PORT || config.get('Server.port');
const app = express();

const models = require("./server/models");
models.sequelize.sync().then(function() {
    console.log('[>   Database is alive   <]')
}).catch(function(err) {
    console.log(err, '[>   Database is not available   <]')
});

app.use(cors())
app.use(express.json());

app.use('/api/auth', require('./server/routes/auth.router'));
app.use('/api/main', require('./server/routes/main.router'));

app.listen(PORT, () => {
    console.log(`[>  Server online! Port: ${PORT} <]`);
})
