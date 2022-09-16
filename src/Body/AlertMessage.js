import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { SetAlertMessage } from "../Actions/PlanTravelAction";

const AlertMessage = () => {

	const alertMessage = useSelector((state) => state?.main?.alertMessage);
	const alertSeverity = useSelector((state) => state?.main?.alertSeverity);

	const dispatch = useDispatch();

    useEffect(() => {

        if (alertMessage) {
            
            setTimeout(() => {
                dispatch(SetAlertMessage())
            }, 5000)
        }  

    }, [alertMessage]);

	return (
		<React.Fragment>
			{alertMessage && (
				<Alert
					severity={alertSeverity}
					className="mx-auto my-1"
					onClose={() => dispatch(SetAlertMessage())}
					elevation={6}
				>
					<AlertTitle>{alertSeverity}</AlertTitle>
					{alertMessage}
				</Alert>
			)}
		</React.Fragment>
	);
};

export default AlertMessage;
