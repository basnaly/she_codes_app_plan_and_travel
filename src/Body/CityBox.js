import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import DeleteDialog from "./DeleteDialog";
import ViewComponent from "./ViewComponent";
import { BoxStyled, CityTitleStyled, GreenButton } from "../styles/MuiStyles";

import { GetTripData } from "../Actions/PlanTravelAction";

const CityBox = ({ el }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const editTrip = () => {

        navigate('/' + el.id + '/period');
        dispatch(GetTripData(el.id))

    };

    return (
        <BoxStyled  boxShadow={24} p={4} className="d-flex flex-column align-items-center m-3">
            <CityTitleStyled className="d-flex align-items-center">
                {el.city}
            </CityTitleStyled>

            <div className="d-flex align-items-center mt-3">
                <ViewComponent el={ el }/>

                <GreenButton
                    variant={'outlined'}
                    className=" mx-3" 
                    onClick={editTrip}>
                    Edit
                </GreenButton>

                <DeleteDialog el={el}/>
            </div>
        </BoxStyled>
    )
}

export default CityBox;