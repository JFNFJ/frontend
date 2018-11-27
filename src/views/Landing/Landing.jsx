import React from "react";
import { Parallax } from "react-parallax";

import "assets/css/landing-materialize.css";
import "assets/css/landing.css";

import background1 from "assets/img/cat.jpeg";
import firststep from 'assets/img/sign_in.jpg';
import secondstep from 'assets/img/create.jpg';
import thirdstep from 'assets/img/grafs.jpg';

function Landing(props) {
    return (
        <div id="landing">
            <Parallax bgImage={background1} strength={500} blur={{ min: -15, max: 15 }} >
                <div className="section" >
                    <div className="container">
                        <br /><br /><br /><br />
                        <h1 className="header center teal-text text-lighten-2">Social Cat</h1>
                        <div className="row center">
                            <h5 className="header col s12 light teal-text text-lighten-4">Descubrí lo que piensa el mundo con tan sólo un click</h5>
                        </div>
                        <br /><br /><br /><br />
                    </div>
                </div>
            </Parallax>


            <div className="container">
                <div className="section">

                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                                <h5 className="center">AUTONOMIA</h5>

                                <p className="light">Social Cat te permite decidir por vos mismo qué temas querés analizar y facilmente ver el estado de tus búsquedas cada vez que ingresás.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                                <h5 className="center">PROCESAMIENTO</h5>

                                <p className="light">La plataforma toma publicaciones extraídas de Twitter que mencionen la temática que planeaste, y las clasifica según estén a favor, en contra o si tienen una posición neutral al respecto.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">bar_chart</i></h2>
                                <h5 className="center">VISUALIZACIÓN</h5>

                                <p className="light">Los datos procesados se presentan de manera diversa e interactiva, utilizando gráficos que agrupan al público según su posición ante un tema concreto. Descubrí qué piensan diferentes países a lo largo del tiempo ¡y mucho más!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-green">
                <span>Crea un usuario</span>
                <div className="step-foto">
                    <img src={firststep} style={{width: '600px' , height: '400px'}} alt="Primer paso"></img>
                </div>
                <div className="step-foto">
                    <img src={secondstep} style={{width: '600px' , height: '400px'}} alt="Segundo paso"></img>
                </div>
                <span>Eligue el termino a analizar</span>
                <span>Visualiza los resultados</span>
                <div className="step-foto">
                    <img src={thirdstep} style={{width: '600px' , height: '400px'}} alt="Tercer paso"></img>
                </div>
            </div>



            <footer className="page-footer teal">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Company Bio</h5>
                            <p className="grey-text text-lighten-4">Este es un proyecto de la UTN FRBA para la materia Proyecto Final por parte del grupo 202: Joaquin Azcarate, Nicolas Zarewsky, Federico Bonisconti, Francisco Bravo y Julieta Colombo</p>


                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Desarollado por <a className="brown-text text-lighten-3" href="https://github.com/JFNFJ">JFNFJ</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

Landing.propTypes = {
};

export default Landing;
