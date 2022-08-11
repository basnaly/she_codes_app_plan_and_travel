import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calculate } from '../../../Actions/ExpencesAction';

import { FilterView, GrayButton, PeriodView, ViewStyled } from '../../../styles/MuiStyles';
import CurrencySelection from './CurrencySelection';
import PaymentSelection from './PaymentSelection';


const CalculateExpences = () => {

    const selectedCurrency = useSelector(state => state?.expences?.selectedCurrency);
    const total = useSelector(state => state?.expences?.total);

    const dispatch = useDispatch();

    const calculate = () => {
        dispatch(Calculate())
    }

    return (

        <React.Fragment>
            <PeriodView className='my-3'>
                Filter expences summary:
            </PeriodView>

            <FilterView className='d-flex align-items-center align-self-stretch justify-content-evenly'>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center pe-2'>
                        Payment method:
                    </div>
                    <div className='d-flex align-items-center'>
                        <PaymentSelection />
                    </div>
                </div>

                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center pe-2'>
                        Currency:
                    </div>
                    <div className='d-flex align-items-center'>
                        <CurrencySelection />
                    </div>
                </div>

                <GrayButton
                    onClick={calculate}
                >
                    Calculate
                </GrayButton>

            </FilterView>

            <div className='d-flex flex-column align-items-center my-3'>
                <PeriodView className='d-flex align-items-center'>
                    Total amount: 
                </PeriodView>

                <ViewStyled className='d-flex flex-column align-items-center'>
                    {Object.keys(total).map(el => 
                        <div key={el}>
                            {total[el]} {el}
                        </div>
                    )
                    } 
                </ViewStyled>
            </div>

        </React.Fragment>
    )
}

export default CalculateExpences;
