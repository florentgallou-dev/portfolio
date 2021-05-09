import {Link} from "react-router-dom";

function Nav(){
    return (
        <nav className="navbar navbar-expand-lg bg-lightPlum">
            <div className="container-fluid">
                <span className="navbar-brand"></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                </button>
                <div className="row collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link lightText fw-bold text-center" to="/home" aria-label="Afficher mes projets">Projets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link lightText fw-bold text-center" to="/technology" aria-label="Afficher mes Technologies">Technologies</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;