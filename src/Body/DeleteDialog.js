import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from "@mui/material";
import Slide from '@mui/material/Slide';

import { DeleteCity } from '../Actions/PlanTravelAction';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const DeleteCityButton = styled(Button)({
    textTransform: 'none',
    color: 'red',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
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

const DeleteDialog = ({ el }) => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDeleteDialog = () => setIsDialogOpen(true);
    const closeDeleteDialog = () => setIsDialogOpen(false);

    const dispatch = useDispatch();

    const DeleteCityDialog = () => {

        dispatch(DeleteCity(el.id))
    }

    return (
        <React.Fragment>
            <DeleteCityButton
                variant={'outlined'}
                className=" mx-3"
                onClick={openDeleteDialog}>
                Delete
            </DeleteCityButton>

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
                    <span className='city-name ps-2 d-inline-block'> 
                        {el.city}
                    </span>
                </DialogTitle>
                <hr className='mx-2 my-0' />
                <DialogContent className='pb-3'>
                    <DialogContentText id="alert-dialog-slide-description"
                        className='mt-0 mb-0'>
                        Are you sure you want to delete the city?
                    </DialogContentText>
                </DialogContent>

                <DialogActions className="d-flex align-items-center mt-0 mb-3">
                <CloseButton
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={closeDeleteDialog}
                    >
                        Cancel
                    </CloseButton>

                    <DeleteCityButton
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={DeleteCityDialog}>
                        Delete
                    </DeleteCityButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default DeleteDialog;
