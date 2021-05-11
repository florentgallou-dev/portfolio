import AddTechnology from './addtechnology/AddTechnology';

//GET THE PROPS FROM HOME using this.props.project from line 22 of Home.js
//GET THE STATES FROM AddTechnology using the return from its child line 24.

function AddProject(props) {

    //Check if there is a GHPage set for this project
    let linkToGHPage = "";
    {if(props.project.urlPage){
        linkToGHPage = <a href={props.project.urlPage} target="_blank" rel="noreferrer" class="linkToCard btn my-2">GH-Page</a>
    };}

    return (
        <article className="col-12 col-xl-6 p-2 py-sm-3 px-sm-4">
            <div className="projectCard bg-lightPlum">
                <div className="row align-items-center p-3" >{/*Inject the gh-page url for the actual project*/}
                    <div className="row col-12 col-lg-6 m-0">
                        <div className="my-2 p-0">
                            <h3 className="greenText text-center">{props.project.name}</h3>{/*Inject the name of the actual project*/}
                        </div>
                        <div className="p-0">
                            <div>
                                <AddTechnology technologies={props.project.technologies} />{/*Calls the AddTechnology page witch will send back la proper list of DOM elements created by retreaving informations in the technologies APÏ from the actual technologies list project*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 border-start border-2 border-orange p-3">
                        <div>
                            <p className="lightText">{props.project.about}</p>{/*Inject the description of the actual project*/}
                        </div>
                        <div className="row align-items-center px-2">
                            <a href={props.project.urlGh} target="_blank" rel="noreferrer" class="linkToCard btn my-2">GitHub</a>
                            {linkToGHPage}{/*If there is a GH-Page inject the ling or nothing*/}
                        </div>
                        
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AddProject;