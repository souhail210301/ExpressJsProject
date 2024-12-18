var Chat = require('../model/chatModel')
var socketIo = require('socket.io')
 
 
function socketIO(server) {
    const io = socketIo(server);
    io.on("connection",(socket)=>{
      console.log("user connected with socket id"+socket.id); 
      socket.broadcast.emit('msg','A new user is connected')
      socket.on('send-msg',async (data)=>{
        console.log(data);
        io.emit("msg",data)
        await new Chat({
          msg: data.msg,
          dateCreation: new Date()
          }).save()
      })
      socket.on('display-msg',async()=>{
         msgs = await Chat.find()
         console.log(msgs);
         io.emit('list-msg',msgs)
      })
      //io.emit("msg","msg from server")

    })
 return io;
}

function chatView(req, res, next) {
  res.render('chats')
}

async function list(req,res,next){
    //res.end('Chat List')
    await Chat.find()
              .then((data, err)=>{
                if(err){
                    res.status(503).json(err)
                }else{
                    res.status(200).json(data)
                }
              })
}

const create =async (req,res,next)=>{
    const { msg } = req.body
    await new Chat({
        msg: msg,
        dateCreation: new Date()
        }).save()
      .then((err, data)=>{
        if(err){
            console.log("error create Chat : "+ err);
        }
        console.log(data);
      })
res.json('Chat added ! msg : '+ msg + ' dateCreation : '+  new Date())
}
async function updateChat(req,res,next){
  Chat.findByIdAndUpdate(req.params.id,req.body)
  .then((data,err)=>{
    if(err){res.status(500).json(err)}
    res.status(200).json(data)
  })
}
  const deleteChat =async(req,res,next)=>{
    try{
    const id =req.params.id
    const data =await Chat.findByIdAndDelete(id,req.body)
    if(!data){
      res.status(404).json("not found ... !")
    }
    
    res.status(203).json(data)
    }catch(err){
      res.status(500).json("error : "+err)
    }
  }

module.exports = { socketIO, chatView, create, list,updateChat, deleteChat }