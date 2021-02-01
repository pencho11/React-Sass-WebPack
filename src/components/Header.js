import React from 'react';

const Header = ({}) => {
    return ( 
        <header>
            <div className="contenedor">
                <nav className="menu">
                    <a href="#">Acerca de</a>
                    <a href="#">Trabajos</a>
                    <a href="#">Contacto</a>
                </nav>
            </div>
            <div className="contenedor-texto">
                <div className="texto">
                    <h1 className="nombre">Ruben Hernández Rios</h1>
                    <h2 className="profesion">Desarrollador web</h2>
                </div>
            </div>
        </header>
     );
}
 
export default Header;