import React from "react";
import { Link } from "react-router-dom";
import { useSiteAuth } from "site-auth-react";

const Profile = () => {
  const { isAuthenticated } = useSiteAuth();

  return (
    <div>
      <h1>Profile Page</h1>
      {isAuthenticated ? <p>You are authenticated.</p> : <p>Please log in.</p>}
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Profile;
