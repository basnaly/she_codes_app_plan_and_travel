import React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useField, FieldArray, Field } from 'formik';

import FormikDateInput from '../InputComponents/FormikDateInput';
import FormikTextInput from '../InputComponents/FormikTextInput';
import { CURRENCY_OPTIONS, PAYMENT_OPTIONS } from '../../constants';
import { GreenButton, TabContentBox } from '../../styles/MuiStyles';
import { IconButton } from '@mui/material';
import FormikAutocompleteInput from '../InputComponents/FormikAutocompleteInput';

const ExpencesComponent = () => {

    const [field, meta, helpers] = useField('expences');

    return (

        <LocalizationProvider dateAdapter={AdapterMoment}>
            <TabContentBox boxShadow={24} p={4} className="d-flex flex-column overflow-auto align-items-center mx-auto">

                <FieldArray name="expences"
                    render={({ push, remove }) => (

                        <div className="d-flex flex-column align-items-start">
                            {(field.value ?? []).map((el, i) => (

                                <div key={el.id} className="d-flex align-items-start my-2">
                                    <Field name={`expences[${i}].date`}
                                        component={FormikDateInput} label='Transaction date' />

                                    <Field name={`expences[${i}].product`}
                                        component={FormikTextInput} label='Product/service' />

                                    <Field name={`expences[${i}].price`} sx={{ maxWidth: '100px' }}
                                        component={FormikTextInput} type='number' label='Price' />

                                    <Field name={`expences[${i}].currency`} sx={{ maxWidth: '100px' }}
                                        component={FormikAutocompleteInput} label='Currency'
                                        options={CURRENCY_OPTIONS} />

                                    <Field name={`expences[${i}].payment`} sx={{ minWidth: '150px' }}
                                        component={FormikAutocompleteInput} label='Payment mathod'
                                        options={PAYMENT_OPTIONS} />

                                    <Field name={`expences[${i}].notes`}
                                        component={FormikTextInput} label='Notes' />

                                    <IconButton color='error' aria-label="upload picture" component="span"
                                        className="d-flex align-items-center m-2 "
                                        onClick={() => remove(i)} >
                                        <DeleteOutlineIcon sx={{ fontSize: 30 }} />
                                    </IconButton>
                                </div>
                            ))}

                            <GreenButton className="d-flex align-items-center mx-auto mt-3"
                                variant={'outlined'}
                                size='small'
                                onClick={() => push({ id: new Date().getTime() })}>
                                Add new expence
                            </GreenButton>

                        </div>
                    )}>
                </FieldArray>

            </TabContentBox>
        </LocalizationProvider>
    )
}

export default ExpencesComponent;
