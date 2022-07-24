import React from 'react';
import { Field, FieldArray, useField } from 'formik';
import FormikTextareaInput from '../InputComponents/FormikTextareaInput';
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { GreenButton, TabContentBox } from '../../styles/MuiStyles';

const CommentsComponent = () => {

    const [field, meta, helpers] = useField('comments');

    return (

        <TabContentBox boxShadow={24} p={4} className="d-flex flex-column overflow-auto align-items-center mx-auto">

            <FieldArray name='comments'
                render={({ push, remove }) => (

                    <div className="d-flex flex-column align-items-start">
                        {(field.value ?? []).map((el, i) =>

                            <div key={el.id} className="d-flex align-items-start my-2">
                                <Field name={`comments[${i}].comment`}
                                    component={FormikTextareaInput} type="text" />

                                <IconButton color='error' aria-label="upload picture" component="span"
                                    className="d-flex align-items-center m-2 "
                                    onClick={() => remove(i)} >
                                    <DeleteOutlineIcon sx={{ fontSize: 30 }} />
                                </IconButton>
                            </div>
                        )}
                        <GreenButton className="d-flex align-items-center mx-auto mt-3"
                            variant={'outlined'}
                            size='small'
                            onClick={() => push({ id: new Date().getTime() })}>
                            Add new comments
                        </GreenButton>
                    </div>
                )}
            />

        </TabContentBox>
    )
}

export default CommentsComponent;
