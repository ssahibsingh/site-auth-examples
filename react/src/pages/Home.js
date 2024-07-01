import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="main">
        <div>
          <h1 className="heading">Site Auth React Demo</h1>
          <p>
            This is a demo of using the <code>`site-auth-react`</code> package
            with React.js.
          </p>
          <Link to="/profile" className="link">
            Go to Profile
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
