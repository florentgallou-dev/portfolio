import AddTechnology from './addtechnology/AddTechnology';

import React from "react";
//GET THE PROPS FROM HOME using this.props.project from line 22 of Home.js
//GET THE STATES FROM AddTechnology using the return from its child line 24.

class AddProject extends React.Component {
    //Function to create an element from each data retreved by props
    arrayOfElementsDOM = (project) => {
        return(
            <div className="projectCard bg-lightPlum">
                <a className="linkToCard row align-items-center p-3" href={project.urlPage} target="_blank" rel="noreferrer">{/*Inject the gh-page url for the actual project*/}
                    <div className="row col-12 col-lg-6 m-0">
                        <div className="my-2 p-0">
                            <h3 className="greenText text-center">{project.name}</h3>{/*Inject the name of the actual project*/}
                        </div>
                        <div className="p-0">
                            <div>
                                <AddTechnology technologies = {project.technologies} />{/*Calls the AddTechnology page witch will send back la proper list of DOM elements created by retreaving informations in the technologies APÏ from the actual technologies list project*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 border-start border-2 border-orange p-3">
                        <p className="lightText">{project.about}</p>{/*Inject the description of the actual project*/}
                    </div>
                </a>
            </div>
        );
    }

    render() {
        return (
            <article className="col-12 col-xl-6 p-2 py-sm-3 px-sm-4">
                {this.arrayOfElementsDOM(this.props.project)} {/*Inject the complet list of DOM element projects in parent*/}
            </article>
        );
    }
}


export default AddProject;