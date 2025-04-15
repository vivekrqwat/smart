import React, { useContext, useState } from 'react'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CreateIcon from '@mui/icons-material/Create';
import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller';
import { Avatar, Box, Button, Paper } from '@mui/material';
import { ThemeContext } from '../../ThemeContex';
export default function Tools() {
   const{setpen,setpenColor,pen,showpen,setshowpen}=useContext(ThemeContext);
   const [showPalette,setShowPalette]=useState(false);
   const[showeraser,setshoweraser]=useState(false);
   const Increasepx=()=>{
    setpen((prv)=>prv+1);
   }

   const Decreaesepx=()=>{
    setpen((prv)=>prv-1);
   }
   
   const Showpx=()=>{
    setshowpen(prv=>!prv);
    setshoweraser(false)
   }
   

   const setpxcolor=(e)=>{
    setpenColor(e)
   }
   const showcolorpalette=()=>{
    setShowPalette(prv=>!prv)
    setshoweraser(false);
   }

   const eraser=()=>{
    setpenColor('#D9D9D9');
    setshowpen(false)
    setShowPalette(false)
    setshoweraser(prv=>!prv);

    
   }
   
    const colorpalette=[
        '#000000', // Black
        '#FF0000', // Red
        '#00FF00', // Green
        '#0000FF', // Blue
        '#FFFF00', // Yellow
        '#FF00FF', // Magenta
        '#00FFFF', // Cyan
        '#FFFFFF'  // White
    ]
   
   const boxstyle={
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        // border:"2px solid red",
       
        
    }
    const btnstyle={
        width:"20%",
        color:"green"
    }
  return (
    <Box style={boxstyle} width={"30%"}>
        <Box >
          { showpen&&<Paper sx={{
                background:"black",
                width:"120px",
                color:"white",
                display:"flex",
                justifyContent:"space-between",
                padding:"10px"
            }}>
                <button style={btnstyle}
                onClick={Increasepx}
                >+</button>
                {pen}
                <button style={btnstyle}
                onClick={Decreaesepx}
                >-</button>
            </Paper>
}
        <CreateIcon onClick={Showpx}></CreateIcon>
        </Box>
    <Box>
       { showPalette&&<Paper sx={{
            display:"flex",
          gap:"10px",
            justifyContent:"space-evenly",
            alignItems:"center"
        }}>
            {colorpalette.map((e)=>(
                <Box sx={{
                    width:"20px",
                    height:"20px",
                    background:e,
                    borderRadius:"50%",
                    
                }}
                onClick={()=>setpxcolor(e)}
                ></Box>
                
            ))
        }
            
        </Paper>
}
    <ColorLensIcon onClick={showcolorpalette}></ColorLensIcon>
    </Box>
    <Box>
        <Paper>
        { showeraser&&<Paper sx={{
                background:"black",
                width:"120px",
                color:"white",
                display:"flex",
                justifyContent:"space-between",
                padding:"10px"
            }}>
                <button style={btnstyle}
                onClick={Increasepx}
                >+</button>
                {pen}
                <button style={btnstyle}
                onClick={Decreaesepx}
                >-</button>
            </Paper>
}

        </Paper>
    <ImagesearchRollerIcon onClick={eraser}></ImagesearchRollerIcon>
    </Box>
  
   

        
    </Box >
  )
}
