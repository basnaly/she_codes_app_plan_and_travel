
const initState = {

    listExpences: [],
    filteredExpences: [],

    listCurrencies: ['All'],
    selectedCurrency: 'All',

    listPayments: ['All'],
    selectedPayment: 'All',

    total: {}, // {"$": 50, 'euv': 25}

}

const ExpencesReducer = (state = initState, action) => {

    let totalByCurrency;

    switch(action.type) {

        case 'LOADED_EXPENCES_DATA':
            let paymentOptions = ['All', ...new Set((action?.listExpences ?? []).map(el => el.payment))];
            let currencyOptions = ['All', ...new Set((action?.listExpences ?? []).map(el => el.currency))];
            totalByCurrency = (action?.listExpences ?? []).reduce((acc, curr) => ({
                ...acc, [curr.currency]: (acc[curr.currency] ?? 0) + curr.price}), {})

            return {
                ...state,
                listExpences: (action?.listExpences ?? []),
                filteredExpences: [...(action?.listExpences ?? [])],
                listPayments: paymentOptions,
                listCurrencies: currencyOptions, 
                selectedCurrency: 'All',
                selectedPayment: 'All',
                total: totalByCurrency
            }

        case 'CHANGE_SELECTED_CURRENCY': 
            return {
                ...state,
                selectedCurrency: action.selectedCurrency
            }

        case 'CHANGE_SELECTED_PAYMENT':
            return {
                ...state,
                selectedPayment: action.selectedPayment
            }

        case 'CALCULATE':
            const filterExpences = state.listExpences.filter(el => 
                (el.currency === state.selectedCurrency || state.selectedCurrency ==='All')
                && (el.payment === state.selectedPayment || state.selectedPayment ==='All'));

                totalByCurrency = filterExpences.reduce((acc, expence) => { // args of reduce
                    const { currency, price } = expence; // category of  each expence
                    acc[currency] = acc[currency] ?? 0; // key, acc[currency] = {￡: 0} => in the first time
                    acc[currency] = acc[currency] + price; // {￡: 0 + 62}
                    console.log(price, currency, acc)
                    return acc;
                }, {});
               
            return {
                ...state,
                filteredExpences: filterExpences,
                total: totalByCurrency
            }

        default:
            return state
    }
}

export default ExpencesReducer;