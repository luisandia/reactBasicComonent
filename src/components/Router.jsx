import React from 'react'
import {
    BrowserRouter as Router,//react para web
    Route,//objeto para manejar ruta
    Link,// objeto para manejar enlaces
    Redirect,//objeto para manejar redirecciones
    withRouter   //switch ruta
} from 'react-router-dom'


const StaticSite = () => (
    <Router>
        <div>
            <h1>Primeros pasoscon React Router</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/acerca">Acerca</Link>
                    </li>
                    <li>
                        <Link to="/servicios">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Route path="/" component={Home} />
            <Route path="/acerca" component={Acerca} />
            <Route path="/servicio" component={Servicios} />
            <Route path="/contacto" component={Contacto} />
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Bienvenido a mi webapp con react</h2>
    </div>
)

const Acerca = () => (
    <div>
        <h2>Bienvenido a mi pagina acerca de</h2>
    </div>
)

const Servicios = () => (
    <ul>
        <li>Instruccion y Capacitacion web</li>
        <li>Diseño y desarrollo web</li>
    </ul>
)

const Contacto = ({ match }) => (
    <div>
        <h1>Info del curso</h1>
        <Route exact path={match.url} render={() => (
            <div>
                <h1>Mantente en contacto</h1>
            </div>
        )} />
        <ul>
            <li>
                <Link to={`${match.url}/email`}>Email</Link>
            </li>
            <li>
                <Link to={`${match.url}/web`}>Sitio Web</Link>
            </li>
            <li>
                <Link to={`${match.url}/ubicacion`}>Ubicacion</Link>
            </li>
        </ul>
        <Route exact path={`${match.url}/email`} render={() => (
            <div>
                <a href="#">google mail</a>
                <h1>Contactame</h1>
            </div>
        )} />
        <Route exact path={`${match.url}/web`} render={() => (
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam tenetur beatae quae maiores aperiam, laborum nihil facere quam rerum placeat sit. Consequuntur cum ipsa repellat numquam voluptatum laboriosam sint.</p>
            </div>
        )} />

    </div>
)

export default StaticSite;


