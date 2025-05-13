<<<<<<< HEAD
import { Box, Button } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
=======
import { Box, Button, Container, Paper } from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
>>>>>>> f34f668a7d95bfdbc3f995227155a4ca2f166ea7
import { ReactSketchCanvas } from "react-sketch-canvas";
import { useNavigate } from 'react-router-dom';
import Drawer1 from './Component/Dashboardcomponent/Drawer1';
import Tools from './Component/Dashboardcomponent/Tools';
import { ThemeContext } from './ThemeContex';
import { initsocket } from './socket';
import Attendance from './Component/form/Attendance';
import { ToastContainer, toast } from 'react-toastify';
import Request from './Component/Request/Requset';

export default function Dashboard() {
  const socketref = useRef(null);
  const canvasRef = useRef(null);
<<<<<<< HEAD
    const[message,setmessage]=useState('');
    const{pen,penColor,username,setatd,atd,mark,setmark}=useContext(ThemeContext);
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
    
//change mark
const changeMark=(number)=>{
  let index=Number(number)
  console.log(mark,",",index);
  let updatemark=[...mark];
  updatemark[index]=index;
  console.log(updatemark[index],"yha hua change");
  setmark(updatemark);
  console.log(mark)
  console.log(updatemark)

}
   //leave

    

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
              <Attendance socketref={socketref}></Attendance>
            )
          }else if(username=='admin'){
            toast.info("attendance has been sendend",{
              autoClose:2000
            });
          }
        })


        //recv  req
        socketref.current.on('r-sendreq',({message})=>{
          console.log('bhai  ka nam',message)
          setatd(prv=>[...prv,message]);
        })
        //recv mark
        socketref.current.on('r-mark', ({ rollnumber }) => {
          console.log("socket roll", rollnumber);
          changeMark(rollnumber);
        });
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
        <Attendance ></Attendance>
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
   const sendRequest=(e)=>{
    if(socketref.current){
      socketref.current.emit('sendreq',{message:username})
    }
   }
   //leave
   const leave=()=>{
    if(username=='admin'){
      console.log("leave ho gya",mark);
      let message="";
      {mark.map((i)=>{
       i>=3 ?message+=`${i},`:"";
      })

      }
      console.log(message);
      
     
      
    }
  
   }
         useEffect(() => {
           console.log("Updated atd:", message);
         }, [message]);
  
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
        
       }} onClick={sendMessage}
       
    
       >Send_Attendance</Button>:
       <Button 
       variant='contained'
       onClick={sendRequest}
        sx={{background:"#1A8899",
        color:"white",
        fontFamily:"Roboto",
          fontSize:"0.9rem"
        
       }}
      
       
       >Send_Request</Button>
=======
  const navigate = useNavigate();
  const { pen, penColor, username, setatd } = useContext(ThemeContext);

  const handleChange = async () => {
    if (!canvasRef.current || !socketref.current || username !== 'admin') return;
    const paths = await canvasRef.current.exportPaths();
    socketref.current.emit('drawing', {
      roomid: 'shared-board',
      data: paths,
    });
  };

  useEffect(() => {
    const init = async () => {
      socketref.current = await initsocket();
      socketref.current.emit('join', { roomid: 'shared-board' });
      
      socketref.current.on("r-drawing", (data) => {
        if (canvasRef.current) {
          canvasRef.current.loadPaths(data);
        }
      });
>>>>>>> f34f668a7d95bfdbc3f995227155a4ca2f166ea7

      socketref.current.on('r-attendance', ({ message }) => {
        if (username !== "admin" && username !== undefined) {
          toast(<Attendance />);
        } else if (username === 'admin') {
          toast.info("Attendance has been sent", {
            autoClose: 2000
          });
        }
      });

      socketref.current.on('r-sendreq', ({ message }) => {
        setatd(prv => [...prv, message]);
      });

      // Listen for admin leaving event
      socketref.current.on('admin-left', () => {
        toast.info("Admin has left the room. Redirecting to home...", {
          autoClose: 2000
        });
        setTimeout(() => {
          navigate('/');
        }, 2000);
      });
    };
    init();

    return () => {
      if (socketref.current) {
        socketref.current.emit('leave', { roomid: 'shared-board' });
      }
<<<<<<< HEAD
       <Button variant='contained' sx={{background:"#ed4f41",
        color:"white",
       
          fontSize:"0.9rem"
        
       }}
       onClick={leave}
      
       
       >Leave_Room</Button>
      </Box>
=======
    };
  }, []);
>>>>>>> f34f668a7d95bfdbc3f995227155a4ca2f166ea7

  const sendMessage = (e) => {
    e.preventDefault();
    if (socketref.current && username === 'admin') {
      socketref.current.emit('send-attendance', {
        message: "attendance is sent"
      });
    }
  };

  const sendRequest = (e) => {
    if (socketref.current) {
      socketref.current.emit('sendreq', { message: username });
    }
  };

  const handleLeaveRoom = () => {
    if (socketref.current) {
      if (username === 'admin') {
        // If admin is leaving, notify all participants
        socketref.current.emit('admin-leaving', { roomid: 'shared-board' });
      }
      // Emit leave event
      socketref.current.emit('leave', { roomid: 'shared-board' });
      // Navigate to home
      navigate('/');
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      sx={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          flex: 1,
          m: 2,
          borderRadius: '20px',
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <ReactSketchCanvas
          ref={canvasRef}
          width="100%"
          height="100%"
          strokeWidth={pen}
          strokeColor={penColor}
          canvasColor="#D9D9D9"
          withTimestamp={true}
          onStroke={username === "admin" ? handleChange : undefined}
          allowOnlyPointerType={username === 'admin' ? 'all' : undefined}
        />
      </Paper>

      <Paper
        elevation={3}
        sx={{
          m: 2,
          p: 2,
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          {username === "admin" && <Drawer1 />}
          {username === "admin" && <Tools />}

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {username === "admin" && (
              <Button
                variant="contained"
                sx={{
                  background: "#4761DF",
                  color: "white",
                  borderRadius: '50px',
                  px: 3,
                  '&:hover': {
                    background: "#3a4eb3"
                  }
                }}
              >
                Go to Code Collab
              </Button>
            )}

            {username === "admin" ? (
              <Button
                variant="contained"
                onClick={sendMessage}
                sx={{
                  background: "#1A8899",
                  color: "white",
                  borderRadius: '50px',
                  px: 3,
                  '&:hover': {
                    background: "#146d7a"
                  }
                }}
              >
                Send Attendance
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={sendRequest}
                sx={{
                  background: "#1A8899",
                  color: "white",
                  borderRadius: '50px',
                  px: 3,
                  '&:hover': {
                    background: "#146d7a"
                  }
                }}
              >
                Send Request
              </Button>
            )}

            <Button
              variant="contained"
              onClick={handleLeaveRoom}
              sx={{
                background: "#ed4f41",
                color: "white",
                borderRadius: '50px',
                px: 3,
                '&:hover': {
                  background: "#c73d32"
                }
              }}
            >
              Leave Room
            </Button>
          </Box>
        </Box>
      </Paper>

      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={true}
        closeButton={false}
        pauseOnHover={true}
        draggable={true}
      />
    </Box>
  );
}
