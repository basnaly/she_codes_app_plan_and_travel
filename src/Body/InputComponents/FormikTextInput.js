import React from 'react';

import { TextFieldStyled } from '../../styles/MuiStyles';

const FormikTextInput = ({ field, form, ...props }) => {

	return (

		<TextFieldStyled
			id="outlined-basic"
			className="ms-3"
			color="success"
			variant="outlined"
			sx={props.multiline ? { minWidth: '250px' } : {}}
			{...field} {...props}
		/>
	)
}

export default FormikTextInput
