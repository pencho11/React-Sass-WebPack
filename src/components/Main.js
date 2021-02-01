import React from 'react';

import perfil from '../img/foto3.jpg';
import trabajo1 from '../img/trabajo1.jpg';

const Main = () =>{
    return ( 
        <section className="main">
            <section className="acerca_de">
                <div className="contenedor">
                    <div className="foto">
                        <img src={perfil}  width="235" height="205" />
                    </div>
                    <div className="texto">
                        <h3 className="titulo">Acerca de mi</h3>
                        <p>Saludos, soy apasionado al desarrollo y programacion web <span className="bold">(HTML-CSS(SASS)-JAVASCRIPT(REACT.JS))</span> Mi meta es crecer, trabajar en el mundo del desarrollo de software y creacion de proyectos interesantes. <span className="bold">(full stack web)</span> Mucho gusto, este es un saludo desde React.js</p>
                    </div>
                </div>                
            </section>
            <section class="trabajos">
                <div class="contenedor">
                    <h3 class="titulo">Trabajos</h3>
                    <div class="contenedor-trabajos">
                        <div class="trabajo">
                            <div class="thumb">
                            <a href="https://reacjs-webpacksass.netlify.app/" >
                                <img src={trabajo1} />  
                            </a>                        
                            </div>
                            <div class="descripcion">
                                <a href="https://reacjs-webpacksass.netlify.app/" >
                                    <p class="nombre">RICK AND MORTY API</p>
                                </a>
                                <a href="https://reacjs-webpacksass.netlify.app/" >
                                    <div class="categoria">REACT + SASS + WEBPACK</div>
                                </a>
                            </div>
                        </div>
                    </div>   
                </div>
            </section>
        </section>
     );
}
 
export default Main;