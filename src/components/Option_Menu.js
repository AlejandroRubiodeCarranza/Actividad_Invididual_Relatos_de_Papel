import React from "react";
import { Link } from "react-router-dom";

const Option_Menu = () => {
    return (
        <div>
            <nav className="navbar">
                <ul id="Panel_Menu_opciones">
                    <Link to={`/home/Sobre_Nosotros`}>Sobre nosotros</Link>
                </ul>
            </nav>

        </div>

    );
}
export default Option_Menu;