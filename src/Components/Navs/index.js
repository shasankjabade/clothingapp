import React, { Component } from "react";

/* UI Element Imports */

import { Breadcrumbs, Link } from "@material-ui/core";
/**
 * Nav Component
 */
export default class Nav extends Component {
  render() {
    return (
      <Breadcrumbs separator=">" style={{ paddingTop: 20 }}>
        <Link style={{ color: "black", fontSize: 15 }}>Home</Link>
        <Link style={{ color: "black", fontSize: 15 }}>Shirts</Link>
        <Link style={{ color: "black", fontSize: 15 }}>T-Shirts</Link>
      </Breadcrumbs>
    );
  }
}
