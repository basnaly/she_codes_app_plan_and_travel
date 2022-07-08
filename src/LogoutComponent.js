import React from "react";
import { useNavigate } from "react-router-dom";

import { signOut, getAuth } from 'firebase/auth';

import { Button } from "@mui/material";
import { styled } from "@mui/material";

const LogoutButton = styled(Button)({
    textTransform: 'none',
    color: 'yellow',
    border: '1px solid yellow',
    fontSize: '22px',
    backgroundColor: "transparent",
    padding: '0 10px',
    fontFamily: 'Aladin',
})

const LogoutComponent = () => {
    
    const navigate = useNavigate();

    const handleLogout = () => { 
        const authentication = getAuth();
        signOut(authentication);
        navigate('/')
    }

    return (
        <LogoutButton
            variant={'outlined'}
            className="log"
            onClick={handleLogout}>
            Log out
        </LogoutButton >
    )
}

export default LogoutComponent;