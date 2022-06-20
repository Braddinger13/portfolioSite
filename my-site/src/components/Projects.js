import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <section>
        <div className="container py-3">
          <h2 className="py-5">My Projects</h2>
          <div className="row">
            <div className="col-lg text-center">
              <div className="card my-1">
                <h3 className="card-title pt-2">Online Portfolios</h3>
                <img
                  src={require("../pics/OnlineArtSnip.jpg")}
                  alt=""
                  className="card-img p-2"
                />
                <div className="card-body">
                  <p className="card-text">
                    <strong>
                      Full stack project developed in a Web Application
                      Development course.
                    </strong>
                  </p>
                  <p align="left">
                    <ul>
                      <li>
                        HTML, CSS, and JavaScript were used on the frontend
                      </li>
                      <li className="py-2">MySQL was used for databasing</li>
                      <li>Writing Web APIs to communicate with the database</li>
                    </ul>
                  </p>
                </div>

                <div className="row my-2">
                  <div className="col-md justify-content-between">
                    <a
                      className="btn btn-outline-secondary mx-2"
                      href="http://cis-linux2.temple.edu:8080/SP22_3308_tuk81273/index.html#/home"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      View
                    </a>
                    <a
                      className="btn btn-outline-info"
                      href="https://github.com/Braddinger13/Spring2022WebDev"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg my-1">
              <div className="card">
                <h3 className="card-title pt-2">Pok&eacute;mon Search</h3>
                <img
                  src={require("../pics/pokemonSearchSnip.jpg")}
                  alt=""
                  className="card-img p-2"
                />
                <div className="card-body">
                  <div className="card-text">
                    <p>
                      <strong>
                        Pok&eacute;mon application that displays information and
                        stats about the Pok&eacute;mon in a nice User Interface
                      </strong>
                    </p>
                    <p align="left">
                      <ul className="justify-content-between">
                        <li>
                          Retrieved and displayed data from the Pok&eacute;mon
                          Web API based on user input
                        </li>
                        <li className="py-2">
                          Learned React through building this application
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-md justify-content-between">
                    <a
                      className="btn btn-outline-secondary mx-2"
                      href="https://pokemon-search-react.herokuapp.com/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      View
                    </a>
                    <a
                      className="btn btn-outline-info"
                      href="https://github.com/Braddinger13/reactPokemonSearch"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg my-1">
              <div className="card">
                <h3 className="card-title pt-2">Spotify Playlist Generator</h3>
                <img
                  src={require("../pics/playlistGeneratorSnip.jpg")}
                  alt=""
                  className="card-img p-2"
                />
                <div className="card-body">
                  <div className="card-text">
                    <p>
                      <strong>
                        Program that takes a seed song and creates a playlist
                        based on Spotify recommendations
                      </strong>
                    </p>
                    <p align="left">
                      <ul className="justify-content-between">
                        <li>
                          Learned how to commmunicate with API's and use JSON
                        </li>
                        <li className="py-2">
                          Uploads playlist directly to accounts
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-md justify-content-between">
                    <a
                      className="btn btn-outline-info"
                      href="https://github.com/Braddinger13/Spotify-Playlist-Generator"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
