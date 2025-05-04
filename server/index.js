const { Socket } = require("dgram");
const express=require("express");
const app=express();
const http=require("http");
const {Server}=require("socket.io")
const server=http.createServer(app)
const io=new Server(server);
io.on("connection",socket=>{
    console.log("you socket id is",socket.id)
    socket.on("join",({roomid})=>{
        socket.join(roomid)
        console.log(`${socket.id} joined ${roomid}`)
    })

    socket.on('drawing',({roomid,data})=>{
        console.log("drawing",roomid)
        socket.to(roomid).emit("r-drawing",data)
    })

    socket.on('send-attendance',({message})=>{
        console.log(message);
        socket.broadcast.emit('r-attendance',{message});
    })
    
    socket.on("leave",({roomid})=>{
        socket.leave(roomid)
        console.log("leave")
    })
  
})
server.listen(5000,()=>{
    console.log("server is listing")
})