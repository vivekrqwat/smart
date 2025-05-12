import { Box, Button, Container, Paper } from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
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
    };
  }, []);

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
