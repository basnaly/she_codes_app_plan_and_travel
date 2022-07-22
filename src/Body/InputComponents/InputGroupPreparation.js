import React, { useState } from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Autocomplete } from "@mui/material";
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';

const InputGroupPreparation = ({ categories, push }) => {

    const [category, setCategory] = useState('');
    const [note, setNote] = useState('');

    const AddNewNote = () => {
        
        push({
            id: new Date().getTime(),
            category,
            note,
            checked: false
        })
        setNote('');
    }

    return (

        <div className="d-flex align-items-center">

            <div className="d-flex align-items-center w-100 me-3">
                <Autocomplete
                    className='w-100'
                    value={category}
                    onChange={(event, newValue) => setCategory(newValue ?? '')}
                    freeSolo
                    id="free-solo-2-demo"
                    options={categories}
                    renderInput={(params) => (

                        <TextField
                            {...params}
                            label="Category"
                            size='small'
                            color='success'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}

                        />
                    )}
                />
            </div>

            <TextField className="regist mx-3 w-100"
                id="outlined-helperText"
                label="Note"
                size='small'
                type="text"
                color="success"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />

            <IconButton color="success" aria-label="upload picture" component="span"
                className="cursor-icon d-flex align-items-center justify-content-center"
                onClick={AddNewNote}>
                <AddCircleOutlineIcon sx={{ fontSize: 30 }} />
            </IconButton>
        </div>
    )
}

export default InputGroupPreparation;
