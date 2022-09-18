import React from 'react';

import moment from "moment";

import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useField } from 'formik';

const FormikDateInput = ({ field, form, maxField, minField, className = '', ...rest }) => {

    const { setFieldValue } = form
    const { value, name } = field

    const [maxValue] = useField(maxField); // {name: undefined, value: {trip}}
    const [minValue] = useField(minField); // {name: period.from, value: "2022-10-24"}
    
    let maxMin = {};

    console.log(maxValue.name, minValue.name) // (undefined, period.from)

    if (maxValue.name) { // undefined
        maxMin.maxDate = moment(maxValue.value)
    }
    if (minValue.name) { // period.from
        maxMin.minDate = moment(minValue.value)
    }
    console.log(maxMin.minDate) // Oct 24 2022

    return (
        <DesktopDatePicker className="m-2"
            id={name}
            OpenPickerButtonProps={{ style: { color: 'forestgreen', transform: 'scale(1.3)', margin: '-5px' } }}
            inputFormat="DD/MM/yyyy"
            {...field} {...rest} {...maxMin}
            value={moment(value)} 
            onChange={val => setFieldValue(name, val)}
            renderInput={(params) => 
                
                <TextField 
                    color="success" 
                    {...params} 
                    className={ className }
                />
            } 
        />
    )
}

export default FormikDateInput
