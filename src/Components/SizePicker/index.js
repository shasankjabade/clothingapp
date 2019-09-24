import React, { Component } from "react";
/* UI Element Imports */

import { Grid, Button } from "@material-ui/core";
/**
 * Size Picker Component
 */

export default class SizePicker extends Component {
  render() {
    return (
      <Grid container spacing={1} style={{ paddingTop: 10, paddingBottom: 30 }}>
        <Grid item>
          <Button
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderWidth: 1,
              height: 70,
              width: 70,
              fontSize: 18
            }}
          >
            S
          </Button>
        </Grid>
        <Grid item>
          <Button
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderWidth: 1,
              height: 70,
              width: 70,
              fontSize: 18
            }}
          >
            M
          </Button>
        </Grid>
        <Grid item>
          <Button
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderWidth: 1,
              height: 70,
              width: 70,
              fontSize: 18
            }}
          >
            L
          </Button>
        </Grid>
        <Grid item>
          <Button
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderWidth: 1,
              height: 70,
              width: 70,
              fontSize: 18
            }}
          >
            XL
          </Button>
        </Grid>
      </Grid>
    );
  }
}
