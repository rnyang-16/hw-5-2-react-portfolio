import React from "react";

class EmailForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'Jackson Yee',
  //     body: 'Some Text'
  //   };
  // }
    
  state = {
    name: 'Jackson Yee',
    body: 'Some Text'
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value)
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
            <label htmlFor="exampleInputname">Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={this.handleChange} defaultValue={this.state.name}/>
        </div>
        <div className="form-group">
            <label htmlFor="inputTextarea">Message</label>
            <textarea className="form-control" id="body" name="body" onChange={this.handleChange} defaultValue={this.state.body} rows="1"></textarea>
        </div>
        <a href={`mailto:joyceyang0730@gmail.com?subject=mail from ${this.state.name}&body=${this.state.body}`} type="submit" className="btn btn-default">Submit</a>
      </form>
    );
  }
}

export default EmailForm;
