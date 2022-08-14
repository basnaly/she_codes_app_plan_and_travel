import React from "react";
import { useSelector } from "react-redux";
import { TimeStyled, UserStyled } from "../styles/MuiStyles";

const GreetingComponent = () => {

    const userUsername = useSelector(state => state?.auth?.username)

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
				{nowTime},
			</TimeStyled>
            
			<UserStyled className="d-flex flex-column align-items-center mb-2">
				{userUsername} !
			</UserStyled>
		</div>
	);
};

export default GreetingComponent;
