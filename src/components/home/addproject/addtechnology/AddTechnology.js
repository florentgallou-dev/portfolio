import React from "react";
import Axios from 'axios';

//GET THE PROPS FROM AddProject using this.props.technologies from line 24 of AddProject.js

class AddTechnology extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            loaded: false,
            error: false,
            data: null
        }
    }

    //Function to retreive the actual project technologies list and compare it to the technologie API list to create the technologies DOM elements corresponding to the actual project
    createDOMTechnologyElementList = (technoFromAPI, technoListFromProject) => {
        //To store the complete list of DOM elements technologies corresponding to the actual project
        let listOfElementsFromProjectTechnologies = [];
        //Look of each technologie in the project technologie list
        Object.keys(technoListFromProject).forEach(key1 => {
            //Look of each technologie in the technologie API
            Object.keys(technoFromAPI).forEach(key2 => {
                //Compare the two technologies if they are the same
                if(technoListFromProject[key1] === key2){
                    //If so inject the technology DOM element with the right informations from the technologies API
                    listOfElementsFromProjectTechnologies.push(
                        <div className="technoBox p-2">
                            <i className={`${technoFromAPI[key2].icon} orangeText`} aria-hidden="true"></i>
                            <p className="lightText">{technoFromAPI[key2].name}</p>
                        </div>
                    );
                }
            });
        });
        
        return listOfElementsFromProjectTechnologies;
    }

    // http request with axios
    componentDidMount(){
        // Make a request to the api
        Axios.get("/portfolio/technologies.json")
        // handle successfull response
        .then( (response) => {
            //Manage response
            this.setState({
                loaded: true,
                data: response.data, //Fill data with the raw datas from response
            });
        })
        // handle response errors
        .catch( (error) => {
            this.setState({
                loaded: true,
                error: error
            });
        });
    }

    //Render html elements sent to the parent app
    render(){
        //Handle http state loaded
        if(this.state.loaded){
            //Handle http state loaded but with an error
            if(this.state.error){
                return(
                    <h3 className="text-white bg-danger p-5 text-center">une erreur "{this.state.error.message}" est survenue !</h3>
                );
            }
            //Handle http state loaded without and error
            return(
                // Inject this element in its parent AddProject
                <div className="row flex-row flex-wrap justify-content-center text-center">
                    {this.createDOMTechnologyElementList(this.state.data, this.props.technologies)} 
                </div>
            );
        }
        //Handle http state not loaded yet
        return (
            <div>
                <h2 className="text-white bg-yellow p-5 text-center jediFont">Données en cours de chargements</h2>
            </div>
        );
    }
}

export default AddTechnology;