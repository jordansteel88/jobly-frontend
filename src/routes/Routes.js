import React from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../profiles/ProfileForm";
import GuardedRoutes from "./GuardedRoutes";

const Routes = ({ login, register }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        {/* <Route exact path="/companies"> */}
        <GuardedRoutes exact path="/companies">
          <CompanyList />
        {/* </Route>   */}
        </GuardedRoutes>  

        {/* <Route exact path="/companies/:handle"> */}
        <GuardedRoutes exact path="/companies/:handle">
          <CompanyDetail />
        {/* </Route>  */}
        </GuardedRoutes> 

        {/* <Route exact path="/jobs"> */}
        <GuardedRoutes exact path="/jobs">
          <JobList />
        {/* </Route>    */}
        </GuardedRoutes>   

        <Route exact path="/login">
          <LoginForm login={login}/>
        </Route> 

        <Route exact path="/signup">
          <SignupForm register={register} />
        </Route>  

        {/* <Route exact path="/profile"> */}
        <GuardedRoutes exact path="/profile">
          <ProfileForm />
        {/* </Route> */}
        </GuardedRoutes>

        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default Routes;