
const initState = {
    userId: '',
    username: '',
    email: '',
    authError: '',
    isAuthLoading: false,
}

const AuthenticationRedicer = (state = initState, action) => {
    switch (action.type) {

        case 'SAVE_USER':
            return {
                ...state,
                username: action.username,
                userId: action.userId,
                email: action.userEmail,
                authError: '',
                isAuthLoading: false
            }
        
        case 'SET_AUTH_ERROR':
            return {
                ...state,
                authError: action.authError,
                isAuthLoading: false
            }
            
        case 'SET_IS_AUTH_LOADING':
            return {
                ...state,
                isAuthLoading: true
            }

        default:
            return state
    }
}

export default AuthenticationRedicer;