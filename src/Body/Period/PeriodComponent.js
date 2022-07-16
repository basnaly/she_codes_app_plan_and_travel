import React from "react";

import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    border: '2px solid forestgreen',
    borderRadius: "10px",
    backgroundColor: '#ffffff60',
    boxShadow: 24,
    p: 4,
};

const PeriodComponent = () => {

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>

            <Box sx={style} className="d-flex align-items-center">
                <div className="parent d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center mb-2">
                        I'd like to travel?
                    </div>

                    <div className="d-flex align-items-center">

                        <DesktopDatePicker className="m-2"
                            OpenPickerButtonProps={{style:{color:'forestgreen', transform: 'scale(1.3)'}}}
                            label="Date from:"
                            inputFormat="DD/MM/yyyy"
                            value={from}
                            onChange={handleChangeFrom}
                            renderInput={(params) => <TextField color="success" {...params} />}
                        />

                        <div className="palm d-flex">🏝</div>

                        <DesktopDatePicker
                            OpenPickerButtonProps={{style:{color:'forestgreen', transform: 'scale(1.3)'}}}
                            label="Date to:"
                            inputFormat="DD/MM/yyyy"
                            value={to}
                            onChange={handleChangeTo}
                            renderInput={(params) => <TextField color="success" {...params} />}
                        />
                    </div>    
                </div>
            </Box>
        </LocalizationProvider>
  )
}

export default PeriodComponent;