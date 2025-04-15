import { Box, Button, Divider, Drawer, List, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react'

export default function Drawer1() {
    const [open,setopen]=useState(false);
    const toggleClick=(e)=>()=>{
        setopen(e);
    }
    // it is an highorder functioon ,function ke ander function, 
    // agr yeah nhai hoga to setopen bhoot jada rerender hoga
    const drawer=(
        <Box width={"250px"} onclick={toggleClick(false)}>
            <Typography>REQUEST</Typography>
            <Divider></Divider>
            <List>
                <ListItemText primary={"kamal"}></ListItemText>
            </List>

        </Box>
    )
  return (
    <div>
        <Button onClick={toggleClick(true)} variant='conatined' 
        sx={{background:"#4761DF",
            color:"white",
            fontFamily:"Roboto"
            
           }}
        >check</Button>
      <Drawer open={open} onClose={toggleClick(false)}>
        {drawer}
      </Drawer>
    </div>
  )
}
