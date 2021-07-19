import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

import AuthService from "../services/auth.service";

import Login from "./login.component";
import Register from "./register.component";
import Home from "./pages/home.component";
import Profile from "./profile.component";
import BoardDeveloper from "./boards/board-developer.component";
import BoardPs from "./boards/board-ps.component";
import BoardAdmin from "./boards/board-admin.component";
import BoardUser from "./boards/board-user.component";
import BoardOnboard from "./boards/board-onboard.component";
import Swagger from "./swagger.component";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showPsBoard: false,
      showAdminBoard: false,
      showDevBoard: false,
      showOnboardBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showPsBoard: user.roles.includes("ROLE_PS"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        showOnboardBoard: user.roles.includes("ROLE_ONBOARD"),
        showDevBoard: user.roles.includes("ROLE_DEVELOPER"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showPsBoard, showAdminBoard, showDevBoard, showOnboardBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-tagg">
          <Link to={"/"} className="navbar-brand">
            <svg xmlns="http://www.w3.org/2000/svg" width="90.9" height="29.609" viewBox="0 0 90.9 29.609"><g transform="translate(-796.4 -297.691)"><text transform="translate(808 321)" fill="#fff" stroke="#fff" stroke-width="0.3" font-size="20" font-family="Rockwell-Regular, Rockwell" letter-spacing="-0.03em"><tspan x="0" y="0">taggsta</tspan><tspan y="0" letter-spacing="-0.24em"> </tspan><tspan y="0" letter-spacing="-0.02em">r</tspan></text><path d="M5.829,0A5.829,5.829,0,1,1,0,5.829H0A5.831,5.831,0,0,1,5.829,0ZM9.792,4.663,7.353,6.456,8.3,9.312,5.857,7.529,3.393,9.312,4.329,6.46,1.88,4.649l3.02.007.947-2.791.933,2.8Z" transform="translate(796.4 297.691)" fill="#fff" fill-rule="evenodd"></path></g></svg>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showPsBoard && (
              <li className="nav-item">
                <Link to={"/ps"} className="nav-link">
                  PS Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {showOnboardBoard && (
              <li className="nav-item">
                <Link to={"/onboard"} className="nav-link">
                  Onboard Board
                </Link>
              </li>
            )}

            {showDevBoard && (
              <li className="nav-item">
                <Link to={"/dev"} className="nav-link">
                  DEV Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
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

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/api-doc" component={Swagger} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/dev" component={BoardDeveloper} />
            <Route path="/ps" component={BoardPs} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/onboard" component={BoardOnboard} />
            <Route path="/user" component={BoardUser} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Navbar;
