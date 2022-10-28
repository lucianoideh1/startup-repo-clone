import React from "react";

export default function Navbar(){
    return(
        <div>
            <nav>
        <ul className="nav-items">
            <li className="logo">
           Repo
            </li>
            <li>
            <select name="select">
        <option value="value1">Features</option>
        <option value="value2">Features 2</option>
        <option value="value3">Features 3</option>
        <option value="value4">Features 4</option>
        </select>
         </li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Teams Pro</li>
            <li>Teams for Education</li>
            <li>Careers</li>
        </ul>
        <ul className="nav-btns">
            <li>
                <button className="sign-up">Sign up</button>
                <button>Log in</button>
            </li>
        </ul>
        </nav>
        </div>
    )
}