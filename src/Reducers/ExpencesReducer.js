
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

    let totalObj;

    switch(action.type) {

        case 'LOADED_EXPENCES_DATA':
            let paymentOptions = ['All', ...new Set(action.listExpences.map(el => el.payment))];
            let currencyOptions = ['All', ...new Set(action.listExpences.map(el => el.currency))];

            return {
                ...state,
                listExpences: action.listExpences,
                listPayments: paymentOptions,
                listCurrencies: currencyOptions,
                filteredExpences: [...action.listExpences],
                
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

            const total = filterExpences.reduce((acc, curr) => 
                acc + curr.price, 0)

            totalObj = {[state.selectedCurrency]: total}
               
            return {
                ...state,
                filteredExpences: filterExpences,
                total: totalObj
            }

        default:
            return state
    }
}

export default ExpencesReducer;