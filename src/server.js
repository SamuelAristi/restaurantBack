require('./DataBase/sync.js');

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 1337;

//routers
const restaurantrouter = require('./Routers/restauranRouter.js');
const productrouter = require('./Routers/productRouter.js');
const departmentrouter = require('./Routers/departmentRouter.js');
const cityrouter = require('./Routers/cityRouter.js')

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.listen(port, ()=> {
    console.log("The application is running on port: " + port);
})

//api
app.use('/api', restaurantrouter);
app.use('/api', productrouter);
app.use('/api', departmentrouter);
app.use('/api', cityrouter);


        
    