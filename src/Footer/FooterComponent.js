import React from "react";

const FooterComponent = () => {

    return (
        <div className="footer d-flex align-items-center justify-content-between">
            <a className="git m-3" href="https://github.com/basnaly"
                target='_blank'>
                https://github.com/basnaly
            </a>
            <div className="israel">Israel-2022</div>
            <img className="me"
                src='https://github.com/basnaly/roman_numeric_converter/raw/main/my-photo.png'/>
        </div>
    )
}

export default FooterComponent;