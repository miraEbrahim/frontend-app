import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Login from "./login.component";
import { Switch, Route, Link } from "react-router-dom";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }
  logOut() {
    AuthService.logout();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        
  
  
  <footer class="footer mt-auto py-3 bg-light">
  <div class="container">
   
    {currentUser ? (
            <div className="navbar-nav justify-content-between ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item logout">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
             
        </div>
        )}
  </div>
</footer>
<div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
           
            
          </Switch>
        </div>
      </div>
    );
  }
}
export default Footer;
