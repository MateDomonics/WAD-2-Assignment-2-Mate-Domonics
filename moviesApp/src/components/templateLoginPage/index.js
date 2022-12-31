import React, { useContext, useState } from "react";  // useState/useEffect redundant 
import { Navigate, Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/authContext"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const TemplateLoginPage = props => {
    const context = useContext(AuthContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(username, password);
    }

    if (context.isAuthenticated === true) {
        return <Navigate to={"/"} />;
    }

    return (
        <>
            <Box component="div" pt={2} sx={{ justifyContent: "center", display: "flex" }}>
                <Typography variant= "h4">
                    Login Page for TMDB
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
                onClick={login}>
                    Login
                </Button>
            </Box>
        </>
    );
};

export default TemplateLoginPage;