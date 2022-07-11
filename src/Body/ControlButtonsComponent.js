import React from "react";

import { Button } from "@mui/material";
import { styled } from "@mui/material";

const SaveDiscardButtons = styled(Button)({
    textTransform: 'none',
    color: 'yellow',
    border: '1px solid yellow',
    fontSize: '16px',
    backgroundColor: "transparent",
    padding: '1px 10px',
})

const ControlButtonsComponent = () => {
    
    return (
        <React.Fragment>
            <SaveDiscardButtons
                variant={'outlined'}
                className="m-3">
                Save
            </SaveDiscardButtons>
            
            <SaveDiscardButtons
                variant={'outlined'}
                className="m-3">
                Discard
            </SaveDiscardButtons>
        </React.Fragment>
    )
}

export default ControlButtonsComponent;