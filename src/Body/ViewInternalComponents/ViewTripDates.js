import React from 'react';

import moment from 'moment';

import DialogContentText from '@mui/material/DialogContentText';
import { PeriodView } from '../../styles/MuiStyles';

const ViewTripDates = ({ period }) => {

    const tripFrom = moment(period?.from).format('DD/MM/YYYY');
	const tripTo = moment(period?.to).format('DD/MM/YYYY');

    return (

        <React.Fragment>
            <PeriodView className='mt-2 mb-2'>
                Date of trip:
            </PeriodView>

            <div className='d-flex align-items-center'>
                
                <DialogContentText id="alert-dialog-slide-description"
                    className='me-2 mt-0 mb-2'>
                    from: {tripFrom}
                </DialogContentText>

                <DialogContentText id="alert-dialog-slide-description"
                    className='mt-0 mb-2'>
                    to: {tripTo}
                </DialogContentText>
            </div>
        </React.Fragment>
    )
}

export default ViewTripDates
