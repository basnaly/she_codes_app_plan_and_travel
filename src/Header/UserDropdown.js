import React, { useState, useRef } from "react";

import IconButton from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";

import LogoutComponent from "../Authentication/LogoutComponent";
import { AccountCircleIconStyled, PaperStyled } from "../styles/MuiStyles";
import GreetingComponent from "./GreetingComponent";

const UserDropdown = () => {
	
	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === "Escape") {
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<div className="d-flex flex-column align-items-center">
			<IconButton
				data-testid="user-icon"
				color="warning"
				ref={anchorRef}
				id="composition-button"
				aria-controls={open ? "composition-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
			>
				<AccountCircleIconStyled />
			</IconButton>

			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				placement="bottom-start"
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === "bottom-start"
									? "left top"
									: "left bottom",
						}}
					>
						<PaperStyled className="d-flex flex-column align-items-center">
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									className="d-flex flex-column align-items-center m-2"
									autoFocusItem={open}
									id="composition-menu"
									aria-labelledby="composition-button"
									onKeyDown={handleListKeyDown}
								>
									<GreetingComponent />

									<LogoutComponent />
								</MenuList>
							</ClickAwayListener>
						</PaperStyled>
					</Grow>
				)}
			</Popper>
		</div>
	);
};

export default UserDropdown;
