import { Button, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Attendance() {
    const popupstyle={
        height:"100px",
        width:"100%",
        display:"flex",
        border:"none",
        
        justifyContent:'center',
        allignItems:"center,",
        borderRadius:"10px 10px 10px 10px ",
        
    }
    const formstyle={
        display:"flex",
        allignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"column",
      
    }
    
    const textFieldStyles = {
        backgroundColor: "#F0E9E9",
        borderRadius: "50px",
        outline: "none",
        padding: "8px 12px",
        fontSize: "10px",
        textAlign:"center",
        fontFamily:"jaro",
        width:"90%",
        
        
      };
      const btnstyle={
        width:"40%",
        backgroundColor:"#4B8F17",
        color:"white"

      }
  return (

        <Paper  style={popupstyle} elevation={0}>
            <form action="" style={formstyle}>
                <Typography>Please enter your attendance</Typography>
                <input style={textFieldStyles}></input>
                <Button  variant="contained" style={btnstyle}>send</Button>
            </form>
        </Paper>
   
  )
}
