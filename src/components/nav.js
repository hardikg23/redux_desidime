import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {

  render() {
    return (
      <div>
        <nav className="nav-top shadow new-navigation">
          <div className="grid-container">
            <div className="nav-inner grid-80 tablet-grid-75 grid-parent">
              <ul id="fnav">
                <li className="drop-menu mega-menu">
                  <Link to={"/categories"}>Categories</Link>
                </li>
                <li className="drop-menu mega-menu">
                  <Link to={"/coupons"}>Coupons</Link>
                </li>
                <li className="drop-menu mega-menu">
                  <Link to={"/deals"}>Deals</Link>
                </li>
                <li className="drop-menu mega-menu">
                  <Link to={"/topics"}>Topics</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
      );
  }
}

export default Nav;