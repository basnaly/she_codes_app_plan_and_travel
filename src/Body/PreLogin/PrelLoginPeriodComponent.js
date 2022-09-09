import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { PalmStyled } from "../../styles/MuiStyles";
import {
	ChangePreLoginTripDateFrom,
	ChangePreLoginTripDateTo,
} from "../../Actions/PlanTravelAction";

const PrelLoginPeriodComponent = () => {

	const from = useSelector((state) => state?.main?.preLoginTrip?.dateFrom);
	const to = useSelector((state) => state?.main?.preLoginTrip?.dateTo);

	const dispatch = useDispatch();

	const handleChangeFrom = newFrom => dispatch(ChangePreLoginTripDateFrom(newFrom));
	const handleChangeTo = newTo => dispatch(ChangePreLoginTripDateTo(newTo));

	return (

		<React.Fragment>
			<div className="d-flex align-items-center mt-2 mb-1">
				Approximate travel period:
			</div>

			<div className="d-flex align-items-center">
				<DesktopDatePicker
					className="m-2"
					OpenPickerButtonProps={{
						style: {
							color: "forestgreen",
							transform: "scale(1.3)",
						},
					}}
					label="Date from:"
					inputFormat="DD/MM/yyyy"
					value={from}
					onChange={handleChangeFrom}
					renderInput={(params) => (
						<TextField color="success" {...params} />
					)}
				/>

				<PalmStyled className="palm d-flex">🏝</PalmStyled>

				<DesktopDatePicker
					OpenPickerButtonProps={{
						style: {
							color: "forestgreen",
							transform: "scale(1.3)",
						},
					}}
					label="Date to:"
					inputFormat="DD/MM/yyyy"
					value={to}
					onChange={handleChangeTo}
					renderInput={(params) => (
						<TextField color="success" {...params} />
					)}
				/>
			</div>
		</React.Fragment>
	);
};

export default PrelLoginPeriodComponent;
