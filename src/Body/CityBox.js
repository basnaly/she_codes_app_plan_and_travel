import React from "react";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { styled } from "@mui/material";


const EditViewButton = styled(Button)({
    textTransform: 'none',
    color: 'forestgreen',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

const DeleteButton = styled(Button)({
    textTransform: 'none',
    color: 'red',
    border: '1px solid black',
    fontSize: '20px',
    backgroundColor: 'lightgray',
    padding: '3px 12px',
    fontFamily: 'Aladin',
})

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
            <div className="city-name d-flex align-items-center">
                {el.city}
            </div>

            <div className="d-flex align-items-center mt-3">
                <EditViewButton
                    variant={'outlined'}
                    className=" mx-3" >
                    View
                </EditViewButton>

                <EditViewButton
                    variant={'outlined'}
                    className=" mx-3" >
                    Edit
                </EditViewButton>

                <DeleteButton 
                    variant={'outlined'}
                    className=" mx-3" >
                    Delete
                </DeleteButton>
            </div>
        </Box>
    )
}

export default CityBox;