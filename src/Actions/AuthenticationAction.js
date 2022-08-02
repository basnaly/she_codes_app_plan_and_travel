import axios from 'axios';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import config from './config';
import { SaveInitialTrip } from './PlanTravelAction';

export const SaveUser = (userId, userEmail) => {
    return {
        type: 'SAVE_USER',
        userId,
        userEmail
    }
}

export const SetAuthError = (authError) => {
    return {
        type: 'SET_AUTH_ERROR',
        authError
    }
}

export const RegisterWithBackend = (email, password) => {

    return (dispatch, getState) => {

        dispatch({
            type: 'SET_IS_AUTH_LOADING'
        })

        axios.post('/auth/register', { email, password })

            .then(result => {
                console.log(result)

                let token = result?.data?.accessToken
                sessionStorage.setItem('authToken', token)

                let userId = result?.data?.id;
                let email = result?.data?.email;

                dispatch(SaveUser(userId, email))
                //dispatch(SaveInitialTrip(userId))
            })

            .catch(error => {
                console.log(error)
                dispatch(SetAuthError(error?.response?.data?.message))
            })
    }
}

export const LoginWithBackend = (email, password) => {

    return (dispatch, getState) => {

        dispatch({
            type: 'SET_IS_AUTH_LOADING'
        })

        axios.post('/auth/login', {email, password})

            .then(result => {
                console.log(result)
        
            let token = result?.data?.accessToken
            sessionStorage.setItem('authToken', token);

            let userId = result?.data?.id;
            let email = result?.data?.email;

            dispatch(SaveUser(userId, email))
            // dispatch(SaveInitialTrip(userId))
            })

            .catch(error => {
                console.log(error)
                dispatch(SetAuthError(error?.response?.data?.message))
            })
    }
}

export const CheckUserWithBackend = () => {

    return (dispatch, getState) => {

        dispatch({
            type: 'SET_IS_AUTH_LOADING'
        })

        axios.get('/auth/check-user', config)

        .then(result => {

            let userId = result?.data?.id;
            let email = result?.data?.email;

            dispatch(SaveUser(userId, email))
        })

        .catch(error => {
            console.log(error)
            
        })
    }
}

