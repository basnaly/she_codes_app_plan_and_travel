import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const FormikCheckbox = ({ field, form, ...props }) => {

	return (

		<div>
			<Checkbox
				className="ms-3"
				color="success"
				{...field} {...props}
			/>
		</div>
	)
}

export default FormikCheckbox;
