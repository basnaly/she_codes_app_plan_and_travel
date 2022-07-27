import React from 'react';

import { useSelector } from 'react-redux';

import { ChangeSelectedCurrensy } from '../../../Actions/ExpencesAction';
import DropDownSelection from './DropDownSelection';

const CurrencySelection = () => {

	const listCurrencies = useSelector(state => state?.expences?.listCurrencies);
	const selectedCurrency = useSelector(state => state?.expences?.selectedCurrency);

	return (

		<DropDownSelection selectedOption={selectedCurrency}
							listOptions={listCurrencies}
							ChangeSelectedOption={ChangeSelectedCurrensy}/>
	)
}

export default CurrencySelection;
