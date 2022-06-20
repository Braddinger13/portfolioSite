import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container text-center">
        <div className="py-4">
          <h3 className="text-center">Contact Me!</h3>
        </div>
        <div className="py-1">
          <p>
            <strong>Email:</strong> brad.dinger13@gmail.com
          </p>

          <p>
            <strong>Connect:</strong>
            <span>
              <a
                className="h4 text-dark"
                href="https://www.linkedin.com/in/bradley-dinger-bb3b42191/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bi bi-linkedin mx-3"></span>
              </a>
              <a
                className="h4 text-dark"
                href="https://github.com/Braddinger13"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bi bi-github mx-3"></span>
              </a>
            </span>
          </p>
        </div>
        <div className="py-2">
          <a href="/#" className="position-relative bottom-0 end-0">
            <i className="bi bi-arrow-up-square h4 text-dark"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
