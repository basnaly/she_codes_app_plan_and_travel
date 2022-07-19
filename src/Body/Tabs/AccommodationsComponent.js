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

const ACCOMMODATION = [
    {
        id: 1,
        dateFrom: 1659830400000, //07/08/22
        dateTo: 1660348800000, //13/08/22
        accommodation: 'Novotel Canary Wharf',
        price: 7054,
        currency: '₪',
        notes: 'City View + Breackfast'
    },
    {
        id: 2,
        dateFrom: 1660348800000, //13/08/22
        dateTo: 1660953600000, //20/08/22
        accommodation: 'Pan Pacific London',
        price: 11272,
        currency: '₪',
        notes: 'Deluxe, River View, without Breakfast'
    },
]

const AccommodationsComponent = () => {

    const [field, meta, helpers] = useField('accommodations');

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <TabContentBox boxShadow={24} p={4} className="d-flex flex-column overflow-auto align-items-center mx-auto">
                <FieldArray name="accommodations"
                    render={({ remove, push }) => (
                        <div className="d-flex flex-column align-items-start">
                            {(field.value ?? []).map((el, i) => (
                                <div key={el.id} className="d-flex align-items-start my-2">
                                    <Field name={`accommodations[${i}].dateFrom`}
                                        component={FormikDateInput} label='Date from' />
                                    <Field name={`accommodations[${i}].dateTo`}
                                        component={FormikDateInput} className='ms-3' label='Date to' />
                                    <Field name={`accommodations[${i}].accommodation`}
                                        component={FormikTextInput} label='Type of accommodation' />
                                    <Field name={`accommodations[${i}].price`}
                                        component={FormikTextInput} type='number' label='Price' />
                                    <Field name={`accommodations[${i}].currency`}
                                        component={FormikAutocompleteInput} options={CURRENCY_OPTIONS} label='Currency' />
                                    <Field name={`accommodations[${i}].notes`}
                                        component={FormikTextInput} multiline label='Notes' />

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
                                Add new accommodation
                            </GreenButton>
                        </div>
                    )}>
                </FieldArray>

            </TabContentBox>
        </LocalizationProvider>
    )
}

export default AccommodationsComponent;
