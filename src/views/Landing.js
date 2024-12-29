    import React from 'react';
    import {Link} from "react-router-dom";
    import useRedirection from "../hooks/useRedirection";

    function Landing() {

        useRedirection("/home", 5000); // Redireccionamos a la vista de restaurantes en 5 segundos

        return (
            <div className="landing">
                    <Link to={"/home"}> {/* Añadimos un enlace a la vista de restaurantes */}
                        <h1>Bienvenidos a "Relatos de Papel" !!</h1>
                    </Link>
                    <span className="laser-pointer"></span> {/* Puntero láser original */}
                    <span className="laser-pointer-reverse"></span> {/* Nuevo puntero láser en sentido contrario */}
            </div>
        );
    }

    export default Landing;
