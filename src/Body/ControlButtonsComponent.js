import React from "react";

import { YellowButton } from "../styles/MuiStyles";

const ControlButtonsComponent = () => {
    
    return (
        <React.Fragment>
            <YellowButton
                variant={'outlined'}
                className="log m-3 me-2">
                Save
            </YellowButton>
            
            <YellowButton
                variant={'outlined'}
                className="log m-3 me-4 ">
                Discard
            </YellowButton>
        </React.Fragment>
    )
}

export default ControlButtonsComponent;