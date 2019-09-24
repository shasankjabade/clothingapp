import React, { Component } from "react";

/*  Component Imports*/

import Nav from "../Navs";
import Filter from "../Filter";
import SingleProduct from "../SingleProduct";

/* UI Element Imports */

import {
  Typography,
  Box,
  Grid,
  Hidden,
  Button,
  Checkbox,
  NativeSelect,
  MenuItem,
  FormControlLabel,
  Container,
  MobileStepper
} from "@material-ui/core";

import {
  Menu,
  KeyboardArrowRight,
  KeyboardArrowLeft,
  Close
} from "@material-ui/icons";
/**
 * ProductsDisplay Component
 */

export default class ProductsDisplay extends Component {
  render() {
    return (
      <Container>
        <Hidden smDown>
          <Nav />
        </Hidden>
        <Typography component="div" style={{ paddingTop: 20 }}>
          <Box textAlign="left" fontWeight="fontWeightBold" fontSize={48}>
            Super Awesome T-Shirts
          </Box>
          <Box textAlign="left">
            Showing <b>60</b> of <b>2395</b> results
          </Box>
        </Typography>
        <Hidden smUp>
          <Button variant="outlined">
            Filter and Sort <Menu />
          </Button>
        </Hidden>
        <Grid container spacing={2} style={{ paddingTop: 20 }}>
          <Hidden smDown>
            <Grid item xs={2}>
              <Filter />
            </Grid>
          </Hidden>
          <Grid item md={10}>
            <Hidden smDown>
              <Typography style={{ float: "left" }}>
                <Button variant="outlined">
                  {" "}
                  Label <Close />{" "}
                </Button>
                <Button variant="outlined">
                  {" "}
                  Label <Close />
                </Button>
              </Typography>
              <Typography style={{ float: "right" }}>
                <NativeSelect inputProps={{ name: "input" }}>
                  <option value=""> Input</option>
                </NativeSelect>
              </Typography>
            </Hidden>
            <Grid container xs spacing={1}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => {
                return <SingleProduct discount={value} />;
              })}
            </Grid>
            <Box>
              <MobileStepper
                activeStep={0}
                steps={6}
                variant="text"
                position="static"
                nextButton={
                  <Button>
                    <KeyboardArrowRight />
                  </Button>
                }
                backButton={
                  <Button>
                    <KeyboardArrowLeft />
                  </Button>
                }
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
