import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signOut, getAuth } from 'firebase/auth';

import { Button } from "@mui/material";
import { styled } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { SaveUser } from "../Actions/AuthenticationAction";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const LogoutButton = styled(Button)({
    textTransform: 'none',
    color: 'yellow',
    border: '1px solid yellow',
    fontSize: '22px',
    backgroundColor: "transparent",
    padding: '0 10px',
    fontFamily: 'Aladin',
})

const CloseButton = styled(Button)({
    textTransform: 'none',
    color: 'forestgreen',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

const DialogLogOutButton = styled(Button)({
    textTransform: 'none',
    color: 'red',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

const LogoutComponent = () => {

    const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
    
    const openLogoutDialog = () => setIsLogoutDialogOpen(true);
    const closeLogoutDialog = () => setIsLogoutDialogOpen(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => { // google function
        const authentication = getAuth();
        signOut(authentication);
        dispatch(SaveUser(undefined, undefined)) // no userId, no email
        navigate('/')
    }

    return (
        <React.Fragment>
            <LogoutButton
                variant={'outlined'}
                className="log"
                onClick={openLogoutDialog}>
                Log out
            </LogoutButton >

            <Dialog
                open={isLogoutDialogOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeLogoutDialog}
                aria-labelledby="modal-modal-title"
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogTitle id="modal-modal-title" variant="h6" component="h2"
                    className='pb-1 m-1'>
                    Log out
                </DialogTitle>
                <hr className='mx-2 my-0' />
                <DialogContent className='pb-3'>
                    <DialogContentText id="alert-dialog-slide-description"
                        className='mt-0 mb-0'>
                        Are you sure you want to log out?
                    </DialogContentText>
                </DialogContent>

                <DialogActions className="d-flex align-items-center mt-0 mb-3">
                    <CloseButton
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={closeLogoutDialog}
                    >
                        Cancel
                    </CloseButton>

                    <DialogLogOutButton
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={handleLogout}>
                        Logout
                    </DialogLogOutButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default LogoutComponent;