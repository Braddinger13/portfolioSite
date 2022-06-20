import React from "react";
import "../style/title.css";

const Title = () => {
  return (
    <div id="title">
      <section className="p-5 text-center">
        <div className="mt-4 container">
          <div>
            <h3 className="pt-4" id="myName">Brad Dinger</h3>
            <p className="lead my-3">Student with a passion for development</p>
            <a href='/#projects' className="btn btn-outline-dark my-3">My Projects</a>
            <h3 className="my-1">
              <a
                href="https://github.com/Braddinger13"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bi bi-github mx-3"></span>
              </a>
              <a
                href="https://www.linkedin.com/in/bradley-dinger-bb3b42191/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bi bi-linkedin mx-3"></span>
              </a>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Title;
