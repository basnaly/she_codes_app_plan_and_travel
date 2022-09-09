import React, { useState } from "react";

import axios from "axios";

import { weatherApiKey } from "../../config";

import { useSelector } from "react-redux";

import { BlackButton, GreenButton } from "../../styles/MuiStyles";
import moment from "moment";
import WeatherDialog from "./WeatherDialog";

const WeatherComponent = () => {

	const city = useSelector((state) => state?.main?.preLoginTrip?.city);
	const country = useSelector((state) => state?.main?.preLoginTrip?.country);
	const from = useSelector((state) => state?.main?.preLoginTrip?.dateFrom);

	const [url, setUrl] = useState("");

	const [weatherData, setWeatherData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	
	const openDialog = () => setIsDialogOpen(true);

	const requestWeather = async () => {

		let startDate = from.format("YYYY-MM-DD");

		let endDate = moment(from).add(2, "days").format("YYYY-MM-DD");

		const requestURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city} ${country}/${startDate}/${endDate}?unitGroup=metric&key=${weatherApiKey}&contentType=json`;

		if (url === requestURL) {
			openDialog()
			return
		} 
		setUrl(requestURL)
		setLoading(true);

		try {
			const result = await axios.get(requestURL);

			const weatherResult = result?.data?.days.map((el) => ({
				date: moment.unix(el.datetimeEpoch).format("ll"),
				condition: el.conditions,
				icon: el.icon,
				description: el.description,
				temp: el.temp,
				tempMax: el.tempmax,
				tempMin: el.tempmin,
				precip: el.precip,
				precipProb: el.precipprob,
				snow: el.snow,
				windSpeed: el.windspeed,
				humidity: el.humidity,
			}));

			setWeatherData(weatherResult);
			openDialog();

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="d-flex flex-column align-items-center mt-3">
			<GreenButton
				variant={"outlined"}
				className="ms-2"
				onClick={requestWeather}
			>
				Get weather
			</GreenButton>

            <WeatherDialog weatherData={weatherData}
				isDialogOpen={isDialogOpen}
				setIsDialogOpen={setIsDialogOpen}
			/>

		</div>
	);
};

export default WeatherComponent;
