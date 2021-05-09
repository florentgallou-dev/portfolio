import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="bg-darkPlum py-5">
            <section className="container-xxl py-5">
                <article className="row bg-lightPlum align-items-center py-5">
                    <div>
                        <h1 className="orangeText text-center py-5">Florent GALLOU</h1>
                        <p className="text-center lightText py-5">The closer you are</p>
                    </div>
                    <div className="text-center py-5 fs-3">
                        <i className="fas fa-envelope d-inline px-3 orangeText"></i>
                        {/*Link to create a mailto*/}
                        <Link className="linkMail" to='#' onClick={(e) => {
                            window.location = "mailto:florentgallou@gmail.com";
                            e.preventDefault();
                        }}>florentgallou@gmail.com</Link>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default Contact;