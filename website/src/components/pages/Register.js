import React, { Suspense, useState } from 'react';
import useToken from '../useToken'
import {
   FormControl,
   Box,
   Button,
   TextField,
   Typography,
   Paper
} from '@mui/material';
import { Link } from 'react-router-dom';

function Register() {
   const { token, removeToken, saveToken } = useToken();

   const [loginForm, setloginForm] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
   })


   const handleChange = (event) => {
      const { value, name } = event.target

      setloginForm({
         ...loginForm,
         [name]: value
      })
   }

   const handleClick = () => {
      console.log(loginForm);
      saveToken("token");
      setloginForm(({
         firstname: "",
         lastname: "",
         email: "",
         password: ""
      }))
   }

   return (
      <Box
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: 'column',
            my: '5%'
         }}
      >
         <Typography variant='h2'
            sx={{ mb: 5 }}>
            Register
         </Typography>
         <Paper elevation={10}
            sx={{
               p: 4,
               borderRadius: 5,
               backgroundColor: ''
            }}>
            <FormControl>
               <TextField
                  onChange={handleChange}
                  text={loginForm.firstname}
                  value={loginForm.firstname}
                  type="firstname"
                  name="firstname"
                  label="First name"
                  sx={{ m: 1 }}
               >
               </TextField >
               <TextField
                  onChange={handleChange}
                  text={loginForm.lastname}
                  value={loginForm.lastname}
                  type="lastname"
                  name="lastname"
                  label="Last name"
                  sx={{ m: 1 }}
               >
               </TextField >
               <TextField
                  onChange={handleChange}
                  text={loginForm.email}
                  value={loginForm.email}
                  type="email"
                  name="email"
                  label="Email"
                  sx={{ m: 1 }}
               >
               </TextField >

               <TextField
                  onChange={handleChange}
                  text={loginForm.password}
                  value={loginForm.password}
                  type="password"
                  name="password"
                  label="Password"
                  sx={{ m: 1 }}
               >
               </TextField >

               {console.log()}
               <Box>
                  <Button
                     component={Link}
                     to="/"
                     type="submit"
                     variant="contained"
                     onClick={handleClick}>
                     Submit
                  </Button>
               </Box>
            </FormControl>
         </Paper>
      </Box>
   )
}


export default function App() {
   return (
      <Suspense fallback="loading">
         <Register />
      </Suspense>
   )
}