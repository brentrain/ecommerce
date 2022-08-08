require('dotenv').config();

const express           = require('express');
const mongoose          = require('mongoose');

const itemsRoutes       = require('./routes/items');

//express app
const app               = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//route handler
app.use('/api/items', itemsRoutes);

//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB & Listening on port...", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })

