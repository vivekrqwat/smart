import { Box, Button } from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
import { ReactSketchCanvas } from "react-sketch-canvas";

import Drawer1 from './Component/Dashboardcomponent/Drawer1';
import Tools from './Component/Dashboardcomponent/Tools';
import { ThemeContext } from './ThemeContex';
import { initsocket } from './socket';

export default function Dashboard() {
  const socketref=useRef(null);
  const canvasRef = useRef(null);

    const{pen,penColor}=useContext(ThemeContext);
    const boxstyle={
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        // border:"2px solid red",
       
        
    }
    console.log(pen,"pen")

    const handleChange=async()=>{
     
      const paths = await canvasRef.current.exportPaths();
      socketref.current.emit('drawing', {
        roomid: 'shared-board',
        data: paths
      });
      console.log("change")
    }
    

   
    

    useEffect(()=>{
      const init=async()=>{
        socketref.current=await initsocket();
        // socketref.current.emit('join',{
        //   id:"123"
        // })
        socketref.current.emit('join', { roomid: 'shared-board' });
        socketref.current.on("r-drawing",(data)=>{
        console.log("data",data);
        console.log("data2",canvasRef.current);
          if(canvasRef.current){
            canvasRef.current.loadPaths(data);
           
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
        onChange={handleChange}
      />


      <Box style={boxstyle} width={"100%"} mt="30px" height={"20%"}>
        <Drawer1></Drawer1>
        {/* box for icon button */}
        {/* <Box style={boxstyle} width={"30%"}>
        <CreateIcon></CreateIcon>
        <ColorLensIcon></ColorLensIcon>
        <ImagesearchRollerIcon></ImagesearchRollerIcon>

            
        </Box > */}
        <Tools></Tools>
      {/* box for button */}
      <Box sx={boxstyle} width={"50%"}>
      <Button variant='contained' sx={{background:"#4761DF",
        color:"white",
        fontFamily:"Roboto"
        
       }}>go_to code_collab</Button>

    <Button variant='contained' sx={{background:"#1A8899",
        color:"white",
        fontFamily:"Roboto"
        
       }}>Send_Attendance</Button>
       <Button variant='contained' sx={{background:"#ed4f41",
        color:"white",
        fontFamily:"Roboto"
        
       }}>Leave_Room</Button>
      </Box>


      </Box>

    </Box>
  )
}
