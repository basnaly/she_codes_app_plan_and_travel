import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GrayButton } from '../../../styles/MuiStyles';

const DropDownSelection = ({selectedOption, listOptions, ChangeSelectedOption}) => {

	const dispatch = useDispatch();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const selectOption = (newSelectedOption) => {
		dispatch(ChangeSelectedOption(newSelectedOption));
		handleClose();
	}

	return (

		<div>
			<GrayButton
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick} 
			> 
				{selectedOption} 
			</GrayButton> 

			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				{
					listOptions.map(el =>
						<MenuItem key={el} 
							onClick={() => selectOption(el)}> 
								{el}
						</MenuItem> //
					)
				}	
			</Menu>
		</div>
	)
}

export default DropDownSelection;
