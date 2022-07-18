import React from 'react';

import TextField from '@mui/material/TextField';

const FormikTextInput = ({ field, form, ...props }) => {

  return (

    <TextField 
        id="outlined-basic" 
        className="ms-3"
        color="success"
        variant="outlined" 
        sx={props.multiline ? {minWidth: '250px'} : {}}
        {...field} {...props}
    />
  )
}

export default FormikTextInput
