import React, { useState } from "react";
import { BlackSmallButton, PeriodView, TableStyled } from "../../styles/MuiStyles";

import axios from "axios";

import { weatherApiKey } from "../../config";

import { useSelector } from "react-redux";

import moment from "moment";

import WeatherData from "../WeatherTable/WeatherData";
import WeatherTitle from "../WeatherTable/WeatherTitle";

const ViewWeather = () => {
	const city = useSelector((state) => state?.main?.trip?.city);
	const country = useSelector((state) => state?.main?.trip?.country);
	const from = useSelector((state) =>
		moment(state?.main?.trip?.period?.from)
	);

	const [url, setUrl] = useState("");

	const [weatherData, setWeatherData] = useState([]);
	const [loading, setLoading] = useState(false);

	const requestWeather = async () => {
		let startDate = moment();

		if (from.isAfter(startDate)) {
			startDate = from;
		}

		let endDate = moment(startDate).add(2, "days").format("YYYY-MM-DD");

		startDate = startDate.format("YYYY-MM-DD");

		const requestURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city} ${country}/${startDate}/${endDate}?unitGroup=metric&key=${weatherApiKey}&contentType=json`;

		if (url === requestURL) {
			return;
		}
		setUrl(requestURL);
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
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	if (weatherData.length !== 0) {
		return (
			<React.Fragment>
				<PeriodView className="mt-2 mb-2">
					The average weather:
				</PeriodView>

				<TableStyled className="d-flex align-items-center pb-0">
					<WeatherTitle />

					<WeatherData weatherData={weatherData} />
				</TableStyled>
			</React.Fragment>
		);
	}

	return (
		<BlackSmallButton
			variant={"outlined"}
			className="mx-auto my-3"
			onClick={requestWeather}
			size="small"
		>
			Get weather
		</BlackSmallButton>
	);
};

export default ViewWeather;
