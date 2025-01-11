import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '/src/redux/reducers/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Button, TextField } from '@mui/material';
import '../../../App.css'


const Signup = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    let redirectPath = localStorage.getItem('userredirect');
    const user = { username, password };
    dispatch(registerUser(user));
    navigate(redirectPath || '/shop-second-repositort/')

  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', fontFamily: 'gandom' }}
    >
      <Typography
        component="h1"
        fontFamily={'gandom'}
        sx={{
          textAlign: 'center',
          color: 'black',
          fontSize: '2rem',
          fontWeight: 'bold',
          mb: 2
        }} >
        ثبت نام
      </Typography>
      <TextField
        label="نام کاربری"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{
          mb: 2,
          borderRadius: 1,
        }}
      />

      <TextField
        type="password"
        label='رمز عبور'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          mb: 2,
          borderRadius: 1,
        }}
      />

      <Button
        size="large"
        variant='contained'
        onClick={handleSignup}
        sx={{
          backgroundColor: 'blue.500',
          color: 'white',
          px: 2,
          borderRadius: 1,
          fontFamily: 'gandom'
        }}
      >
        ثبت نام
      </Button>



    </Box>
  );
};

export default Signup;
