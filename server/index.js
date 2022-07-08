require('dotenv').config()
const express = require('express')
const sequelize = require('./db')

const mongoose = require("mongoose");
//const models = require('./models/index')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const http = require("http");

const app = express()

const server = http.createServer(app);

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

const PORT = process.env.PORT || 5000

console.log(stripeSecretKey, stripePublicKey)

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
// Обработка ошибок, последний Middleware
app.use(errorHandler)


const start = async () => {
    try {
//        await sequelize.authenticate()
//        await sequelize.sync()

         // mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function(err) {
         //     if (err) return console.log(err);

            server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
         // });


    } catch (e) {
        console.log(e)
    }
}



start()





