import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Autocomplete, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from "@mui/material";
import { CityTitleStyled, ErrorStyled, GreenButton, RedButton, TextareaAutosizeStyled, YellowButton } from "../styles/MuiStyles";
import { SaveContactForm } from "../Actions/AuthenticationAction";
import { CONTACT_FORM_OPTIONS } from "../constants";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const ContactForm = () => {

    const userId = useSelector((state) => state?.auth?.userId);
    const username = useSelector((state) => state?.auth?.username);
    const email = useSelector((state) => state?.auth?.email);

    const [name, setName] = useState("");
	const [userEmail, setUserEmail] = useState("");
 
    const [subject, setSubject] = useState("General");
    const [textarea, setTextarea] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const isSubmitBlocked = !textarea || !subject || (!username && !name) || (!email && !userEmail);

	const dispatch = useDispatch();

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const openChangePasswordDialog = () => setIsDialogOpen(true);

	const CloseDialog = () => {
		setIsDialogOpen(false);
        setTextarea("");
        setName("");
        setUserEmail("");
	};

    const Submit = () => {
	    dispatch(SaveContactForm((userId ? username : name), (userId ? email : userEmail), subject, textarea)) 
        CloseDialog();  
	};

	return (
		<React.Fragment>
			<YellowButton
                data-testid="contact-us-button"
				id="basic-button"
				className="d-flex flex-column align-items-center justify-content-center"
				onClick={openChangePasswordDialog}
			>
				Contact us
			</YellowButton>

			<Dialog
				className="d-flex flex-column align-items-center"
				data-testid="contact-form-dialog"
				open={isDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={CloseDialog}
				aria-labelledby="modal-modal-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle
					className="d-flex flex-column align-items-center pb-1 m-1"
					id="modal-modal-title"
					variant="h6"
					component="h2"
				>
                    <CityTitleStyled>
					    Contact form
                    </CityTitleStyled>
				</DialogTitle>

				<DialogContent className="d-flex flex-column align-items-center py-2">

					<DialogContentText className="d-flex text-center mb-3"
                        id="alert-dialog-description">
						If you have any questions or find mistakes don't
						hesitate to contact me using the following form.
					</DialogContentText>

					<TextField className="m-3"
						inputProps={{ "data-testid": "name-input" }}
						autoFocus
						margin="dense"
						id="name"
						label="Name/username"
						type="text"
                        style={{ width: 300 }}
                        color="success"
                        value={userId ? username : name}
                        onChange={userId ? () => {} : (e) => setName(e.target.value) }
					/>

					<TextField className="mb-3"
						inputProps={{ "data-testid": "email-input" }}
						autoFocus
						margin="dense"
						id="email"
						label="Email"
						type="email"
                        style={{ width: 300 }}
                        color="success"
                        value={userId ? email : userEmail}
                        onChange={userId ? () => {} : (e) => setUserEmail(e.target.value) }
					/>

                    <Autocomplete
                        options={CONTACT_FORM_OPTIONS}
                        value={subject}
                        sx={{ width: 300 }}
						onChange={(_, text) => setSubject(text)}
                        renderInput={(params) => 

                            <TextField 
                                {... params}
                                className="mb-4"
                                autoFocus
                                margin="dense"
                                id="subject"
                                label="Subject"
                                type="text"
                                style={{ width: 300 }}
                                color="success" 
                                onChange={(e) => setSubject(e.target.value)}
                            />}
					/>
                    
					<TextareaAutosizeStyled
						data-testid="textarea-element"
                        autoFocus
						aria-label="minimum height"
						minRows={3}
						placeholder="Add your comment"
						style={{ width: 400, fontSize: '18px', 
                                padding: '10px 15px', borderRadius: '5px',
                                borderColor: 'rgba(0, 0, 0, 0.23)', color: 'forestgreen' }}
                        value={textarea}
                        onChange={(e) => setTextarea(e.target.value)}
					/>

                    <ErrorStyled className="d-flex text-center mt-3"
                        style={{ fontSize: '18px' }} >
					    * Please fill all the fields!
				    </ErrorStyled>

				</DialogContent>

				<DialogActions className="d-flex align-items-center justify-content-center mt-0 mb-3">
					<GreenButton
						className="d-flex align-items-center mt-3 mx-3"
						data-testid="submit-button"
						variant={"outlined"}
						disabled={ isSubmitBlocked }
						onClick={ Submit }
					>
						{isLoading ? "Loading" : "Submit"}
					</GreenButton>

					<RedButton
						className="d-flex align-items-center mt-3 mx-3"
						data-testid="cancel-button"
						onClick={CloseDialog}
						variant={"outlined"}
					>
						Cancel
					</RedButton>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

export default ContactForm;
