import React, { Component } from "react";
import "./App.css";
import profilePic from "./ProfilePic.PNG";

class AppClass extends Component {
  state = {
    show: false,
    counter:0,
    person: {
      fullName: "", 
      bio: "",
      imgSrc: "",
      profession: "",
    },
  };
  showDiv = () => {
    this.setState({ show: !this.state.show });
  };
  
  componentDidMount() {

    let startCounting = setInterval(() => {
      // set counter state + 1
      
      this.setState({ counter: this.state.counter + 1 })
      
      }
    , 1000);
  }
  render() {
    const { show, text } = this.state;
    return (
      <div className="App">
        <h1 className="counter"> {this.state.counter}</h1>
            {show ? <div className="divprofile container" >
            <h1 >
              <div className="row">
                <div className="col">
                {this.state.person.fullName="Ines Gannoun"}
                </div>
                </div>
                </h1>
              <div className="row">
              <div className="col-6"><p >{this.state.person.bio="Develops information systems by designing, developing, and installing software solutions.Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.Develops software solutions by studying information needs, conferring with users, and studying systems flow, data usage, and work processes.Investigates problem areas.Follows the software development lifecycle.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code.Prepares and installs solutions by determining and designing system specifications, standards, and programming.Improves operations by conducting systems analysis and recommending changes in policies and procedures."}</p>

              </div>
              <div className="col-3" >
              <img src={profilePic}/>
              </div>
              </div>
              <h6>{this.state.person.profession="Analyzing information, General programming skills, Software design, Software debugging, Software documentation,Software testing,Problem solving,Teamwork"}</h6>
        </div> : null}
        <button onClick={this.showDiv}>Display profile</button>

        <p>{text}</p>
      </div>
    );
  }
}

export default AppClass;
