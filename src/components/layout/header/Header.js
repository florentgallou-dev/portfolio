import {Link} from "react-router-dom";
import picture from './img/florentGALLOU.png';

function Header()  {
    return (
        <header className="bg-realyDarkPlum text-center text-white">
            <section className="container p-3">
                <div className="row align-items-center">
                    <div className="col-6">
                        <Link to="/home"><div className="border border-2 border-orange rounded-circle" id="divPictureFG"><div id="fondImage"></div><img src={picture} alt="Florent GALLOU" /></div></Link>
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