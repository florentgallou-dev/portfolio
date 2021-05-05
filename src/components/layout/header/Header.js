import {Link} from "react-router-dom";
import picture from './img/florentGALLOU.jpg';

function Header(props)  {
    return (
        <header className="bg-dark text-center text-white">
            <section className="container p-3">
                <div className="row align-items-center">
                    <div className="col-6">
                        <Link to="/home"><img className="border border-2 border-orange rounded-circle" src={picture} alt="Photo de Florent GALLOU" /></Link>
                    </div>
                    <div className="col-6 align-items-center">
                        <div>
                            <h1 className="orangeText">Florent GALLOU</h1>
                        </div>
                        <div>
                            <p className="fs-2">Portfolio</p>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;