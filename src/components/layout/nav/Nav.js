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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link lightText fw-bold text-center" to="/home" aria-label="Afficher mes projets">Projets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link lightText fw-bold text-center" to="/technology" aria-label="Afficher mes Technologies">Technologies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link lightText fw-bold text-center" to="/about" aria-label="Afficher mes Technologies">À Propos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link lightText fw-bold text-center" to="/contact" aria-label="Afficher mes Technologies">Contact</Link>
                        </li>
                        <li className="nav-item p-2">
                            <a className="lightText" href="https://github.com/FlorentGallou-Dev" aria-label="Mon github" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="lightText" href="https://linkedin.com/in/florent-gallou" aria-label="Mon twitter" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="lightText" href="https://twitter.com/gallou_florent" aria-label="Mon twitter" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;