import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { DeleteUserAccount } from '../Actions/AuthenticationAction';

import { CityTitleStyled, GreenButton, RedButton, UserMenuStyled } from '../styles/MuiStyles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const DeleteAccount = () => {

    const username = useSelector(state => state?.auth?.username)

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDeleteAccount = () => setIsDialogOpen(true);
    const closeDeleteAccount = () => setIsDialogOpen(false);

    const dispatch = useDispatch();

    const deleteAccount = () => {

        dispatch(DeleteUserAccount())
    }

  return (

    <React.Fragment>
            <UserMenuStyled 
				className="d-flex flex-column align-items-center justify-content-center py-2 px-3"
				onClick={openDeleteAccount}>
					Delete my account
			</UserMenuStyled>

            <Dialog
                data-testid="delete-dialog-element"
                open={isDialogOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeDeleteAccount}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="modal-modal-title" variant="h6" component="h2"
                    className='pb-1 m-1'>
                    Delete  
                    <CityTitleStyled className='px-2 d-inline-block'> 
                        {username}
                    </CityTitleStyled>
                    account
                </DialogTitle>

                <hr className='mx-2 my-0' />

                <DialogContent className='pb-3'>
                    <DialogContentText id="alert-dialog-slide-description"
                        className='mt-0 mb-0'>
                        Are you sure you want to delete your account?
                    </DialogContentText>
                </DialogContent>

                <DialogActions className="d-flex align-items-center mt-0 mb-3">
                    <GreenButton
                        data-testid="cancel-button-element"
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={closeDeleteAccount}
                    >
                        Cancel
                    </GreenButton>

                    <RedButton
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={deleteAccount}>
                        Delete
                    </RedButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
  )
}

export default DeleteAccount;
