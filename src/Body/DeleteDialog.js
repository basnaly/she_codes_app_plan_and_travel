import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { DeleteTrip } from '../Actions/PlanTravelAction';

import { CityTitleStyled, GreenButton, RedButton } from '../styles/MuiStyles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const DeleteDialog = ({ el }) => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDeleteDialog = () => setIsDialogOpen(true);
    const closeDeleteDialog = () => setIsDialogOpen(false);

    const dispatch = useDispatch();

    const DeleteCityDialog = () => {

        dispatch(DeleteTrip(el.id))
    }

    return (
        <React.Fragment>
            <RedButton
                variant={'outlined'}
                className=" mx-3"
                onClick={openDeleteDialog}>
                Delete
            </RedButton>

            <Dialog
                open={isDialogOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeDeleteDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="modal-modal-title" variant="h6" component="h2"
                    className='pb-1 m-1'>
                    Delete trip to 
                    <CityTitleStyled className='ps-2 d-inline-block'> 
                        {el.city}
                    </CityTitleStyled>
                </DialogTitle>

                <hr className='mx-2 my-0' />

                <DialogContent className='pb-3'>
                    <DialogContentText id="alert-dialog-slide-description"
                        className='mt-0 mb-0'>
                        Are you sure you want to delete the city?
                    </DialogContentText>
                </DialogContent>

                <DialogActions className="d-flex align-items-center mt-0 mb-3">
                    <GreenButton
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={closeDeleteDialog}
                    >
                        Cancel
                    </GreenButton>

                    <RedButton
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={DeleteCityDialog}>
                        Delete
                    </RedButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default DeleteDialog;
