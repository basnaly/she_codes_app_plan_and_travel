import React from 'react';

import { useSelector } from 'react-redux';
import { ChangeSelectedPayment } from '../../../Actions/ExpencesAction';
import DropDownSelection from './DropDownSelection';

const PaymentSelection = () => {

    const selectedPayment = useSelector(state => state?.expences?.selectedPayment);
    const listPayments = useSelector(state => state?.expences?.listPayments);

    return (

        <DropDownSelection selectedOption={selectedPayment}
                            listOptions={listPayments}
                            ChangeSelectedOption={ChangeSelectedPayment}/>
    )
}

export default PaymentSelection;
