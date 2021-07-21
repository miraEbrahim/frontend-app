import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
import UserService from "../../services/user.service";

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
              <svg xmlns="http://www.w3.org/2000/svg" className="bi d-block mx-auto mb-1" height="24px" viewBox="0 0 24 24" width="24px" fill="#2470dc"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"/></svg>
              <span className="text-dark" >Data Survey</span>
             
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./onboard#msg-copy">
              <svg xmlns="http://www.w3.org/2000/svg" className="bi d-block mx-auto mb-1" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#2470dc"><g><rect fill="none" height="24" width="24"/><path d="M20.41,8.41l-4.83-4.83C15.21,3.21,14.7,3,14.17,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9.83 C21,9.3,20.79,8.79,20.41,8.41z M7,7h7v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10V13z"/></g></svg>
              <span className="text-dark text-small" >Message Copy</span>
             
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./onboard#msg-design">
              <svg xmlns="http://www.w3.org/2000/svg" className="bi d-block mx-auto mb-1" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#2470dc"><g><rect fill="none"/></g><g><g><path d="M16.24,11.51l1.57-1.57l-3.75-3.75l-1.57,1.57L8.35,3.63c-0.78-0.78-2.05-0.78-2.83,0l-1.9,1.9 c-0.78,0.78-0.78,2.05,0,2.83l4.13,4.13L3,17.25V21h3.75l4.76-4.76l4.13,4.13c0.95,0.95,2.23,0.6,2.83,0l1.9-1.9 c0.78-0.78,0.78-2.05,0-2.83L16.24,11.51z M9.18,11.07L5.04,6.94l1.89-1.9c0,0,0,0,0,0l1.27,1.27L7.02,7.5l1.41,1.41l1.19-1.19 l1.45,1.45L9.18,11.07z M17.06,18.96l-4.13-4.13l1.9-1.9l1.45,1.45l-1.19,1.19l1.41,1.41l1.19-1.19l1.27,1.27L17.06,18.96z"/><path d="M20.71,7.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34c-0.47-0.47-1.12-0.29-1.41,0l-1.83,1.83l3.75,3.75L20.71,7.04z"/></g><g/></g></svg>
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
