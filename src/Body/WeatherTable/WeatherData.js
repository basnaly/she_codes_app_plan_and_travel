import { Tooltip } from "@mui/material";
import React from "react";
import { DateDataStyled, DivStyled, WeatherDataStyled } from "../../styles/MuiStyles";

const WeatherData = ({ weatherData = [] }) => {

	return (

		<React.Fragment>
			{weatherData.map((el) => (
				<DivStyled
					className="d-flex flex-column align-items-center"
					key={el.date}
				>
					<DateDataStyled className="d-flex align-items-end px-3 mb-3">
						{el.date}
					</DateDataStyled>

					<WeatherDataStyled className="d-flex align-items-center mx-1">
                        <Tooltip title={el.condition}
                            placement="left">
						    <img src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${el.icon}.png`} />
                        </Tooltip>
					</WeatherDataStyled>

					<WeatherDataStyled className="d-flex align-items-center mx-1">
                        {el.tempMin} - {el.tempMax}
					</WeatherDataStyled>
					
					<WeatherDataStyled className="d-flex align-items-center mx-1">
						{el.precip} / {el.precipProb}
					</WeatherDataStyled>

					<WeatherDataStyled className="d-flex align-items-center mx-1">
						{el.windSpeed}
					</WeatherDataStyled>

					<WeatherDataStyled className="d-flex align-items-center mx-1">
						{el.humidity}
					</WeatherDataStyled>
				</DivStyled>
			))}
		</React.Fragment>
	);
};

export default WeatherData;
