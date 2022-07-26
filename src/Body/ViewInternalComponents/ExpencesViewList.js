import React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import { PeriodView } from '../../styles/MuiStyles';


const columns = [
    {
        field: 'date',
        headerName: 'Transaction date',
        headerAlign: 'center',
        width: 150,
        filterable: false,
        valueFormatter: ({ value }) => moment.unix(value).format('DD/MM/YYYY')
    },
    {
        field: 'product',
        headerName: 'Product/service',
        headerAlign: 'center',
        align: 'center',
        width: 200,
        flex: 1,
    },
    {
        field: 'price',
        headerName: 'Price',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        width: 150,
        valueGetter: (params) => `${params.row.price ?? ''}${params.row.currency ?? ''}`,
    },
    {
        field: 'payment',
        headerName: 'Payment method',
        headerAlign: 'center',
        align: 'center',
        width: 120,
        flex: 1
    },
    {
        field: 'notes',
        headerName: 'Notes',
        headerAlign: 'center',
        align: 'center',
        flex: 1
    }

]

const ExpencesViewList = ( {expences = []} ) => {

    return (

        <React.Fragment>
            <PeriodView className='mt-3 mb-2'>
                Expences:
            </PeriodView>

            <div className='d-flex align-items-center align-self-stretch'>
                <div id="alert-dialog-slide-description"
                    className='mt-0 mb-3 w-100'>

                    <div style={{ width: 'auto' }}>
                        <DataGrid
                            autoHeight
                            rows={expences}
                            columns={columns}
                            hideFooter
                            hideFooterPagination
                            pageSize={20}
                        />
                    </div>

                </div>
            </div>
        </React.Fragment >
    )
}

export default ExpencesViewList;
