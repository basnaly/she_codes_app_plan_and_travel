import { useFormikContext } from "formik";
import React from "react";

import { YellowButton } from "../styles/MuiStyles";

const ControlButtonsComponent = () => {

    const { values, submitForm, resetForm, dirty } = useFormikContext();
 
    return (
        <React.Fragment>
            <YellowButton onClick={submitForm}
                variant={'outlined'}
                disabled={!dirty}
                className="log m-3 me-2">
                Save
            </YellowButton>
            
            <YellowButton onClick={resetForm}
                variant={'outlined'}
                disabled={!dirty}
                className="log m-3 me-4 ">
                Discard
            </YellowButton>
        </React.Fragment>
    )
}

export default ControlButtonsComponent;