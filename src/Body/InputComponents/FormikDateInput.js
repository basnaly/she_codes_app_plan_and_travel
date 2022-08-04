import React from 'react';

import moment from "moment";

import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const FormikDateInput = ({ field, form, className = '', ...rest }) => {

    const { setFieldValue } = form
    const { value, name } = field

    return (
        <DesktopDatePicker className="m-2"
            id={name}
            OpenPickerButtonProps={{ style: { color: 'forestgreen', transform: 'scale(1.3)', margin: '-5px' } }}
            inputFormat="DD/MM/yyyy"
            {...field} {...rest}
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
