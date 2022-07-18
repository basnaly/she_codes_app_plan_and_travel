import React from 'react';

import moment from 'moment';

import { DataGrid } from '@mui/x-data-grid';
import DialogContentText from '@mui/material/DialogContentText';

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
        field: 'transport',
        headerName: 'Transport',
        headerAlign: 'center',
        align: 'center',
        flex: 1
    },
    {
        field: 'price',
        headerName: 'Price',
        headerAlign: 'center',
        type: 'number',
        align: 'center',
        width: 150,
        valueGetter: (params) => `${params.row.price ?? ''}${params.row.currency}`,
    },
    {
        field: 'notes',
        headerName: 'Notes',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
];

const TransportationsViewList = ({ transportations = [] }) => {

    console.log(transportations)

    return (

        <React.Fragment>
            <div className='period-view mt-2 mb-2'>
                Transportations:
            </div>

            <div className='d-flex align-items-center align-self-stretch'>
                <DialogContentText id="alert-dialog-slide-description"
                    className='me-2 mt-0 mb-2 w-100'>

                    <div style={{ width: 'auto' }}>
                        <DataGrid
                            autoHeight
                            rows={transportations}
                            columns={columns}
                            hideFooter
                            hideFooterPagination
                            disableColumnMenu
                        />

                    </div>
                </DialogContentText>
            </div>
        </React.Fragment>
    )
}

export default TransportationsViewList
