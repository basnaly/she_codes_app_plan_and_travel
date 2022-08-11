import React from "react";

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { Field } from "formik";
import FormikDateInput from "../InputComponents/FormikDateInput";

import { PalmStyled, PeriodTitle, TabContentBox } from "../../styles/MuiStyles";

const PeriodComponent = () => {

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>

            <TabContentBox boxShadow={24} p={4} className="d-flex flex-column align-items-center mx-auto">
                <div className="d-flex flex-column align-items-center">
                    <PeriodTitle className="d-flex align-items-center mb-4">
                        The travel period:
                    </PeriodTitle>

                    <div className="d-flex align-items-center">

                        <Field name={'period.from'} component={FormikDateInput} label="Date from" />
                            
                        <PalmStyled className="d-flex">🏝</PalmStyled>

                        <Field name={'period.to'} component={FormikDateInput} label="Date to" />

                    </div>
                </div>
            </TabContentBox>
        </LocalizationProvider>
    )
}

export default PeriodComponent;