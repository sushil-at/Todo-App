import React from 'react';
import PropTypes from 'prop-types';
import {
    Link
  } from "react-router-dom";
  

export default function Header({title}) {
    return (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/"><b>{title}</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
            </li>
            </ul>
            
        </div>
        </div>
        </nav>
    </header>
    )
}

Header.defaultProps = {
    title: "Default Title!!"
}

Header.propTypes = {
    title: PropTypes.string
}

