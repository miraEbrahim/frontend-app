import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
import AuthService from "../services/auth.service";
import Login from "./login.component";
import Profile from "./profile.component";
import BoardDeveloper from "./boards/board-developer.component";
import BoardPs from "./boards/board-ps.component";
import BoardAdmin from "./boards/board-admin.component";
import BoardUser from "./boards/board-user.component";
import BoardOnboard from "./boards/board-onboard.component";

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
      <div className="container-fluid px-5">
        <header className="pt-3 px-5">
          <div className="d-flex  flex-md-row justify-content-between pb-3  ">
            <a  className="d-flex align-items-center text-primary text-decoration-none">
             <svg xmlns="http://www.w3.org/2000/svg" width="90.9" height="29.609" viewBox="0 0 90.9 29.609"><g transform="translate(-796.4 -297.691)"><text transform="translate(808 321)" fill="#2470dc" stroke="#2470dc" stroke-width="0.3" font-size="20" font-family="Rockwell-Regular, Rockwell" letter-spacing="-0.03em"><tspan x="0" y="0">taggsta</tspan><tspan y="0" letter-spacing="-0.24em"> </tspan><tspan y="0" letter-spacing="-0.02em">r</tspan></text><path d="M5.829,0A5.829,5.829,0,1,1,0,5.829H0A5.831,5.831,0,0,1,5.829,0ZM9.792,4.663,7.353,6.456,8.3,9.312,5.857,7.529,3.393,9.312,4.329,6.46,1.88,4.649l3.02.007.947-2.791.933,2.8Z" transform="translate(796.4 297.691)" fill="#2470dc" fill-rule="evenodd"></path></g></svg> 

            </a>
            
            <div className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              {currentUser ? (
                <div className="me-3  text-primary text-decoration-none px-5 ">
                  <a href="/login" className="d-flex align-items-center mb-lg-0 me-lg-auto text-primary" onClick={this.logOut}>
                    LogOut
                  </a>
                </div>
              ) : (
                <div className=" ml-auto">
                  <a className="">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/login" component={Login} />
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
