import { Nav } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import routes from '../../routes'
import React from "react";
import {Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/img/react-logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <PerfectScrollbar>
        <div className="logo">
          <Link
            to="/"
            className="logo-mini"
          >
            <div className="logo-img">
              <img src={ logo } alt="react-logo" />
            </div>
          </Link>
          <Link
            className="simple-text logo-normal"
            to="/">
            phil-study
          </Link>
        </div>
        <Nav >
          {
            routes.map((route, index) => {
              return (
                <li key={ index } className="sidebar-item">
                  <NavLink
                    to={ route.path }
                    className="nav-link"
                  >
                    <FontAwesomeIcon icon={ route.icon } size="lg" />
                    <p>{ route.title }</p>
                  </NavLink>
                </li>
              )
            })
          }
        </Nav>
      </PerfectScrollbar>
    </div>
  )
};

export default Sidebar;