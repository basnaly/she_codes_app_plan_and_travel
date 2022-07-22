import React from 'react';

import DialogContentText from '@mui/material/DialogContentText';

import { PeriodView } from '../../styles/MuiStyles';
import ViewCheckBoxNote from './ViewCheckedNote';


const PreparationsViewList = ({ preparations = [] }) => {

	const groupByCategory = (preparations ?? []).reduce((groups, preparation) => {
		const { category } = preparation; // [care, documents, different]
		groups[category] = groups[category] ?? []; // initialization
		groups[category].push(preparation); // {care: [{category: 'care', checked: false}]}
		return groups;
	}, {});

	return (

		<React.Fragment>
            <PeriodView className='mt-3 mb-2'>
                Preparations:
            </PeriodView>

            <div className='d-flex align-items-center align-self-stretch'>
                <DialogContentText id="alert-dialog-slide-description"
                    className=' me-2 mt-0 mb-3 w-100'>

                    {Object.keys(groupByCategory).map(el =>
                        <div className='d-flex flex-wrap align-items-center' key={el}>
                            <div className='title-view d-flex text-align-start'>
                                {el}:
                            </div>
                            <div className='d-flex align-items-center'>
                                {groupByCategory[el].map(note =>
                                    <ViewCheckBoxNote key={note.id} note={note} />
                                )}
                            </div>
                        </div>
                    )}

                </DialogContentText>
            </div>
        </React.Fragment>
	)
}

export default PreparationsViewList;
