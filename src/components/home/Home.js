import AddProject from './addproject/AddProject';

function Home(props)  {
    return (
        <div className="bg-darkPlum">
            <section className="container-xxl">
                <div>
                    <h1 className="py-5 text-center orangeText text-uppercase">Mes projets</h1>
                </div>
                <div className="d-flex flex-column flex-xl-row flex-wrap">
                    <AddProject Project = {}/>
                </div>
            </section>
        </div>
    );
}

export default Home;