import React from 'react';

const FormikNoItems = ({ formikValue, item }) => {

    if (!formikValue || formikValue.length === 0) {
        return (
            <div className=''>
                You don't have any {item} yet
            </div>
        )
    } 
    return ''
}

export default FormikNoItems;
