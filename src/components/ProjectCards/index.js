import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";

class ProjectsCards extends React.Component {
  static contextType = DataAreaContext;
  createCards = () => {
    let cols = []

    // Outer loop to create parent
    for (let i = 0; i < this.context.info.projects.length; i++) {
      let card = (
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Project {i+1}</h4>
            <p className="category">{this.context.info.projects[i].name}</p>
          </div>
          <div className="card-body">
            <a href={this.context.info.projects[i].home_url} className="fa"><i>Homepage</i></a><br/>
            <a href={this.context.info.projects[i].github_url} className="fa"><i>GitHub repository</i></a><br/>
            <img src={this.context.info.projects[i].img_url} className="img-fluid" alt="Responsive"/>
          </div>
        </div>
      )
      //Create the parent and add the children
      cols.push(<div className="col-md-6">{card}</div>)
    }
    return cols
  }
  
  render() {
    return (
      <div className="row">
        {this.createCards()}
      </div>
    );
  }
}

export default ProjectsCards;
