const express = require('express');
const app = express();
const morgan = require('morgan');

//setting
app.set('port', process.env.PORT || 3000);

//middleware
//app.use(morgan('dev'));
app.use(morgan('combined'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require ('./routes/index.js'));
app.use('/api/movies',require ('./routes/movies'));
app.use('/api/users',require ('./routes/users'));

// starting to server
app.listen(3000, () => {
    console.log( ' Servicio en puerto:' + app.get('port'));
});