import React from "react"
import dp from "./dp.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info() {
    return (
        <div>
            <img className="profile_photo" src={dp} alt="logo.jpeg" />
            <h3 className="developer_name">Vaibhav Vaish</h3>
            <h4 className="designation">Frontend Developer</h4>
            <p className="website_link">vaibhav.website</p>
            <div>
                <button className="btn btn_mail"> <FontAwesomeIcon className="icon_1" icon={faEnvelope} />Email</button>
                <button className="btn btn_linkedin"><FontAwesomeIcon className="icon_2" icon={faLinkedin} />Linkedin</button>
            </div>
        </div>
    )
}
