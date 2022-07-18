import React from 'react';

import TextField from '@mui/material/TextField';
import { Autocomplete } from "@mui/material";

const options = ['$', '€', '￡', '₣', '￥', '₪'];

const FormikCurrencyInput = ({ field, form, ...props }) => {

    const { setFieldValue } = form
    const { value, name } = field

    return (

        <div className="d-flex align-items-center me-3">
            <Autocomplete
                id="free-solo-demo"
                sx={{ maxWidth: '100px' }}
                freeSolo
                options={options}
                renderInput={(params) =>

                    <TextField id="outlined-basic"
                        className="ms-3"
                        variant="outlined"
                        color="success"
                        size='small'
                        label="Currency"
                        type="text"
                        onChange={e => setFieldValue(name, e.target.value)}
                        {...params}
                    />}

                {...field} {...props}
                onChange={(_, text) => setFieldValue(name, text)}
            />
        </div>
    )
}

export default FormikCurrencyInput;
