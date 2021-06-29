'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');
const notFoundHnadler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1/clothes',clothesRouter);
app.use('/api/v1/food',foodRouter);


app.get('/', (req, res) => {
    res.send('working');
});

app.use('*',notFoundHnadler);
app.use(errorHandler);

function start(port){
    app.listen(port,()=>{
        console.log(`listening on PORT ${port}`);
    })
}
module.exports={
    app,start
}