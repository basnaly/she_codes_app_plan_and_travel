import React from "react";

import SortIcon from "@mui/icons-material/Sort";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const SortTrips = ({ onClick, sortUp }) => {

	return (
		
		<div className="mx-2">
			<Tooltip title="Sort" placement="left" >
				<IconButton
					sx={{ backgroundColor: "#ffffff60" }}
					onClick={onClick}
				>
					<SortIcon
						sx={{
							fontSize: "40px",
							color: "black",
							WebkitFilter: "drop-shadow( 1px 1px 1px white)",
  							filter: "drop-shadow( 1px 1px 1px white)",
							transform: sortUp ? "rotate(180deg)" : "rotate(0deg)",
							transitionProperty: 'all',
						}}
					/>
				</IconButton>
			</Tooltip>
		</div>
	);
};

export default SortTrips;
