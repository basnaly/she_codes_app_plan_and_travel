import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { PreLoginStyled, TabContentBox } from "../../styles/MuiStyles";

import WeatherComponent from "../WeatherTable/WeatherComponent";
import PrelLoginPeriodComponent from "./PrelLoginPeriodComponent";
import PrelLoginTripComponent from "./PrelLoginTripComponent";

const PreLoginScreen = () => {
	
	const userId = useSelector((state) => state?.auth?.userId);

	const navigate = useNavigate();

	useEffect(() => {
		if (userId) {
			navigate("/home");
		}
	}, [userId]);

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>

			<TabContentBox
				boxShadow={24}
				p={4}
				className="d-flex align-items-center"
			>
				<PreLoginStyled className="d-flex flex-column align-items-center">
					
					<PrelLoginTripComponent />

					<PrelLoginPeriodComponent />

					<WeatherComponent />
					
					<div className="mt-3">
						Please register or login to start your trip!
					</div>

				</PreLoginStyled>
				
			</TabContentBox>
			
		</LocalizationProvider>
	);
};

export default PreLoginScreen;
