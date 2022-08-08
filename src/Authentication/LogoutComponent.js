import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { GreenButton, RedButton, YellowButton } from "../styles/MuiStyles";

import { SaveUser } from "../Actions/AuthenticationAction";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const LogoutComponent = () => {

    const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
    
    const openLogoutDialog = () => setIsLogoutDialogOpen(true);
    const closeLogoutDialog = () => setIsLogoutDialogOpen(false);

    const dispatch = useDispatch();

    const handleLogout = () => { 

        sessionStorage.removeItem('authToken')
        dispatch(SaveUser(undefined, undefined)) // no userId, no email
    
    }

    return (
        <React.Fragment>
            <YellowButton
                variant={'outlined'}
                className="log"
                onClick={openLogoutDialog}>
                Log out
            </YellowButton>

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
                    <GreenButton
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={closeLogoutDialog}
                    >
                        Cancel
                    </GreenButton>

                    <RedButton
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={handleLogout}>
                        Logout
                    </RedButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default LogoutComponent;