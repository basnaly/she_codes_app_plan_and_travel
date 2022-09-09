import React from "react";
import { DateTitleStyled, DivStyled, WeatherTitleStyled } from "../../styles/MuiStyles";

const WeatherTitle = () => {

	return (
        
		<DivStyled className="d-flex flex-column align-items-start">

			<DateTitleStyled className="d-flex text-center justify-content-center w-100 align-items-end px-3 mb-3">
				Date
			</DateTitleStyled>

			<WeatherTitleStyled className="d-flex align-items-center mx-1">
				Condition
			</WeatherTitleStyled>

			<WeatherTitleStyled className="d-flex align-items-center mx-1">
				Min / Max temperature, ℃
			</WeatherTitleStyled>
			
			<WeatherTitleStyled className="d-flex align-items-center mx-1">
				Precip, mm /
				probability, %
			</WeatherTitleStyled>
			
			<WeatherTitleStyled className="d-flex align-items-center mx-1">
				Wind speed, km/h
			</WeatherTitleStyled>

			<WeatherTitleStyled className="d-flex align-items-center mx-1">
				Humidity, %
			</WeatherTitleStyled>
		</DivStyled>
	);
};

export default WeatherTitle;
