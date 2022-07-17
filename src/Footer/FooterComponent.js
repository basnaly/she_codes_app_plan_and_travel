import React from "react";
import { FooterLink, FooterText } from "../styles/MuiStyles";

const FooterComponent = () => {

    return (
        <div className="footer d-flex align-items-center justify-content-between">
            <FooterLink className="m-3" href="https://github.com/basnaly"
                target='_blank'>
                https://github.com/basnaly
            </FooterLink>
            <FooterText>Israel-2022</FooterText>
            <img className="me"
                src='https://github.com/basnaly/roman_numeric_converter/raw/main/my-photo.png'/>
        </div>
    )
}

export default FooterComponent;