import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About_us() {
    return (
        <div className='About_us'>
            <Header/>
            <div>
            
            <h2>Quienes somos</h2>
            <br/>

            <p>Bienvenidos a "Relatos de Papel", tu refugio para los amantes de los libros. Desde nuestros inicios, 
            hemos creído en el poder transformador de la lectura. Nos apasiona conectar historias con personas, 
            creando un espacio donde cada lector pueda encontrar el libro perfecto para inspirar, aprender o simplemente disfrutar. </p>
            <br/>

            <p>En "Relatos de Papel", celebramos la diversidad de voces y géneros. Nuestra selección abarca desde los clásicos de la literatura universal hasta las últimas novedades 
            editoriales, pasando por títulos independientes y obras de autores emergentes. Sabemos que cada libro cuenta una historia, y cada historia tiene un lector esperando descubrirla.</p>
            <br/>

            <p>Además de ser una tienda de libros, somos un lugar de encuentro para la comunidad. Organizamos eventos literarios, clubes de lectura y talleres para compartir experiencias y 
            fomentar el amor por la lectura. Creemos que los libros son puentes que unen ideas y corazones.
            Nuestro compromiso es ofrecer un servicio cálido y personalizado. Ya sea que busques una recomendación especial o el regalo ideal, 
            estamos aquí para ayudarte a encontrar justo lo que necesitas.</p>
            <br/>

            <p>Gracias por ser parte de nuestra historia. Te invitamos a explorar, descubrir y sumergirte en el fascinante mundo de los libros con nosotros. </p>
            </div>
            <br/>
            <Link to={`/home`}>
                <button>Volver al Inicio</button>
            </Link>


             <Footer/>

        </div>
    );
}

export default About_us;