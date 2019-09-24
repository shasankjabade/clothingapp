import React, { Component } from "react";

/* UI Element Imports
*/
import { Grid, Button } from "@material-ui/core";
/**
 * ColorPicker Component
 */
export default class ColorPicker extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item>
          <Button style={{ borderStyle: "solid", borderWidth: 1 }}>
            <img src={process.env.PUBLIC_URL + "/images/image (1).png"} />
          </Button>
        </Grid>
        <Grid item>
          <Button style={{ borderStyle: "solid", borderWidth: 1 }}>
            <img src={process.env.PUBLIC_URL + "/images/image (2).png"} />
          </Button>
        </Grid>
        <Grid item>
          <Button style={{ borderStyle: "solid", borderWidth: 1 }}>
            <img src={process.env.PUBLIC_URL + "/images/image (3).png"} />
          </Button>
        </Grid>
        <Grid item>
          <Button style={{ borderStyle: "solid", borderWidth: 1 }}>
            <img src={process.env.PUBLIC_URL + "/images/image.png"} />
          </Button>
        </Grid>
      </Grid>
    );
  }
}
