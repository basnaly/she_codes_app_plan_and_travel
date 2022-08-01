import React, { useState } from 'react';

import moment from 'moment';

import { DataGrid } from '@mui/x-data-grid';
import { CaptionView, PeriodView } from '../../styles/MuiStyles';
import MapViewComponent from './MapViewComponent';

const columns = [
    {
        field: 'dateFrom',
        headerName: 'Date from',
        headerAlign: 'center',
        width: 150,
        filterable: false,
        valueFormatter: ({value}) => moment(value).format('DD/MM/YYYY'),
    },
    {
        field: 'dateTo',
        headerName: 'Date to',
        headerAlign: 'center',
        width: 150,
        filterable: false,
        valueFormatter: ({value}) => moment(value).format('DD/MM/YYYY'),
    },
    {
        field: 'accommodation',
        headerName: 'Type of accommodation',
        headerAlign: 'center',
        align: 'center',
        cellClassName: 'cursor-pointer',
        flex: 1
    },
    {
        field: 'price',
        headerName: 'Price',
        headerAlign: 'center',
        type: 'number',
        align: 'center',
        width: 150,
        valueGetter: (params) => `${params.row.price ?? ''}${params.row.currency ?? ''}`,
    },
    {
        field: 'notes',
        headerName: 'Notes',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
]

const AccommodationsViewList = ({ accommodations = [] }) => {

    const [place, setPlace] = useState('');

    const clickRow = (arg) => {

        setPlace(arg.row.accommodation.replaceAll('\s', '+'))
    }

    return (

        <React.Fragment>
            <PeriodView className='mt-3 mb-2'>
                Accommodations:
            </PeriodView>

            <CaptionView>
                ** Click on the 'Place to visit' in the table to see it on the map.
            </CaptionView>


            <div className='d-flex align-items-center align-self-stretch'>
                <div id="alert-dialog-slide-description"
                    className='mt-0 mb-3 w-100'>

                    <div style={{ width: 'auto' }}>
                        <DataGrid
                            autoHeight
                            rows={accommodations}
                            columns={columns}
                            sx={{'& .cursor-pointer': {cursor: 'pointer'} }} 
                            onRowClick={clickRow}
                            hideFooter
                            hideFooterPagination
                            disableColumnMenu
                            pageSize={20}
                        />
                    </div>

                    {place ? <MapViewComponent place={place} /> : ''}

                </div>
            </div>
        </React.Fragment>
    )
}

export default AccommodationsViewList;