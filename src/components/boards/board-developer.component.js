import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import UserService from "../.././services/user.service";
import Swagger from "../swagger.component";
import ProductFeed from "./../pages/product-feed.component";
import LightDoc from "./../pages/light-doc.component";
import ApiSpec from "./../pages/api-spec.component";
import Analytic from "./../pages/analytic.component";

export default class BoardDeveloper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  componentDidMount() {
    UserService.getDevBoard().then(
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
            <a className="nav-link" href="./dev#api">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className="bi d-block mx-auto mb-1" height="24px" viewBox="0 0 24 24" width="24px" fill="#2470dc"><g><rect fill="none" height="24" width="24" /><path d="M14,12l-2,2l-2-2l2-2L14,12z M12,6l2.12,2.12l2.5-2.5L12,1L7.38,5.62l2.5,2.5L12,6z M6,12l2.12-2.12l-2.5-2.5L1,12 l4.62,4.62l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5L23,12l-4.62-4.62l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5L12,23l4.62-4.62 l-2.5-2.5L12,18z" /></g></svg>
              <span className="text-dark" >REST API V2</span>
              {/* <li className="nav-item">
                <a className="nav-link" href="./user#api-spec">
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><g><rect fill="none" height="24" width="24" /><path d="M14,12l-2,2l-2-2l2-2L14,12z M12,6l2.12,2.12l2.5-2.5L12,1L7.38,5.62l2.5,2.5L12,6z M6,12l2.12-2.12l-2.5-2.5L1,12 l4.62,4.62l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5L23,12l-4.62-4.62l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5L12,23l4.62-4.62 l-2.5-2.5L12,18z" /></g></svg>
                  <span>REST API V2 Specification</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./user#api-doc">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32 " width="18" height="18"><title>file_type_swagger</title><path d="M30,16a14,14,0,1,1-4.1-9.9A13.956,13.956,0,0,1,30,16Z" fill="#333" /><path d="M27.9,16a11.9,11.9,0,1,1-3.485-8.415A11.863,11.863,0,0,1,27.9,16Z" fill="#fff" /><path d="M11.66,15.983a.938.938,0,0,1,.977-.976.976.976,0,1,1-.977.976Z" fill="#333" /><path d="M15.031,15.983a.938.938,0,0,1,.977-.976.976.976,0,1,1-.977.976Z" fill="#333" /><path d="M18.4,15.983a.938.938,0,0,1,.977-.976.976.976,0,1,1-.977.976Z" fill="#333" /><path d="M7.619,16.89V15.142A2.824,2.824,0,0,0,8.5,15a1.126,1.126,0,0,0,.439-.441,2.1,2.1,0,0,0,.254-.776,9.08,9.08,0,0,0,.055-1.216,10.547,10.547,0,0,1,.123-1.97,1.847,1.847,0,0,1,.446-.9,1.72,1.72,0,0,1,.81-.552,4.788,4.788,0,0,1,1.316-.131h.363v1.437a3.177,3.177,0,0,0-.977.091.63.63,0,0,0-.319.277,3.372,3.372,0,0,0-.1.941q0,.459-.062,1.741a4.639,4.639,0,0,1-.178,1.169,2.435,2.435,0,0,1-.367.739,2.939,2.939,0,0,1-.682.6,2.432,2.432,0,0,1,.662.579,2.377,2.377,0,0,1,.394.8,5.8,5.8,0,0,1,.178,1.267q.048,1.209.048,1.544a3.034,3.034,0,0,0,.11.932.694.694,0,0,0,.333.288,2.927,2.927,0,0,0,.963.1v1.486h-.363a3.843,3.843,0,0,1-1.292-.192A1.905,1.905,0,0,1,9.82,22.3a1.875,1.875,0,0,1-.456-.9,8.724,8.724,0,0,1-.117-1.686,8.414,8.414,0,0,0-.11-1.741,1.553,1.553,0,0,0-.456-.834A2.106,2.106,0,0,0,7.619,16.89Z" fill="#333" /><path d="M23.285,17.143a1.553,1.553,0,0,0-.456.834,8.414,8.414,0,0,0-.11,1.741A8.724,8.724,0,0,1,22.6,21.4a1.875,1.875,0,0,1-.456.9,1.905,1.905,0,0,1-.833.521,3.843,3.843,0,0,1-1.292.192h-.363V21.53a2.927,2.927,0,0,0,.963-.1.694.694,0,0,0,.333-.288,3.034,3.034,0,0,0,.11-.932q0-.335.048-1.544A5.8,5.8,0,0,1,21.29,17.4a2.377,2.377,0,0,1,.394-.8,2.432,2.432,0,0,1,.662-.579,2.939,2.939,0,0,1-.682-.6,2.435,2.435,0,0,1-.367-.739,4.639,4.639,0,0,1-.178-1.169q-.062-1.282-.062-1.741a3.372,3.372,0,0,0-.1-.941.63.63,0,0,0-.319-.277,3.177,3.177,0,0,0-.977-.091V9.016h.363a4.788,4.788,0,0,1,1.316.131,1.72,1.72,0,0,1,.81.552,1.847,1.847,0,0,1,.446.9,10.547,10.547,0,0,1,.123,1.97,9.08,9.08,0,0,0,.055,1.216,2.1,2.1,0,0,0,.254.776,1.126,1.126,0,0,0,.439.441,2.824,2.824,0,0,0,.883.144V16.89A2.106,2.106,0,0,0,23.285,17.143Z" fill="#333" /></svg>
                  <span>REST API V2 Documentation</span>
                </a>
              </li> */}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./dev#pi">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className="bi d-block mx-auto mb-1" height="24px" viewBox="0 0 24 24" width="24px" fill="#2470dc"><g><rect fill="none" height="24" width="24" /><circle cx="12" cy="3.5" fill="none" r=".75" /><circle cx="12" cy="3.5" fill="none" r=".75" /><circle cx="12" cy="3.5" fill="none" r=".75" /><path d="M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C4.86,3,4.73,3.01,4.6,3.04C4.21,3.12,3.86,3.32,3.59,3.59 c-0.18,0.18-0.33,0.4-0.43,0.64C3.06,4.46,3,4.72,3,5v14c0,0.27,0.06,0.54,0.16,0.78c0.1,0.24,0.25,0.45,0.43,0.64 c0.27,0.27,0.62,0.47,1.01,0.55C4.73,20.99,4.86,21,5,21h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11,14.17l-1.41,1.42L6,12 l3.59-3.59L11,9.83L8.83,12L11,14.17z M12,4.25c-0.41,0-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75s0.75,0.34,0.75,0.75 S12.41,4.25,12,4.25z M14.41,15.59L13,14.17L15.17,12L13,9.83l1.41-1.42L18,12L14.41,15.59z" /></g></svg>
              <span className="text-dark text-small" >Product Integrations</span>
              {/* <li className="nav-item">
                        <a className="nav-link" href="./user#product-feed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                          <span>Product Feed</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="./user#light-doc">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                          <span>Light Library</span>
                        </a>
                      </li>
                    </a>
                  </li> */}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./dev#ai">
            <svg xmlns="http://www.w3.org/2000/svg" className="bi d-block mx-auto mb-1" height="24px" viewBox="0 0 24 24" width="24px" fill="#2470dc"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"/></svg>
              <span className="text-dark text-small">Analytic Integrations</span>
            </a>
          </li>
        </ul>
        <div className="container-fluid">
        <div className="row">
              <div className="p-5 mb-4 bg-light-b rounded-3">
                <h1 className="display-5 fw-bold text-white" id="api">REST API V2</h1>
                <p className="col text-white">This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              </div>
              </div>
              <ApiSpec></ApiSpec>
              
        <div className="row">
                 
              <div className="p-5 mb-4 bg-light rounded-3">
                  <h2 className="display-5 fw-bold" id="api-doc">REST API V2 Documentation</h2>
                  <p className="">This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                  <Link to={"/api-doc"} className="nav-link">
                    <button className="btn btn-primary" type="button">Start Testing</button>
                  </Link>
                </div>
              </div>
             
                <div className="row">
                  <div className="p-5 mb-4 bg-light-b rounded-3">
                    <h1 className="display-5 fw-bold text-white" id="pi">Product Integration</h1>
                    <p className="col text-white">This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                    <ul className="text-white">
                      <li>Product Feed Requirement</li>
                      <li>Taggstar Light Library</li>
                    </ul>
                  </div>
                  </div>
                  <ProductFeed></ProductFeed>
                  <LightDoc></LightDoc>
                
               
                  <div className="row">
                    <div className="p-5 mb-4 bg-light-b rounded-3">
                      <h1 className="display-5 fw-bold text-white" id="ai">Analytic Integeration</h1>
                      <p className="text-white">This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                    </div>
                    </div>
                    <Analytic></Analytic>
                 
              
          
         
        
            <Switch>
              <Route exact path="/api-doc" component={Swagger} />
              <Route exact path="/user#light-doc" component={LightDoc} />
              <Route exact path="/user#product-feed" component={ProductFeed} />
              <Route exact path="/user#api-spec" component={ApiSpec} />
              <Route exact path="/user#analytic" component={Analytic} />
           
            </Switch>
          </div>
        </div>
     
    );
  }
}
