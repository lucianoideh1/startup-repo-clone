import React from "react";

export default function Navbar(){
    return(
        <div>
        <ul>
            <li>
            <h2>Repo</h2>
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
        </div>
    )
}