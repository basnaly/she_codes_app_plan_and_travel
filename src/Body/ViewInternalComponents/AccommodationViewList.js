import * as React from 'react';

import moment from 'moment';

import { DataGrid } from '@mui/x-data-grid';
import DialogContentText from '@mui/material/DialogContentText';
import { PeriodView } from '../../styles/MuiStyles';

const columns = [
    {
        field: 'dateFrom',
        headerName: 'Date from',
        headerAlign: 'center',
        width: 150,
        filterable: false,
        valueFormatter: ({value}) => moment.unix(value).format('DD/MM/YYYY'),
    },
    {
        field: 'dateTo',
        headerName: 'Date to',
        headerAlign: 'center',
        width: 150,
        filterable: false,
        valueFormatter: ({value}) => moment.unix(value).format('DD/MM/YYYY'),
    },
    {
        field: 'accommodation',
        headerName: 'Type of accommodation',
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

const AccommodationViewList = ({ accommodations = [] }) => {

    return (

        <React.Fragment>
            <PeriodView className='mt-3 mb-2'>
                Accommodations:
            </PeriodView>

            <div className='d-flex align-items-center align-self-stretch'>
                <DialogContentText id="alert-dialog-slide-description"
                    className='me-2 mt-0 mb-3 w-100'>

                    <div style={{ width: 'auto' }}>
                        <DataGrid
                            autoHeight
                            rows={accommodations}
                            columns={columns}
                            hideFooter
                            hideFooterPagination
                            disableColumnMenu
                            pageSize={20}
                        />
                    </div>
                </DialogContentText>
            </div>
        </React.Fragment>
    )
}

export default AccommodationViewList;