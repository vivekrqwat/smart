import { Box, Button } from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
import { ReactSketchCanvas } from "react-sketch-canvas";

import Drawer1 from './Component/Dashboardcomponent/Drawer1';
import Tools from './Component/Dashboardcomponent/Tools';
import { ThemeContext } from './ThemeContex';
import { initsocket } from './socket';
import Attendance from './Component/form/Attendance';
import { ToastContainer, toast } from 'react-toastify';

export default function Dashboard() {
 
  const socketref=useRef(null);
  const canvasRef = useRef(null);

    const{pen,penColor,username}=useContext(ThemeContext);
    const boxstyle={
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        gap:"10px"
        // border:"2px solid red",
       
        
    }
 
    console.log(username)
    const handleChange = async () => {
      if (!canvasRef.current || !socketref.current||username!='admin') return;
    
      const paths = await canvasRef.current.exportPaths();
      socketref.current.emit('drawing', {
        roomid: 'shared-board',
        data: paths,
      });
    
      console.log("Stroke finished and sent");
    };
    

   
    

    useEffect(()=>{
      const init=async()=>{
        socketref.current=await initsocket();
        // socketref.current.emit('join',{
        //   id:"123"
        // })
        socketref.current.emit('join', { roomid: 'shared-board' });
        socketref.current.on("r-drawing",(data)=>{
        // console.log("data",data);
        // console.log("data2",canvasRef.current);
        console.log("r-draw")
          if(canvasRef.current){
            canvasRef.current.loadPaths(data);
           
          }
        })

        //attendance message
        socketref.current.on('r-attendance',({message})=>{
          console.log("socket username",username)
          if(username!="admin"&& username!=undefined){
            console.log("socket username2",username)
            toast(
              <Attendance></Attendance>
            )
          }else if(username=='admin'){
            toast.info("attendance has been sendend",{
              autoClose:2000
            });
          }
        })
      }
      init();

      return () => {
        if (socketref.current) {
          socketref.current.emit('leave', { roomid: 'shared-board' });
          // socketref.current.disconnect(); // optional
        }
      };
    },[])
    const notify=()=>{
      toast(
        <Attendance></Attendance>
      )
    }
    const sendMessage=(e)=>{
      e.preventDefault();
      if(socketref.current && username=='admin'){
        socketref.current.emit('send-attendance',{
          message:"attendance is sended"
        })
      }
    }
   
  return (
    <Box width={"100%"} 
    height={"100vh"}
    border={"2px solid red"}
    >
          <ReactSketchCanvas
         ref={canvasRef}
        width="100%"
        height="80%"
        strokeWidth={pen}
        strokeColor={penColor}
        canvasColor="#D9D9D9"
        withTimestamp={true}
        onStroke={username=="admin"?handleChange:undefined}
        allowOnlyPointerType={username=='admin'&&'all'}
      />


      <Box style={boxstyle} width={"100%"} mt="30px" height={"20%"}>
       
       {/* <Attendance></Attendance> */}
       <ToastContainer
  position="bottom-right"
  autoClose={6000}
  hideProgressBar={false}
  newestOnTop={true}
  closeButton={false}
  pauseOnHover={true}
  draggable={true}
/>
       
       
       { username=="admin"&&<Drawer1></Drawer1>}
        {/* box for icon button */}
        {/* <Box style={boxstyle} width={"30%"}>
        <CreateIcon></CreateIcon>
        <ColorLensIcon></ColorLensIcon>
        <ImagesearchRollerIcon></ImagesearchRollerIcon>

            
        </Box > */}
       {username=="admin"&&<Tools></Tools>} 
      {/* box for button */}
      <Box sx={boxstyle} width={"50%"}>
     {username=="admin"&& <Button variant='contained' sx={{background:"#4761DF",
        color:"white",
        
        fontSize:"0.9rem"
        
       }}>go_to code_collab</Button>
       }

   { username=="admin"?<Button variant='contained' sx={{background:"#1A8899",
        color:"white",
      
          fontSize:"0.9rem"
        
       }} onClick={sendMessage}>Send_Attendance</Button>:
       <Button variant='contained' sx={{background:"#1A8899",
        color:"white",
        fontFamily:"Roboto",
          fontSize:"0.9rem"
        
       }}>Send_Request</Button>


      }
       <Button variant='contained' sx={{background:"#ed4f41",
        color:"white",
       
          fontSize:"0.9rem"
        
       }}>Leave_Room</Button>
      </Box>


      </Box>

    </Box>
  )
}
