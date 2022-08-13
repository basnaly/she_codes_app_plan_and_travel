import React from "react";
import { useSelector } from "react-redux";
import { EmailStyled, TimeStyled } from "../styles/MuiStyles";

const GreetingComponent = () => {

    const email = useSelector(state => state?.auth?.email)

    let nowTime = new Date().getHours()

    if (nowTime >= 5 && nowTime < 12) {
        nowTime = "Good morning"
    } else if (nowTime >= 12 && nowTime < 18) {
        nowTime = "Good afternoon"
    } else if (nowTime >= 18 && nowTime < 22) {
        nowTime = "Good evening"
    } else {
        nowTime = "Good night"
    }

	return (

		<div className="d-flex flex-column align-items-center mx-3">
			<TimeStyled className="d-flex flex-column align-items-center ">
				{nowTime}
			</TimeStyled>
			<EmailStyled className="d-flex flex-column align-items-center mb-2">
				{email} !
			</EmailStyled>
		</div>
	);
};

export default GreetingComponent;
