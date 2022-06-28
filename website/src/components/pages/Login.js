import React, { Suspense, useState } from 'react';
import useToken from '../useToken'
import {
    FormControl,
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';


// Login created using this guide right here 
// https://dev.to/nagatodev/how-to-add-login-authentication-to-a-flask-and-react-application-23i7
function Login() {
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
            <Typography variant='h2'>
                Login
            </Typography>
            <FormControl>
                <TextField
                    onChange={handleChange}
                    text={loginForm.username}
                    value={loginForm.username}
                    type="username"
                    name="username"
                    label="Username"
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
        </Box>
    )
}


export default function App() {
    return (
        <Suspense fallback="loading">
            <Login />
        </Suspense>
    )
}