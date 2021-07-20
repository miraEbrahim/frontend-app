import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
import UserService from "../.././services/user.service";

export default class BoardOnboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  componentDidMount() {
    UserService.getOnboardBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-around">
        <ul className="nav col-10 col-xs-2 my-2  justify-content-center my-md-0 text-small pb-3">
          <li className="nav-item">
            <a className="nav-link" href="./onboard#data-survey">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className="bi d-block mx-auto mb-1" height="24px" viewBox="0 0 24 24" width="24px" fill="#2470dc"><g><rect fill="none" height="24" width="24" /><path d="M14,12l-2,2l-2-2l2-2L14,12z M12,6l2.12,2.12l2.5-2.5L12,1L7.38,5.62l2.5,2.5L12,6z M6,12l2.12-2.12l-2.5-2.5L1,12 l4.62,4.62l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5L23,12l-4.62-4.62l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5L12,23l4.62-4.62 l-2.5-2.5L12,18z" /></g></svg>
              <span className="text-dark" >Data Survey</span>
             
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./onboard#msg-copy">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className="bi d-block mx-auto mb-1" height="24px" viewBox="0 0 24 24" width="24px" fill="#2470dc"><g><rect fill="none" height="24" width="24" /><circle cx="12" cy="3.5" fill="none" r=".75" /><circle cx="12" cy="3.5" fill="none" r=".75" /><circle cx="12" cy="3.5" fill="none" r=".75" /><path d="M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C4.86,3,4.73,3.01,4.6,3.04C4.21,3.12,3.86,3.32,3.59,3.59 c-0.18,0.18-0.33,0.4-0.43,0.64C3.06,4.46,3,4.72,3,5v14c0,0.27,0.06,0.54,0.16,0.78c0.1,0.24,0.25,0.45,0.43,0.64 c0.27,0.27,0.62,0.47,1.01,0.55C4.73,20.99,4.86,21,5,21h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11,14.17l-1.41,1.42L6,12 l3.59-3.59L11,9.83L8.83,12L11,14.17z M12,4.25c-0.41,0-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75s0.75,0.34,0.75,0.75 S12.41,4.25,12,4.25z M14.41,15.59L13,14.17L15.17,12L13,9.83l1.41-1.42L18,12L14.41,15.59z" /></g></svg>
              <span className="text-dark text-small" >Message Copy</span>
             
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./onboard#msg-design">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" className="bi d-block mx-auto mb-1" width="24px" fill="#2470dc"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" /></svg>
              <span className="text-dark text-small">Message Design</span>
            </a>
          </li>
        </ul>
        <div className="container-fluid">
        <div className="row">
                 
              <div className="p-5 mb-4 bg-light-b rounded-3">
                <h1 className="display-5 fw-bold text-white" id="data-survey">Data Survey</h1>
                <p className=" text-white">This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              </div>
             </div>
             
                <div className="row">
                  <div className="p-5 mb-4 bg-light-b rounded-3">
                    <h1 className="display-5 fw-bold text-white" id="msg-copy">Message Copy</h1>
                    <p className="col text-white">This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                   
                  </div>
                  
                </div>
               
                  <div className="row">
                    <div className="p-5 mb-4 bg-light-b rounded-3">
                      <h1 className="display-5 fw-bold text-white" id="msg-design">Message Desgin</h1>
                      <p className="col text-white">This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                  
                    
                 
               
              </div>
          
          </div>
          <div>
            {/* <Switch>
              <Route exact path="/" component={} />
              
           
            </Switch> */}
          </div>
        </div>
      </div>
    );
  }
}
