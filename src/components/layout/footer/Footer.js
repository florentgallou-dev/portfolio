import { Link } from "react-router-dom";

function Footer(props)  {
    return (
        <footer className="container-fluid bg-realyDarkPlum">
            <div className="row p-3">
                <div className="col-12 col-sm-6 my-3">
                    <h4 className="orangeText text-center text-sm-start">Portfolio - {(new Date().getFullYear())}</h4>
                </div>
                <div className="col-12 col-sm-6 my-3">
                    <div>
                        <h4 className="orangeText text-center">Florent GALLOU</h4>
                    </div>
                    <div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item">
                                <i class="fas fa-laptop-code d-inline px-2 orangeText"></i>
                                <p class="d-inline px-2 lightText">Développeur Web et Web mobile</p>
                            </li>
                            <li className="list-group-item">
                                <i class="fas fa-map-marker-alt d-inline px-2 orangeText"></i>
                                <p class="d-inline px-2 lightText">Normandie</p>
                            </li>
                            <li className="list-group-item">
                                <i class="fas fa-envelope d-inline px-2 orangeText"></i>
                                <Link to='#' onClick={(e) => {
                                    window.location = "mailto:florentgallou@gmail.com";
                                    e.preventDefault();
                                }}>florentgallou@gmail.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;