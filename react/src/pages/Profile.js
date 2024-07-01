import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <main className="main">
        <div>
          <h1 className="heading">Profile Page</h1>
          <p>
            This is a demo of using the <code>`site-auth-react`</code> package
            with React.js.
          </p>
          <Link to="/" className="link">
            Go to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default Profile;
