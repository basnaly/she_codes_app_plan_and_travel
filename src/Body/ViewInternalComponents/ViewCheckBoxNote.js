import React from 'react';

import { NoteChecked, NoteNotChecked } from '../../styles/MuiStyles';

const ViewCheckBoxNote = ({ note }) => {

    if (note.checked) {
        return (
            <NoteChecked 
                data-testid="checked-note-element"
                className='border-end border-dark'>
                {note.note}
            </NoteChecked>
        )
    } 
    return (

        <NoteNotChecked
            data-testid="note-element" 
            className='border-end border-dark'>
            {note.note}
        </NoteNotChecked>
    )
}

export default ViewCheckBoxNote;
