import React from 'react'
import Login from '../Component/HomepageComponent/Login'
import { Avatar, Box, Typography } from '@mui/material'
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.png"


export default function Home() {
   
  return (
    <Box width={"100%"} 
     position={"relative"} 
     overflow={"hidden"} 
     height={"100vh"}>
   <Box width={"100%"} 
    display={"flex"} 
   flexDirection={"column"}
   justifyContent={"center"}
    alignItems={"center"}>
    <Typography
    sx={{
        fontSize:{xs:"30px",sm:"7rem"}
    }}
    >DELTA_VIEW BOARD</Typography>
    <Typography variant='subtitle' fontFamily={"Roboto"}>A limitless canvas for collaborative minds.</Typography>
    <Login></Login>
   </Box>
   {/* Sidecricle ***********_______**____*/}
    <Box
           sx={{
               background:"red",
               width:{sm:"220px",xs:"80px"},
               height:{sm:"220px",xs:"80px"},
               borderRadius:"50%",
               position:"fixed",
               top:"-55px",
               right:{sm:"105px",xs:"20px"}
   
   
           }}
           ></Box>

            <Box
                   sx={{
                       background:"#F2F930",
                       width:{sm:"120px",xs:"40px"},
                       height:{sm:"120px",xs:"40px"},
                       borderRadius:"50%",
                       position:"absolute",
                       top:{sm:"220px",xs:"20px"},
                       right:{sm:"5px",xs:"20px"}
                   
                   }}
                   ></Box>

                      <Box
                           sx={{
                               background:"#2943EE",
                               width:{sm:"120px",xs:"80px"},
                       height:{sm:"120px",xs:"80px"},
                               borderRadius:"50%",
                               position:"absolute",
                               top:{sm:"40px",xs:"70px"},
                               right:{sm:"-55px",xs:"5px"}
                           }}
                           ></Box>


     {/* Sideimage ***********_______**____*/}
   <img
      src={p1}
      alt="Image 1"
      style={{
        position: 'absolute',
        top: '5%',
        left: '8%',
        width: '20vw',
        height: 'auto',
        maxWidth: '220px',
      }}
    />
    <img
      src={p2}
      alt="Image 2"
      style={{
        position: 'absolute',
        top: '30%',
        left: '9%',
        width: '25vw',
        height: 'auto',
        maxWidth: '250px',
      }}
    />
    <img
      src={p3}
      alt="Image 3"
      style={{
        position: 'absolute',
        top: '20%',
        left: '3%',
        width: '15vw',
        height: 'auto',
        maxWidth: '180px',
      }}
    />
{/* -----greeen side Cricle------- */}


<Box
 sx={{
background:"#81F22B",
width:"210px",
height:"210px",
borderRadius:"50%",
position:"absolute",
bottom:"-1px",
left:"-72px"

}}
></Box>
<Box
 sx={{
background:"#81F22B",
width:"100px",
height:"100px",
borderRadius:"50%",
position:"absolute",
bottom:"220px",
boxShadow:"4px 4px 0px grey"


}}
></Box>


<Box
 sx={{
background:"#81F22B",
width:"50px",
height:"50px",
borderRadius:"50%",
position:"absolute",
bottom:"180px",
left:"120px"


}}
></Box>



           
   </Box>
  )
}
