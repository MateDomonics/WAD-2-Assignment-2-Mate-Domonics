import React, { useContext, useState } from "react";  // useState/useEffect redundant 
import { Navigate, Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/authContext"


const TemplateLoginPage = props => {
    const context = useContext(AuthContext)
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const login = () => {
        context.authenticate(username, password);
    }

    if (context.isAuthenticated === true) {
        return <Navigate to={"/"} />;
    }

    return (
        <>
            <h2>LoginPage</h2>
            <input id="username" placeholder="username" onChange={e => { setUsername(e.target.value); }}></input>
            <input id="password" placeholder="password" type = "password" onChange={e => { setPassword(e.target.value); }}></input>
            <button onClick = {login}>login please I beg you</button>
        </>
    );
};

export default TemplateLoginPage;