import React from "react";
import { useSelector } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import WeatherData from "./WeatherData";
import WeatherTitle from "./WeatherTitle";

import { BlackSmallButton, CityTitleStyled } from "../../styles/MuiStyles";
import { DialogActions } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const WeatherDialog = ({ weatherData, isDialogOpen, setIsDialogOpen }) => {

	const city = useSelector((state) => state?.main?.preLoginTrip?.city);

	const closeDeleteDialog = () => setIsDialogOpen(false);

	return (
		<div>
			<Dialog 
				maxWidth="xl"
				open={isDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={closeDeleteDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle
					id="modal-modal-title"
					variant="h6"
					component="h2"
					className="pb-1 m-1 text-center"
				>
					The average weather in
					<CityTitleStyled className="ps-2 d-inline-block">
						{city}
					</CityTitleStyled>
				</DialogTitle>

				<DialogContent className="d-flex align-items-center pb-0">
					<WeatherTitle />

					<WeatherData weatherData={weatherData} />
				</DialogContent>

				<DialogActions>
					<BlackSmallButton
						variant={"outlined"}
						className="mx-auto mt-0 mb-3"
						onClick={closeDeleteDialog}
						size="small"
						>
						Close
					</BlackSmallButton>
				</DialogActions>

			</Dialog>
		</div>
	);
};

export default WeatherDialog;
