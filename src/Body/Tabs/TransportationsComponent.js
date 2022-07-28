import React from 'react';

import { useField, FieldArray, Field } from 'formik';
import { GreenButton, TabContentBox } from '../../styles/MuiStyles';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import FormikDateInput from '../InputComponents/FormikDateInput';
import FormikTextInput from '../InputComponents/FormikTextInput';
import FormikAutocompleteInput from '../InputComponents/FormikAutocompleteInput';
import { CURRENCY_OPTIONS } from '../../constants';

const TransportationsComponent = () => {

    const [field, meta, helpers] = useField('transportations');

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <TabContentBox boxShadow={24} p={4} className="d-flex flex-column overflow-auto align-items-center mx-auto pe-0">

                <FieldArray name="transportations">
                    {({ remove, push }) => (

                        <React.Fragment>

                            <div className="d-flex flex-column align-items-start overflow-auto pe-3">
                                {(field.value ?? []).map((el, i) =>

                                    <div key={el.id} className="d-flex align-items-start my-2" >

                                        <Field name={`transportations[${i}].date`}
                                            component={FormikDateInput} label="Date" />

                                        <Field name={`transportations[${i}].transport`}
                                            component={FormikTextInput} label='Type of transport' />

                                        <Field name={`transportations[${i}].price`} sx={{ maxWidth: '80px' }}
                                            component={FormikTextInput} type='number' label='Price' />

                                        <Field name={`transportations[${i}].currency`} sx={{ maxWidth: '80px' }}
                                            component={FormikAutocompleteInput}
                                            options={CURRENCY_OPTIONS} label='Currency' />

                                        <Field name={`transportations[${i}].notes`}
                                            component={FormikTextInput} label='Notes' />

                                        <IconButton color='error' aria-label="upload picture" component="span"
                                            className="d-flex align-items-center m-2 "
                                            onClick={() => remove(i)} >
                                            <DeleteOutlineIcon sx={{ fontSize: 30 }} />
                                        </IconButton>
                                    </div>
                                )}
                            </div>

                            <GreenButton className="d-flex align-items-center mx-auto mt-3"
                                variant={'outlined'}
                                size='small'
                                onClick={() => push({ id: new Date().getTime() })}>
                                Add new transportation
                            </GreenButton>

                        </React.Fragment>
                    )}
                </FieldArray>
            </TabContentBox>
        </LocalizationProvider>
    )
}

export default TransportationsComponent;
