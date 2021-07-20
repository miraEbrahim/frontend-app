import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Switch, Route, Link } from "react-router-dom";
import BoardDeveloper from "./boards/board-developer.component";
import BoardPs from "./boards/board-ps.component";
import BoardAdmin from "./boards/board-admin.component";
import BoardUser from "./boards/board-user.component";
import BoardOnboard from "./boards/board-onboard.component";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      showPsBoard: false,
      showAdminBoard: false,
      showDevBoard: false,
      showOnboardBoard: false
    };
  }
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/home" });
    const user = AuthService.getCurrentUser();
    this.setState({
      currentUser: currentUser,
      userReady: true,
      showPsBoard: user.roles.includes("ROLE_PS"),
      showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      showOnboardBoard: user.roles.includes("ROLE_ONBOARD"),
      showDevBoard: user.roles.includes("ROLE_DEVELOPER"),
    })
  }
  render() {
    const { currentUser, showPsBoard, showAdminBoard, showDevBoard, showOnboardBoard } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="container">
        {(this.state.userReady) ?
          <div>
            <div className="container my-5">
              <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg p-3 p-lg-5 pt-lg-3">
                  <h1 className="display-4 fw-bold lh-1 text-center">Hi <strong className="text-primary">{currentUser.username}</strong></h1>
                  <p className="lead text-center">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                  <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
                    <button type="button" class=" btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                      {showPsBoard && (
                        <Link to={"/ps"} className=" text-white">
                          Professional services
                        </Link>
                      )}
                      {showAdminBoard && (
                        <Link to={"/admin"} className="text-white">
                          Admin
                        </Link>
                      )}
                      {showOnboardBoard && (
                        <Link to={"/onboard"} className="text-white">
                          Onboarding
                        </Link>
                      )}
                      {showDevBoard && (
                        <Link to={"/dev"} className="text-white">
                          Developer Portal
                        </Link>
                      )}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-3">
              <Switch>
                <Route path="/dev" component={BoardDeveloper} />
                <Route path="/ps" component={BoardPs} />
                <Route path="/admin" component={BoardAdmin} />
                <Route path="/onboard" component={BoardOnboard} />
                <Route path="/user" component={BoardUser} />
              </Switch>
            </div>
          </div> : null}
      </div>
    );
  }
}
