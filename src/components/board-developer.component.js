import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import UserService from "../services/user.service";
import Swagger from "./swagger.component";
import ProductFeed from "./product-feed.component";
import LightDoc from "./light-doc.component";
import ApiSpec from "./api-spec.component";
import Analytic from "./analytic.component";
import './User.css'

export default class BoardDeveloper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
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
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">

                <li className="nav-item">
                  <a className="nav-link" href="./user#api">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /><path d="M14,12l-2,2l-2-2l2-2L14,12z M12,6l2.12,2.12l2.5-2.5L12,1L7.38,5.62l2.5,2.5L12,6z M6,12l2.12-2.12l-2.5-2.5L1,12 l4.62,4.62l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5L23,12l-4.62-4.62l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5L12,23l4.62-4.62 l-2.5-2.5L12,18z" /></g></svg>
                    <span>REST API V2</span>
                    <li className="nav-item">
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
                    </li>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./user#prod-int">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    <span>Product Integrations</span>
                    <li className="nav-item">
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
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./user#analytic">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" /></svg>
                    <span>Analytic Integrations</span>

                  </a>
                </li>
               
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">


            <div className="p-5 mb-4 bg-light rounded-3">

              <h1 className="display-5 fw-bold" id="api">REST API V2</h1>
              <p className="col-md-8 fs-4">Swagger UI allows anyone — be it your development team or your end consumers — to visualize and interact with the API’s resources without having any of the implementation logic in place. It’s automatically generated from your OpenAPI (formerly known as Swagger) Specification, with the visual documentation making it easy for back end implementation and client side consumption.</p>
              <ApiSpec></ApiSpec>



            </div>
            <div className="p-5 mb-4 bg-light rounded-3">

              <h2 className="display-5 fw-bold" id="api-doc">REST API V2 Documentation</h2>
              <p className="col-md-8 fs-4">Swagger UI allows anyone — be it your development team or your end consumers — to visualize and interact with the API’s resources without having any of the implementation logic in place. It’s automatically generated from your OpenAPI (formerly known as Swagger) Specification, with the visual documentation making it easy for back end implementation and client side consumption.</p>


              <Link to={"/api-doc"} className="nav-link">
                <button className="btn btn-primary" type="button">Start Testing</button>
              </Link>

            </div>
            <div className="p-5 mb-4 bg-light rounded-3">

              <h1 className="display-5 fw-bold" id="prod-int">Product Integration</h1>
              <p className="col-md-8 fs-4">This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <ul>
                <li>Product Feed Requirement</li>
                <li>Taggstar Light Library</li>
              </ul>
              <ProductFeed></ProductFeed>
              <LightDoc></LightDoc>

            </div>
            <div className="p-5 mb-4 bg-light rounded-3">

            <h3 className="blog-post-title" id="analytic">Analytic Integeration</h3>
             
             
              <Analytic></Analytic>

            </div>

          </main>
        </div>



        <div>
          <Switch>
            <Route exact path="/api-doc" component={Swagger} />
            <Route exact path="/user#light-doc" component={LightDoc} />
            <Route exact path="/user#product-feed" component={ProductFeed} />
            <Route exact path="/user#api-spec" component={ApiSpec} />
            <Route exact path="/user#analytic" component={Analytic} />
            {/* <Route exact path="/product-int" component={ProductInt} /> */}
            {/* <Route exact path={["/", "/login"]} component={Login} />
        <Route exact path="/home" component={Home} />
        // <Route exact path="/api-doc" component={Swagger} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/user" component={BoardUser} />
        <Route path="/mod" component={BoardModerator} />
        <Route path="/admin" component={BoardAdmin} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}
