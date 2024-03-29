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
import FormikNoItems from '../InputComponents/FormikNoItems';

const AccommodationsComponent = () => {

    const [field, meta, helpers] = useField('accommodations');

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <TabContentBox boxShadow={24} p={4} className="d-flex flex-column overflow-auto align-items-center mx-auto px-0">

                <FieldArray name="accommodations"
                    render={({ remove, push }) => (

                        <React.Fragment>

                            <div className="d-flex flex-column align-items-start overflow-auto px-3">
                                {(field.value ?? []).map((el, i) => (

                                    <div key={el.id} className="d-flex align-items-start my-2">
                                        <Field name={`accommodations[${i}].dateFrom`} maxField={`accommodations[${i}].dateTo`}
                                            component={FormikDateInput} label='Date from' />

                                        <Field name={`accommodations[${i}].dateTo`} minField={`accommodations[${i}].dateFrom`}
                                            component={FormikDateInput} className='ms-3' label='Date to' />

                                        <Field name={`accommodations[${i}].accommodation`}
                                            component={FormikTextInput} label='Type of accommodation' />

                                        <Field name={`accommodations[${i}].price`} sx={{ maxWidth: '100px' }}
                                            component={FormikTextInput} type='number' label='Price' />

                                        <Field name={`accommodations[${i}].currency`} sx={{ maxWidth: '100px' }}
                                            component={FormikAutocompleteInput}
                                            options={CURRENCY_OPTIONS} label='Currency' />

                                        <Field name={`accommodations[${i}].notes`}
                                            component={FormikTextInput} multiline label='Notes' />

                                        <IconButton color='error' aria-label="upload picture" component="span"
                                            className="d-flex align-items-center m-2 "
                                            onClick={() => remove(i)} >
                                            <DeleteOutlineIcon sx={{ fontSize: 30 }} />
                                        </IconButton>
                                    </div>
                                ))}

                                <FormikNoItems formikValue={field.value}
                                    item={'accomodations'} />

                            </div>

                            <GreenButton className="d-flex align-items-center mx-auto mt-3"
                                variant={'outlined'}
                                size='small'
                                onClick={() => push({ id: new Date().getTime() })}>
                                Add new accommodation
                            </GreenButton>

                        </React.Fragment>
                    )}>
                </FieldArray>

            </TabContentBox>
        </LocalizationProvider>
    )
}

export default AccommodationsComponent;
