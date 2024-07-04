import * as React from "react";

const main = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
  textAlign: "center",
};

const heading = {
  fontSize: "2rem",
  marginBottom: "1rem",
};

const IndexPage = () => {
  return (
    <main style={main}>
      <div>
        <h1 style={heading}>Site Auth Gatsby Demo</h1>
        <p>
          This is a demo of using the <code>`site-auth-react`</code> package
          with Gatsby.
        </p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Gatsby Demo - Site Auth</title>;
