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

const TRANSPORTATIONS = [
    {
        id: 1,
        date: 1659866738000,
        transport: 'British Airways BA164',
        price: 1370,
        currency: '$',
        notes: '7:10, Monday'
    },
    {
        id: 2,
        date: 1659953138000,
        transport: 'Underground',
        price: 50,
        currency: '£',
        notes: 'Oyster card'
    },
]

const TransportationsComponent = () => {

    const [field, meta, helpers] = useField('transportations');

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <TabContentBox boxShadow={24} p={4} className="d-flex flex-column overflow-auto align-items-center mx-auto">
                <FieldArray name="transportations">
                    {({ remove, push }) => (
                        <div className="d-flex flex-column align-items-start ">
                            {(field.value ?? []).map((el, i) =>
                                    <div key={el.id} className="d-flex align-items-start my-2" >
                                        <Field name={`transportations[${i}].date`} 
                                            component={FormikDateInput} label="Date" />
                                        <Field name={`transportations[${i}].transport`} 
                                            component={FormikTextInput} label='Type of transport' />
                                        <Field name={`transportations[${i}].price`} 
                                            component={FormikTextInput} type='number' label='Price' />
                                        <Field name={`transportations[${i}].currency`} 
                                            component={FormikAutocompleteInput} options={CURRENCY_OPTIONS} label='Currency' />
                                        <Field name={`transportations[${i}].notes`} 
                                            component={FormikTextInput} label='Notes' />

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
                                Add new transportation
                            </GreenButton>
                        </div>
                    )}
                </FieldArray>
            </TabContentBox>
        </LocalizationProvider>
    )
}

export default TransportationsComponent;
