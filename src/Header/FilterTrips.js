import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { YellowButton } from "../styles/MuiStyles";
import { SetFilterValue } from "../Actions/PlanTravelAction";

let filterValueOptions = ["All", "Future", "Current", "Past"];

const FilterTrips = () => {

	const filterValue = useSelector((state) => state?.main?.filterValue);

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const dispatch = useDispatch();

	const filterTrips = (newFilterValue) => {
		setAnchorEl(null);
		dispatch(SetFilterValue(newFilterValue));
	};

	return (
		<div>
			<YellowButton
				data-testid="filter-button"
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				Filter
			</YellowButton>
			<Menu
				data-testid="filter-dropdown"
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{filterValueOptions.map((el, index) => (
					<MenuItem 
						key={el} 
						onClick={() => filterTrips(el, index)}
						selected={el === filterValue}
					>
						{el}
					</MenuItem>
				))}	
			</Menu>
		</div>
	);
};

export default FilterTrips;
