import React from "react";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';

import DeleteDialog from "./DeleteDialog";
import ViewComponent from "./ViewComponent";
import { CityTitleStyled, GreenButton } from "../styles/MuiStyles";

const style = {
    position: 'relative',
    border: '2px solid forestgreen',
    borderRadius: "10px",
    backgroundColor: '#ffffff60',
    boxShadow: 24,
    p: 4,
};

const CityBox = ({ el }) => {

    const navigate = useNavigate();

    const editTrip = () => {
        navigate('/' + el.id + '/period');
        
    };

    return (
        <Box sx={style} className="d-flex flex-column align-items-center m-3">
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
        </Box>
    )
}

export default CityBox;