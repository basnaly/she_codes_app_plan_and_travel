import React from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { useField, FieldArray, Field } from 'formik';
import { GreenButton, TabContentBox } from '../../styles/MuiStyles';
import FormikDateInput from '../InputComponents/FormikDateInput';
import FormikTextInput from '../InputComponents/FormikTextInput';
import FormikNoItems from '../InputComponents/FormikNoItems';

const VisitingsComponent = () => {

    const [field, meta, helpers] = useField('visitings');

    return (

        <LocalizationProvider dateAdapter={AdapterMoment}>
            <TabContentBox boxShadow={24} p={4} className="d-flex flex-column overflow-auto align-items-center mx-auto px-0">

                <FieldArray name="visitings"
                    render={({ remove, push }) => (

                        <React.Fragment>

                            <div className="d-flex flex-column align-items-start overflow-auto px-3">
                                {(field.value ?? []).map((el, i) => (

                                    <div key={el.id} className="d-flex align-items-start my-2">

                                        <Field name={`visitings[${i}].date`}
                                            component={FormikDateInput} label='Date' />
                                        <Field name={`visitings[${i}].visit`}
                                            component={FormikTextInput} label='Places to visit' />
                                        <Field name={`visitings[${i}].notes`}
                                            component={FormikTextInput} label='Notes' />

                                        <IconButton color='error' aria-label="upload picture" component="span"
                                            className="d-flex align-items-center m-2 "
                                            onClick={() => remove(i)} >
                                            <DeleteOutlineIcon sx={{ fontSize: 30 }} />
                                        </IconButton>

                                    </div>
                                ))}

                                <FormikNoItems formikValue={field.value}
                                    item={'visitings'} />

                            </div>

                            <GreenButton className="d-flex align-items-center mx-auto mt-3"
                                variant={'outlined'}
                                size='small'
                                onClick={() => push({ id: new Date().getTime() })}>
                                Add new visiting
                            </GreenButton>


                        </React.Fragment>
                    )}>

                </FieldArray>

            </TabContentBox>
        </LocalizationProvider>
    )
}

export default VisitingsComponent;
