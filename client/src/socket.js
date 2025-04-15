import {io} from "socket.io-client"
export  const  initsocket=async()=>{
    const option={
        "froce new connection":true,
        reconnectionAttempt:"infinity",
        timeout:1000,
        transports:["websocket"],
    }
    return io("http://localhost:5000/",option) 
}