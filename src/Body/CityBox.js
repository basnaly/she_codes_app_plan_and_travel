import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import DeleteDialog from "./DeleteDialog";
import ViewComponent from "./ViewComponent";
import { BoxStyled, ChipStyled, CityTitleStyled, GreenButton } from "../styles/MuiStyles";

import { GetTripData } from "../Actions/PlanTravelAction";

const CityBox = ({ el }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const editTrip = () => {

        navigate('/' + el.id + '/period');
        dispatch(GetTripData(el.id))

    };

    let chipColor = 'yellow';
    let chipShadow = '1px 1px black';
    let chipBorder = '1px solid lightslategrey';

    if (el.period === 'past') {
        chipColor = 'black'
        chipShadow = '1px 1px white'
    } else if (el.period === 'future') {
        chipColor = 'white';
        chipShadow = '1px 1px black'    
    }

    return (
        <BoxStyled  boxShadow={24} p={4} className="d-flex flex-column position-relative align-items-center m-3">
            <ChipStyled label={el.period} 
                sx={{color: chipColor, border: chipBorder, textShadow: chipShadow }}
            />
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