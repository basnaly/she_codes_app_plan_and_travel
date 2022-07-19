import React from 'react';

import { Autocomplete, TextField } from "@mui/material";

const FormikAutocompleteInput = ({ field, form, options, label, ...props }) => {

    const { setFieldValue } = form;
    const { value, name } = field

    return (
        <div className="d-flex align-items-center me-3">
            <Autocomplete
                id="free-solo-demo"
                sx={{ maxWidth: '100px' }}
                freeSolo
                options={options}
                renderInput={(params) =>

                    <TextField 
                        id="outlined-basic"
                        className="ms-3"
                        variant="outlined"
                        color="success"
                        size='small'
                        label={label}
                        type="text"
                        {...params} {...field} {...props}
                    />}

                {...field} {...props}
                onChange={(_, text) => setFieldValue(name, text)}
            />
        </div>
    );
}

export default FormikAutocompleteInput;
