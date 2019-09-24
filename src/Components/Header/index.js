import React, { Component } from "react";

/* UI Element Imports */

import { Grid, Tabs, Tab, Hidden, Box } from "@material-ui/core";
import { Search, Lens, Menu } from "@material-ui/icons";
/**
 * Header Component
 */
export default class Header extends Component {
  render() {
    return (
      <Grid
        container
        spacing={2}
        style={{ backgroundColor: "black", height: 70 }}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item sm={4} md={2}>
          <Box
            fontSize={10}
            style={{ display: "inline-block" }}
            style={{ float: "left" }}
          >
            <Lens style={{ color: "black"  }} />
            <Lens style={{ color: "grey"  }} />
            <Lens style={{ color: "grey" }} />
            <Lens style={{ color: "grey" }} />
          </Box>
        </Grid>
        <Hidden smDown>
          <Grid item xs={0} md={8} lg={6}>
            <Tabs
              style={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: 15,
                lineHeight: 21
              }}
              centered
              classes={{ indicator: { backgroundColor: "#0000BC" } }}
            >
              <Tab label="Shirt" value={1} style={{color: "cyan"}}/>
              <Tab label="Pant" value={2} />
              <Tab label="Accessories" value={3} />
              <Tab label="About" value={4} />
            </Tabs>
          </Grid>
        </Hidden>
        <Grid item xs={6} md={2}>
          <Box textAlign="right">
            <Search style={{ color: "grey" }} />
            <Hidden mdUp>
              <Menu style={{ color: "grey" }} />
            </Hidden>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
