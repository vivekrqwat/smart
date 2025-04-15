import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function Login() {
  const [roomid,setroomid]=useState();
  const [uname,setuname]=useState();
  const navigate = useNavigate();
 
  console.log("a",roomid);
    const textFieldStyles = {
        backgroundColor: "#F0E9E9",
        borderRadius: "50px",
        outline: "none",
        padding: "8px 12px",
        fontSize: "16px",
        textAlign:"center",
        fontFamily:"jaro",
        width:"90%",
        
        
      };
      const btnstyle={
        width:"40%",
        backgroundColor:"#4B8F17",
        color:"white"

      }
      const formStyle={
        width:"50%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        // border:"2px solid red",
        gap:"10px",
        marginTop:"40px",


      }

       const goToDashboard = () => {
             navigate(`/editor/${roomid}`)
            };
    
  return (
   <Box 
//    border={"2px solid red"} 
   width={"50%"} 
   display={"flex"} 
   mt={"30px"}
   flexDirection={"column"}
//    justifyContent={"center"}
   alignItems={"center"}
 height={"555px"}


   >

   {/* heading */}

   <Typography
   mt={"30px"}
   sx={{fontSize:"54px"}}
   >WELCOME to DETA</Typography>
    {/* form ..............*/}
    <form action="" style={formStyle} 
        >

            <input type="text" placeholder='enter room id' 
            style={textFieldStyles}
            value={roomid}
            onChange={(e)=>{setroomid(e.target.value)}}
            />
              <input type="text" placeholder='enter username' 
              
            style={textFieldStyles}
            value={uname}
            onChange={(e)=>{setuname(e.target.value)}}
            />


        
       
        <Button type='submit' sx={btnstyle} onClick={goToDashboard}>join</Button>

    </form>

    <Typography sx={{fontFamily:"Roboto"}} mt={"30px"}>Do you have any room id?create a newROOm</Typography>

   </Box>
  )
}
