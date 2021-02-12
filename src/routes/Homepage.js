import React, { useContext } from "react";
import { Jumbotron, Button } from 'reactstrap';

import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";

const Homepage = () => {
  const { currentUser } = useContext(UserContext);

  return (
      <div className="Homepage">
        <Jumbotron className="mt-5">
          <h1 className="display-2">Jobly</h1>
          <p className="lead">All the jobs in one, convenient place.</p>
          {currentUser
              ? <h2 className="text-primary">
                  Welcome back, {currentUser.username}!
                </h2>
              : (
                <p>
                  <Button href="/login" className="mx-3" color="primary">Log In</Button>
                  <Button href="/signup" className="mx-3" color="primary">Sign Up</Button>
                </p>
              )}
        </Jumbotron>
      </div>
  );

  // return (
  //   <div className="Homepage">
  //     <Jumbotron className="mt-5">
  //       <h1 className="display-2">Jobly</h1>
  //       <p className="lead">Research companies, see who's hiring, and apply to the jobs that suit you best!</p>
  //       <hr className="my-2" />
  //         {currentUser
  //           ? <h1 className="display-2">
  //               Welcome back, {currentUser}!
  //             </h1>
  //           : <p>
  //               <Button href="/login" className="mx-3" color="primary">Log In</Button>
  //               <Button href="/signup" className="mx-3" color="primary">Sign Up</Button>
  //             </p>
  //         }
  //     </Jumbotron>
  //   </div>
  // );
}

export default Homepage;