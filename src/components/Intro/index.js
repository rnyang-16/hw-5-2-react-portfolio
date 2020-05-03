import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";

function Intro() {
  const context = useContext(DataAreaContext);

  const headerStyle = {
    "backgroundImage": 'url(' + 'assets/images/bg2.jpg' + ')',
  };

  const contactStyle = {
    "width": '400px',
  };

  return (
    <div>
      <div className="page-header header-filter" data-parallax="true" style={headerStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto">
              <div className="brand text-center">
                <h1>About me</h1>
                <h5>
                  {context.info.intro}
                </h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main main-raised">
        <div className="container mx-auto" style={contactStyle}>
          <div className="name">
            <a href={context.info.github} className="btn btn-just-icon btn-link btn-github"><i className="fa fa-github"></i></a>
            <a href={context.info.linkedin} className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
            <a href={context.info.resume} className="fa" id="resume"><i>Resume</i></a> <br />
            <a><i>Mail: {context.info.email}</i></a> <br />
            <a><i>Phone: {context.info.phone}</i></a>
          </div>
        </div>
      </div>

    </div>
    
    
  );
}

export default Intro;
