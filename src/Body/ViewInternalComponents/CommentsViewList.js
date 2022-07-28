import React from 'react';

import { DialogContentText } from '@mui/material';
import { HrStyled, NumberViewStyled, PeriodView, ViewStyled } from '../../styles/MuiStyles';

import CommentViewItem from './CommentViewItem';

const CommentsViewList = ({ comments = [] }) => {

    return (

        <React.Fragment>
            <PeriodView className='mt-3 mb-2'>
                Comments:
            </PeriodView>

            <div className='date-view d-flex align-items-center align-self-stretch'>

                <ViewStyled id="alert-dialog-slide-description"
                    className='mt-0 mb-2 w-100'>

                    { comments.map((el, i) =>
                        <React.Fragment key={el.id}>
                            <div className='d-flex align-items-start'>

                                <NumberViewStyled className='d-flex pe-2'>
                                    {i + 1}.
                                </NumberViewStyled>

                                <CommentViewItem comment={el.comment} />
                            </div>

                            <HrStyled className='m-2' />
                        </React.Fragment>
                    )}
                </ViewStyled>
            </div>
        </React.Fragment>
    )
}

export default CommentsViewList;
