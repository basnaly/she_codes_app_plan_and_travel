import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { GetTripData } from '../Actions/PlanTravelAction';
import { CircularProgress } from '@mui/material';

import { CityTitleStyled, GreenButton } from "../styles/MuiStyles";
import ViewTripDates from './ViewInternalComponents/ViewTripDates';
import TransportationsViewList from './ViewInternalComponents/TransportationsViewList';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const ViewComponent = ({ el }) => {

	const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

	const trip = useSelector(state => state?.main?.trip);
	const isLoadingTrip = useSelector(state => state.main.isLoadingTrip);

	const dispatch = useDispatch();

	const openViewDialog = () => {

		dispatch(GetTripData(el.id)) // request to get date
		setIsViewDialogOpen(true)
	}
	const closeViewDialog = () => setIsViewDialogOpen(false);

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

				{isLoadingTrip ? <CircularProgress color="success" /> :


					<DialogContent className='d-flex flex-column align-items-center pt-1 pb-3'>

						<ViewTripDates period={trip.period} />


						<TransportationsViewList transportations={trip.transportations} />

					</DialogContent>

				}

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
