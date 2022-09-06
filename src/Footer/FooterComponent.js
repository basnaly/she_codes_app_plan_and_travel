import React from "react";
import { Footer, FooterLink, FooterText, MeStyled } from "../styles/MuiStyles";
import ContactForm from "./ContactForm";

const FooterComponent = () => {

    return (
        <Footer className="d-flex align-items-center justify-content-between mt-auto">
            <FooterLink 
                data-testid="link-element"
                className="m-3" 
                href="https://github.com/basnaly"
                target='_blank'>
                https://github.com/basnaly
            </FooterLink>

            <ContactForm />

            <FooterText>
                Israel-2022
            </FooterText>

            <MeStyled 
                data-testid="my-icon-element"
                className="me"
                src='https://github.com/basnaly/roman_numeric_converter/raw/main/my-photo.png'/>
        </Footer>
    )
}

export default FooterComponent;