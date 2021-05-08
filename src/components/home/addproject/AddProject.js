import React from "react";

let technologies = {
    "git": <div class="technoBox p-2"><i class="fab fa-git orangeText" aria-hidden="true"></i><p class="lightText">Versionning</p></div>,
    "github":<div class="technoBox p-2"><i class="fab fa-github orangeText" aria-hidden="true"></i><p class="lightText">GitHub</p></div>,
    "markdown":<div class="technoBox p-2"><i class="fab fa-markdown orangeText" aria-hidden="true"></i><p class="lightText">MarkDown</p></div>,
    "javascript":<div class="technoBox p-2"><i class="fab fa-js orangeText" aria-hidden="true"></i><p class="lightText">JavaScript</p></div>,
    "html5":<div class="technoBox p-2"><i class="fab fa-html5 orangeText" aria-hidden="true"></i><p class="lightText">HTML5</p></div>,
    "css3":<div class="technoBox p-2"><i class="fab fa-css3-alt orangeText" aria-hidden="true"></i><p class="lightText">CSS3</p></div>,
    "kanban":<div class="technoBox p-2"><i class="fas fa-columns orangeText" aria-hidden="true"></i><p class="lightText">KanBan</p></div>,
    "wireframes":<div class="technoBox p-2"><i class="fas fa-sitemap orangeText" aria-hidden="true"></i><p class="lightText">Wireframes</p></div>,
    "sitemap":<div class="technoBox p-2"><i class="fas fa-sitemap orangeText" aria-hidden="true"></i><p class="lightText">SiteMap</p></div>,
    "validator":<div class="technoBox p-2"><i class="fas fa-check-double orangeText" aria-hidden="true"></i><p class="lightText">Validator</p></div>,
    "boilerplate":<div class="technoBox p-2"><i class="fas fa-star orangeText" aria-hidden="true"></i><p class="lightText">BoilerPlate</p></div>,
    "bootstrap":<div class="technoBox p-2"><i class="fab fa-bootstrap orangeText" aria-hidden="true"></i><p class="lightText">Bootstrap</p></div>,
    "api":<div class="technoBox p-2"><i class="fas fa-cog orangeText" aria-hidden="true"></i><p class="lightText">API</p></div>,
    "httprequest":<div class="technoBox p-2"><i class="fas fa-code orangeText" aria-hidden="true"></i><p class="lightText">httpRequest</p></div>,
    "ajax":<div class="technoBox p-2"><i class="fas fa-code orangeText" aria-hidden="true"></i><p class="lightText">Ajax</p></div>,
    "es6":<div class="technoBox p-2"><i class="fab fa-js orangeText" aria-hidden="true"></i><p class="lightText">ECMAScript6</p></div>,
    "dry":<div class="technoBox p-2"><i class="fas fa-sitemap orangeText" aria-hidden="true"></i><p class="lightText">D.R.Y.</p></div>,
    "react":<div class="technoBox p-2"><i class="fab fa-react orangeText" aria-hidden="true"></i><p class="lightText">React.js</p></div>,
    "routerdom":<div class="technoBox p-2"><i class="fab fa-react orangeText" aria-hidden="true"></i><p class="lightText">React router-dom</p></div>,
    "axios":<div class="technoBox p-2"><i class="fab fa-react orangeText" aria-hidden="true"></i><p class="lightText">React axios</p></div>,
    "nodejs":<div class="technoBox p-2"><i class="fab fa-node orangeText" aria-hidden="true"></i><p class="lightText">Node.js</p></div>,
    "usecase":<div class="technoBox p-2"><i class="fas fa-sitemap orangeText" aria-hidden="true"></i><p class="lightText">UseCase</p></div>
};

class AddProject extends React.Component {
    constructor(props) {
        super(props);
    }

    //Function to create an element from each data retreved by props
    arrayOfTechnologies(project, technoList) {
        let listTechnologyDOM = []
        for(let technology of project.technologies) {
            for(let technologyDOM in technoList) {
                if(technologyDOM == technology){
                    listTechnologyDOM.push(technoList[technology]);
                }
            }
        }
        return(listTechnologyDOM);
    }

    //Function to create an element from each data retreved by props
    arrayOfElementsDOM = (project) => {
        return(
            <div class="projectCard bg-lightPlum">
                <a className="linkToCard row align-items-center p-3" href={project.urlPage} target="_blank">
                    <div class="row col-12 col-lg-6 m-0">
                        <div class="my-2 p-0">
                            <h3 class="greenText text-center">{project.name}</h3>
                        </div>
                        <div class="p-0">
                            <div class="row flex-row flex-wrap justify-content-center text-center">
                                {this.arrayOfTechnologies(this.props.project, technologies)}
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 border-start border-2 border-orange p-3">
                        <p class="lightText">{project.about}</p>
                    </div>
                </a>
            </div>
        );
    }

    render() {
        return (
            <article class="col-12 col-xl-6 p-2 py-sm-3 px-sm-4">
                {this.arrayOfElementsDOM(this.props.project)}
                </article>
        );
    }
}


export default AddProject;