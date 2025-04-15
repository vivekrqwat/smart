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
        fontSize:"64px"
    }}
    >DELTA_VIEW BOARD</Typography>
    <Typography variant='subtitle' fontFamily={"Roboto"}>A limitless canvas for collaborative minds.</Typography>
    <Login></Login>
   </Box>
   {/* Sidecricle ***********_______**____*/}
    <Box
           sx={{
               background:"red",
               width:"220px",
               height:"220px",
               borderRadius:"50%",
               position:"fixed",
               top:"-55px",
               right:"105px"
   
   
           }}
           ></Box>

            <Box
                   sx={{
                       background:"#F2F930",
                       width:"120px",
                       height:"120px",
                       borderRadius:"50%",
                       position:"absolute",
                       top:"220px",
                       right:"5px"
                   
                   }}
                   ></Box>

                      <Box
                           sx={{
                               background:"#2943EE",
                               width:"120px",
                               height:"120px",
                               borderRadius:"50%",
                               position:"absolute",
                               top:"40px",
                               right:"-55px"
                           }}
                           ></Box>


     {/* Sideimage ***********_______**____*/}
<img src={p1} alt="" 
style={{
    position:"absolute",
    top:"50px",
    left:"100px",
    height:"220px",
    width:"220px"
}}
/>
<img src={p2} alt=""
style={{
    position:"absolute",
    top:"280px",
    left:"80px",
    height:"140px",
    width:"140px"
}}
/>
<img src={p3} alt="" 
style={{
    position:"absolute",
    top:"180px",
    left:"50px",
    height:"120px",
    width:"120px"
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
