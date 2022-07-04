import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, 
    Navigate, useNavigate 
} from "react-router-dom";

import LoginComponent from "./LoginComponents";
import RegisterComponent from "./RegisterComponent";
import PlanTravelComponent from "./PlanTravelComponent";

const ContentRouting = () => {

    return (
        <Routes>
            <Route path='/register' element={ <RegisterComponent /> } />
            <Route path='/login' element={ <LoginComponent />} />    
            <Route path='/' element={ <PlanTravelComponent /> } />
            <Route exact path="*" 
                element={<Navigate replace to="/" />} />
        </Routes>
    )
}

export default ContentRouting;