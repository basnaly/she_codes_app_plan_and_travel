import React from 'react';

import moment from 'moment';

import { DataGrid } from '@mui/x-data-grid';
import { PeriodView } from '../../styles/MuiStyles';

const columns = [
    {
        field: 'date',
        headerName: 'Date',
        headerAlign: 'center',
        width: 150,
        filterable: false,
        valueFormatter: ({value}) => moment(value).format('DD/MM/YYYY'),
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

    return (

        <React.Fragment>
            <PeriodView className='mt-3 mb-2'>
                Transportations:
            </PeriodView>

            <div className='d-flex align-items-center align-self-stretch'>
                <div id="alert-dialog-slide-description"
                    className='me-2 mt-0 mb-3 w-100'>

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
                </div>
            </div>
        </React.Fragment>
    )
}

export default TransportationsViewList
