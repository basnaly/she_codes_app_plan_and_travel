import React from "react";

import AuthenticationForm from "./AuthenticationForm";

const LoginComponent = () => {

    const Submit = () => {

    }

    return <AuthenticationForm Submit={ Submit}
                                title={ 'The log in form' }/>
}

export default LoginComponent;