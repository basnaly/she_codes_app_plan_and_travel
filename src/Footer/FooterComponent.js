import React from "react";
import { Footer, FooterLink, FooterText } from "../styles/MuiStyles";

const FooterComponent = () => {

    return (
        <Footer className="d-flex align-items-center justify-content-between mt-auto">
            <FooterLink className="m-3" href="https://github.com/basnaly"
                target='_blank'>
                https://github.com/basnaly
            </FooterLink>
            <FooterText>Israel-2022</FooterText>
            <img className="me"
                src='https://github.com/basnaly/roman_numeric_converter/raw/main/my-photo.png'/>
        </Footer>
    )
}

export default FooterComponent;