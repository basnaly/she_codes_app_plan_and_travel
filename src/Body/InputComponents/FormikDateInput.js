import React from 'react'

import TextField from '@mui/material/TextField';
import moment from "moment";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const FormikDateInput = ({ field, form, className = '', ...rest }) => {

    const { setFieldValue } = form
    const { value, name } = field

    return (
        <DesktopDatePicker className="m-2"
            id={name}
            OpenPickerButtonProps={{ style: { color: 'forestgreen', transform: 'scale(1.3)', margin: '-5px' } }}
            inputFormat="DD/MM/yyyy"
            {...field}
            {...rest}
            value={moment.unix(value)} // transform to moment object
            onChange={val => setFieldValue(name, val.unix())} // val.unix transfor from moment to timestamp
            renderInput={(params) => <TextField color="success" {...params} className={ className }/>} />
    )
}

export default FormikDateInput
