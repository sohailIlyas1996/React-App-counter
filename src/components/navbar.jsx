import React from "react";
const Navbar = ({totalCounter}) => {
  console.log("render navbar");
  return (  <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://google.com">
      Never expand <span>{totalCounter}</span>
    </a>
   
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarsExample01"
      aria-controls="navbarsExample01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav> );
}
 
export default Navbar;
