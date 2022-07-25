import React, { useState } from 'react';

import moment from 'moment';

import { DataGrid } from '@mui/x-data-grid';
import DialogContentText from '@mui/material/DialogContentText';
import { CaptionView, PeriodView } from '../../styles/MuiStyles';
import MapViewComponent from '../MapViewComponent';

const columns = [
    {
        field: 'date',
        headerName: 'Date',
        headerAlign: 'center',
        width: 150,
        filterable: false,
        valueFormatter: ({value}) => moment.unix(value).format('DD/MM/YYYY'),
    },
    {
        field: 'visit',
        headerName: 'Places to visit',
        headerAlign: 'center',
        align: 'center',
        cellClassName: 'cursor-pointer',
        flex: 1
    },
    {
        field: 'notes',
        headerName: 'Notes',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
]

const VisitingsViewList = ({ visitings = [] }) => {

    const [place, setPlace] = useState('');

    const clickRow = (arg) => {
        
        setPlace(arg.row.visit.replaceAll('\s', '+'))
    }

    return (

        <React.Fragment>
            <PeriodView className='mt-3 mb-2'>
                Visitings:
            </PeriodView>

            <div className='d-flex align-items-center align-self-stretch'>
                <DialogContentText id="alert-dialog-slide-description"
                    className='mt-0 mb-3 w-100'>

                    <div style={{ width: 'auto' }}>
                        <DataGrid
                            autoHeight
                            rows={visitings}
                            columns={columns}
                            sx={{'& .cursor-pointer': {cursor: 'pointer'} }} 
                            onRowClick={clickRow}
                            hideFooter
                            hideFooterPagination
                            disableColumnMenu
                            pageSize={20}
                        />
                    </div>
                </DialogContentText>
            </div>

            <CaptionView>
                ** Click on the 'Place to visit' in the table to see it on the map.
            </CaptionView>

            <MapViewComponent place={place} />
        </React.Fragment>
    )
}

export default VisitingsViewList;