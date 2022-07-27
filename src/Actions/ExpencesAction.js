
export const LoadedExpencesData = (listExpences) => {
    return {
        type: 'LOADED_EXPENCES_DATA',
        listExpences
    }
}

export const ChangeSelectedCurrensy = (selectedCurrency) => {
    return {
        type: 'CHANGE_SELECTED_CURRENCY',
        selectedCurrency
    }
}

export const ChangeSelectedPayment = (selectedPayment) => {
    return {
        type: 'CHANGE_SELECTED_PAYMENT',
        selectedPayment
    }
}

export const Calculate = () => {
    return {
        type: 'CALCULATE',
    }
}