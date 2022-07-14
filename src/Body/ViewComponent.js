import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const CloseButton = styled(Button)({
    textTransform: 'none',
    color: 'forestgreen',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

const ViewButton = styled(Button)({
    textTransform: 'none',
    color: 'forestgreen',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

const ViewComponent = ({ el }) => {

    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
    const openViewDialog = () => setIsViewDialogOpen(true);
    const closeViewDialog = () => setIsViewDialogOpen(false);

    const ViewDialog = () => {
        openViewDialog()
 
    }

    return (

        <React.Fragment>

            <ViewButton
                variant={'outlined'}
                className=" mx-3"
                onClick={ViewDialog}>
                View
            </ViewButton>

            <Dialog
                open={isViewDialogOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeViewDialog}
                aria-labelledby="modal-modal-title"
                aria-describedby="alert-dialog-slide-description" >

                <DialogActions className="d-flex align-items-center mt-0 mb-3">
                    <CloseButton
                        variant={'outlined'}
                        className=" mx-3"
                        onClick={closeViewDialog}
                    >
                        Close
                    </CloseButton>

                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default ViewComponent;
