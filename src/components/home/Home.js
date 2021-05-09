import AddProject from './addproject/AddProject';

import React from 'react';
import Axios from 'axios';
//GET THE STATES FROM AddProject using the return from its child line 22.

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            loaded: false,
            error: false,
            data: null,//To store the json object from API
            projects: null// To store part of the json object we want to use
        }
    }

    //Function to return an array of all the projects in DOM elements filled with json object datas.
    returnElementsWithProjects(response){
        let listOfElements = [];
        Object.keys(response.data).forEach(key => {
            //for every object in response.data create a DOM element using the AddProject class and return it in the array
            listOfElements.push(<AddProject project = {response.data[key]} />);
        });
        return listOfElements;
    }

    // http request with axios
    componentDidMount(){
        // Make a request to the api
        Axios.get("/portfolio/projects.json")
        // handle successfull response
        .then( (response) => {

            //To store DOM elements created with datas from API
            let projects = this.returnElementsWithProjects(response);
            
            this.setState({
                loaded: true,
                data: response.data, //Fill data with the raw datas from response
                projects: projects //Fill projects with the complete element list created with the data in response
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
                // Inject this element in its parent witch is directly the layout
                <div className="bg-darkPlum">
                    <section className="container-xxl pb-5">
                        <div>
                            <h1 className="py-5 text-center orangeText text-uppercase">Mes projets</h1>
                        </div>
                        <div className="d-flex flex-column flex-xl-row flex-wrap">
                            {this.state.projects} {/* Fill the element with the content created with the datas from API */}
                        </div>
                    </section>
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

export default Home;