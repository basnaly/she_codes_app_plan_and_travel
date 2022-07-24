import React from 'react';

import { TextareaAutosizeStyled } from '../../styles/MuiStyles';

const FormikTextareaInput = ({field, form, ...props}) => {

    return (

        <TextareaAutosizeStyled
            aria-label="minimum height"
            minRows={3}
            placeholder="Add your comment, at most 1 link per comment"
            style={{ width: 400 }}
            autoFocus
            {...field} {...props} >
        </TextareaAutosizeStyled>
    )
}

export default FormikTextareaInput;
