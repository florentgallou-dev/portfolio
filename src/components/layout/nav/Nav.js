import {Link} from "react-router-dom";

function Nav(){
    return (
         <nav class="navbar navbar-expand-lg bg-lightPlum">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                </button>
                <div class="row collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link lightText fw-bold text-center" to="/home">Projets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link lightText fw-bold text-center" to="/technology">Technologies</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Nav;