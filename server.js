var express = require('express')
var app= express()
var userRouter = require('./controller/userController')
var chatRouter = require('./controller/chatController')
var osRouter = require('./controller/osController')
var productRouter = require('./controller/productController')
var hotelRouter = require('./controller/hotelController')
var { socketIO } = require('./service/chatService')
var mongoose = require('mongoose')
var path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/user-db')
        .then(()=>{
            console.log("DB Connected !");
        })
        .catch((error)=>{
            console.log("error : "+ error);
        })
app.use('/users', userRouter)
app.use('/os', osRouter)
app.use('/chats', chatRouter)
app.use('/product', productRouter)
app.use('/hotels', hotelRouter)

var http = require('http')
var server = http.createServer(app)
const io = socketIO(server);
server.listen(3000,()=>{
    console.log('server started !');
})