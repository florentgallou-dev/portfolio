import React from "react";

function AddProject(props)  {
    return (
        <article class="col-12 col-xl-6 p-2 py-sm-3 px-sm-4">
            <div class="row bg-lightPlum align-items-center p-3">
                <div class="row col-12 col-lg-6 m-0">
                    <div class="my-2 p-0">
                        <h3 class="greenText text-center">Projet 1</h3>
                    </div>
                    <div class="p-0">
                        <div class="row flex-row flex-wrap justify-content-center text-center">
                            <div class="technoBox p-2">
                                <i class="fab fa-bootstrap orangeText" aria-hidden="true"></i>
                                <p class="lightText">Bootstrap</p>
                            </div>
                            <div class="technoBox p-2">
                                <i class="fab fa-js orangeText" aria-hidden="true"></i>
                                <p class="lightText">JavaScript</p>
                            </div>
                            <div class="technoBox p-2">
                                <i class="fab fa-react orangeText" aria-hidden="true"></i>
                                <p class="lightText">React.js</p>
                            </div>
                            <div class="technoBox p-2">
                                <i class="fab fa-html5 orangeText" aria-hidden="true"></i>
                                <p class="lightText">HTML5</p>
                            </div>
                            <div class="technoBox p-2">
                                <i class="fab fa-css3-alt orangeText" aria-hidden="true"></i>
                                <p class="lightText">CSS3</p>
                            </div>
                            <div class="technoBox p-2">
                                <i class="fab fa-git orangeText" aria-hidden="true"></i>
                                <p class="lightText">Versionning</p>
                            </div>
                            <div class="technoBox p-2">
                                <i class="fab fa-github orangeText" aria-hidden="true"></i>
                                <p class="lightText">GitHub</p>
                            </div>
                            <div class="technoBox p-2">
                                <i class="fas fa-columns orangeText" aria-hidden="true"></i>
                                <p class="lightText">KanBan</p>
                            </div>
                            <div class="technoBox p-2">
                                <i class="fas fa-sitemap orangeText" aria-hidden="true"></i>
                                <p class="lightText">Wireframes</p>
                            </div>
                            <div class="technoBox p-2">
                                <i class="fas fa-sitemap orangeText" aria-hidden="true"></i>
                                <p class="lightText">UseCase</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 border-start border-2 border-orange p-3">
                    <p class="lightText">Contenu de la div ou il y a beaucoup de texte, un texte succint mais suffisant pour expliquer le but du projet avec de beaux mots clés</p>
                </div>
            </div>
        </article>
    );
    }


    export default AddProject;