import React, { useEffect, useState } from "react";

import CityBox from "./CityBox";
import AddCity from "./AddCity";
import { useDispatch, useSelector } from "react-redux";
import { GetListTrips } from "../Actions/PlanTravelAction";
import { CircularProgress } from "@mui/material";
import { NoTripStyled } from "../styles/MuiStyles";
import FlipMove from "react-flip-move";

const MainScreen = () => {

	const filterValue = useSelector((state) => state?.main?.filterValue);

	const listTrips = useSelector((state) => state?.main?.listTrips
		.filter(el => el.period === filterValue || filterValue === 'All'));

	const isLoadingListTrips = useSelector(
		(state) => state?.main?.isLoadingListTrips
	);
	const userId = useSelector((state) => state?.auth?.userId);

	const dispatch = useDispatch();

	let sortedListTrips = [];

	const [sortUp, setSortUp] = useState(true);

	if (!sortUp) {
		sortedListTrips = listTrips.sort((a, b) =>
			b.city.localeCompare(a.city)
		);
	} else {
		sortedListTrips = listTrips.sort((a, b) =>
			a.city.localeCompare(b.city)
		);
	}

	useEffect(() => {
		if (userId) {
			dispatch(GetListTrips()); // send request to firebase to get list of listTrips and save them in redux
		}
	}, [userId]);

	return (
		<div className="d-flex flex-column align-items-center overflow-auto">
			<AddCity setSortUp={setSortUp} sortUp={sortUp} />

			{isLoadingListTrips && <CircularProgress color="success" />}
            
			<FlipMove className="overflow-auto d-flex flex-wrap align-items-center justify-content-evenly">
				{sortedListTrips.map((el) => (
					<div key={el.id}>
						<CityBox el={el} />
					</div>
				))}
			</FlipMove>

			{listTrips.length !== 0 ? (
				""
			) : (
				<NoTripStyled>
					You don't have any trips. Let's start adding!
				</NoTripStyled>
			)}
		</div>
	);
};

export default MainScreen;
