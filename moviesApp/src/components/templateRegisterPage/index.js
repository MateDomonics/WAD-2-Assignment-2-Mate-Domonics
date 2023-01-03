import React, { useContext, useState } from "react";  // useState/useEffect redundant 
import { Navigate, Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/authContext"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const TemplateRegisterPage = props => {
    const context = useContext(AuthContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);
    const [signedIn, setSignedIn] = useState(true);

    const register = () => {
        context.register(username, password);
        setRegistered(true)
    }

    const logout = () => {
        context.signout();
        setSignedIn(false)
    }

    if (registered === true) {
        return <Navigate to={"/loginpage"} />;
    }

    if (signedIn === false) {
        return <Navigate to={"/"}/>;
    }

    return (
        <>
            <Box component="div" pt={2} sx={{ justifyContent: "center", display: "flex" }}>
                <Typography variant= "h4">
                    Registering for the TMDB Page
                </Typography>
            </Box>
            <Box component="div" pt={2} sx={{ justifyContent: "center", display: "flex" }}>
                <TextField
                    id="username"
                    label="Username"
                    type="text"
                    onChange={e => { setUsername(e.target.value); }}
                >
                </TextField>
            </Box>
            <Box component="div" pt={1} sx={{ justifyContent: "center", display: "flex" }}>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    onChange={e => { setPassword(e.target.value); }}
                >
                </TextField>
            </Box>
            <Box component="div" pt={2} sx={{ justifyContent: "center", display: "flex" }}>
                <Button
                variant = "contained"
                color = "info"
                onClick={register}>
                    Register
                </Button>
            </Box>
            <Box component="div" pt={2} sx={{ justifyContent: "center", display: "flex" }}>
                <Button
                variant = "contained"
                color = "info"
                onClick={logout}>
                    Sign out
                </Button>
            </Box>
        </>
    );
};

export default TemplateRegisterPage;