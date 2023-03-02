import React from "react"
import Image from "../images/profile-pic.jpg"


export default function Info(){
    return (
        <div className="info-section">
            <img src={Image} alt="profile picture" id="profile-pic"/>
            <h1>Mike Casey</h1>
            <h2>Frontend Developer</h2>
            <p>mikecasey.dev</p>
            <div className="info-buttons">
                <button id="email"><i class="fa-solid fa-envelope"></i> Email</button>
                <button id="linkedin"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
            </div>
        </div>
    )
}


