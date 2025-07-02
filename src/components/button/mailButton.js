import React from "react";
import "./Button.scss";

export default function MailButton({text, className, href, newTab}) {
    return (
        <div className={className}>
            <a className="main-button MailButton" href={href} target={newTab && "_blank"}>
                <i className="fa-solid fa-envelope"></i> {text}
            </a>
        </div>
    );
}
