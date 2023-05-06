import React from "react";
import './support.css';

const Support = (props) =>{
    return(
        <div className="support_section">
            <div className="support_text">{props.supportData.text}</div>
            <a className="support_text_link" target="blank" href={props.supportData.url}><button className="support_btn">Support</button></a>
        </div>
    );
}

export default Support;