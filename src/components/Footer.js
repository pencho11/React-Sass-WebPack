import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faComment} from '@fortawesome/free-solid-svg-icons'; //
import {faFacebook, faInstagram, faGithub, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <footer>
            <section className="contacto">
                <div className="contenedor">
                    <h3 className="titulo">Enviar mensaje a contacto</h3>
                    <form className="formulario">
                        <input type="text" placeholder="Nombre" name="nombre" required />
                        <input type="email" placeholder="Correo" name="correo" required />
                        <textarea name="mensaje" placeholder="Mensaje: " required />
                        <input class="boton" type="button" value="Enviar" />
                    </form>
                </div>
            </section>
            <section className="redes-sociales">
                <div className="contenedor">
                    <a href="#" className="twitter"><i className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i></a>
                    <a href="#" className="facebook"><i className="fa fa-facebook"><FontAwesomeIcon icon={faFacebook} /></i></a>
                    <a href="#" className="youtube"><i className="fa fa-youtube"><FontAwesomeIcon icon={faYoutube} /></i></a>
                    <a href="#" className="github"><i className="fa fa-github"><FontAwesomeIcon icon={faGithub} /></i></a>
                    <a href="#" className="instagram"><i className="fa fa-instagram"></i><FontAwesomeIcon icon={faInstagram} /></a>
                    {/* <FontAwesomeIcon icon={faComment} /> //DIFERENTES CLASES DE ICONOS */}
                </div>
            </section>
        </footer>
     );
}
 
export default Footer;