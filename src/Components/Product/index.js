import React, { Component } from "react";
/** 
 * Component Import
 * */ 
import Nav from "../Navs";
import Description from "../Description";

/**
 * UI Element Imports 
 * */
import { Container, Button, Grid, Hidden } from "@material-ui/core";
/**
 * Product Component
 */
export default class Product extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Hidden smDown>
            <div style={{ paddingLeft: 15 }}>
              <Nav />
            </div>
          </Hidden>
          <img
            src={process.env.PUBLIC_URL + "/images/image (4).png"}
            style={{ paddingTop: 20, height: 448, width: 391 }}
          ></img>
          <Grid container spacing={4} style={{ padding: 20 }}>
            <Grid item>
              <Button
                style={{
                  borderStyle: "solid",
                  borderWidth: 1,
                  backgroundColor: "white"
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/image (4).png"}
                  style={{ height: 50, width: 50 }}
                />
              </Button>
              <Button
                style={{
                  borderStyle: "solid",
                  borderWidth: 1,
                  backgroundColor: "white"
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/image (4).png"}
                  style={{ height: 50, width: 50 }}
                />
              </Button>
              <Button
                style={{
                  borderStyle: "solid",
                  borderWidth: 1,
                  backgroundColor: "white"
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/image (4).png"}
                  style={{ height: 50, width: 50 }}
                />
              </Button>
              <Button
                style={{
                  borderStyle: "solid",
                  borderWidth: 1,
                  backgroundColor: "white"
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/image (4).png"}
                  style={{ height: 50, width: 50 }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            backgroundColor: "#F0F2F3",
            backgroundClip: "content-box"
          }}
        >
          <Description />
        </Grid>
      </Grid>
    );
  }
}
