import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { GetTripData } from '../Actions/PlanTravelAction';

import { CityTitleStyled, GreenButton } from "../styles/MuiStyles";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const ViewComponent = ({ el }) => {

	const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

	const trip = useSelector(state => state?.main?.trip)

	const dispatch = useDispatch();

	const openViewDialog = () => {

		dispatch(GetTripData(el.id)) // request to get date
		setIsViewDialogOpen(true)
	}
	const closeViewDialog = () => setIsViewDialogOpen(false);

	const tripFrom = moment.unix(trip?.period?.from).format('DD/MM/YYYY');
	const tripTo = moment.unix(trip?.period?.to).format('DD/MM/YYYY');

	return (

		<React.Fragment>
			<GreenButton
				variant={'outlined'}
				className=" mx-3"
				onClick={openViewDialog} >
				View
			</GreenButton>

			<Dialog maxWidth='md' fullWidth
				open={isViewDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={closeViewDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="modal-modal-title" variant="h6" component="h2"
					className='pb-1 m-1'>
						<CityTitleStyled >
							{trip.city}
						</CityTitleStyled>
				</DialogTitle>

				<hr className='mx-2 my-0' />

				<DialogContent className='d-flex flex-column align-items-center pt-1 pb-3'>

					<div className='period-view mt-2 mb-2'>
						Date of trip:
					</div>

					<div className='date-view d-flex align-items-center'>
						<DialogContentText id="alert-dialog-slide-description"
							className='me-2 mt-0 mb-2'>
							from: {tripFrom}
						</DialogContentText>

						<DialogContentText id="alert-dialog-slide-description"
							className='mt-0 mb-2'>
							to: {tripTo}
						</DialogContentText>
					</div>
			
				</DialogContent>

				<DialogActions className="d-flex align-items-center mt-0 mb-3">
					<GreenButton
					variant={'outlined'}
					className=" mx-3"
					onClick={closeViewDialog}
					>
					Close
					</GreenButton>
				</DialogActions>
			</Dialog>
		</React.Fragment >
	)
}

export default ViewComponent;