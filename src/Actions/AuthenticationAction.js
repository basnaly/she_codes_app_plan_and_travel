import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { SaveInitialTrip } from './PlanTravelAction';

export const SaveUser = (userId, userEmail) => {
    return {
        type: 'SAVE_USER',
        userId,
        userEmail
    }
}

export const SigninWithFirebase = (email, password) => {

    return (dispatch, getState) => {

        dispatch({
            type: 'SET_IS_AUTH_LOADING'
        })

        const authentication = getAuth();

        signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                let userId = response.user.uid;
                let userEmail = response.user.email

                dispatch(SaveUser(userId, userEmail));
                dispatch(SaveInitialTrip(userId))
            })
            .catch((error) => {
                let authError = '';
                if (error.code === 'auth/wrong-password') {
                    authError = 'Please check the Password and Email';
                }
                if (error.code === 'auth/invalid-email') {
                    authError = 'Please check the Password and Email';
                }
                if (error.code === 'auth/user-not-found') {
                    authError = 'Please check the Password and Email';
                }
                if (error.code === 'auth/email-already-in-use') {
                    authError = 'Email already in use'
                }

                dispatch(SetAuthError(authError))
            })
    }
}

export const SetAuthError = (authError) => {
    return {
        type: 'SET_AUTH_ERROR',
        authError
    }
}

export const RegisterWithFirebase = (email, password) => {

    return (dispatch, getState) => {

        dispatch({
            type: 'SET_IS_AUTH_LOADING'
        })
    
        const authentication = getAuth();

        createUserWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                let userId = response.user.uid
                let userEmail = response.user.email

                dispatch(SaveUser(userId, userEmail))
                dispatch(SaveInitialTrip(userId))
            })
            .catch((error) => {
                let authError = '';
                if (error.code === 'auth/wrong-password') {
                    authError = 'Please check the Password and Email';
                }
                if (error.code === 'auth/invalid-email') {
                    authError = 'Please check the Password and Email';
                }
                if (authError === 'auth/user-not-found') {
                    authError = 'Please check the Password and Email'
                }
                if (error.code === 'auth/email-already-in-use') {
                    authError = 'Email Already in Use';
                }

                dispatch(SetAuthError(authError))
            })
    }
}