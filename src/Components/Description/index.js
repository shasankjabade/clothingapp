import React, { Component } from "react";

/* UI Element Imports */

import { Typography, Box, Divider, Button, Grid } from "@material-ui/core";
import { Star, StarBorder } from "@material-ui/icons";
/* Component Imports */

import ColorPicker from "../ColorPicker";
import SizePicker from "../SizePicker";
/**
 * Description Component
 */

export default class Description extends Component {
  render() {
    return (
      <Typography component="div" style={{ paddingTop: 20, marginLeft: 50 }}>
        <Box
          textAlign="left"
          fontWeight="fontWeightLight"
          fontFamily="Montserrat"
          style={{
            color: "#6A6A6A",
            fontSize: 16,
            fontFamily: "Montserrat"
          }}
        >
          MEN'S
        </Box>
        <Box
          fontWeight="fontWeightBold"
          textAlign="left"
          fontSize={30}
          lineHeight={2}
          fontFamily="Montserrat"
        >
          Nice T-Shirt
        </Box>
        <Box
          textAlign="left"
          fontFamily="Montserrat"
          fontSize={22}
          lineHeight={2}
          fontWeight="fontWeightBold"
        >
          $60.00
        </Box>
        <Box textAlign="left">
          <Box component="span">
            <Star />
            <Star />
            <Star />
            <Star />
            <StarBorder />
          </Box>
          <Box
            component="span"
            fontSize={23}
            fontFamily="Montserrat"
            style={{ color: "grey" }}
          >
            4/5
          </Box>
        </Box>
        <Box textAlign="left" style={{ color: "grey" }} fontSize={15}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Box>
        <Divider />
        <Box
          textAlign="left"
          style={{ color: "grey", paddingTop: 20, fontSize: 12 }}
          fontWeight="fontWeightBold"
        >
          SELECT COLOR
        </Box>
        <ColorPicker />
        <Box
          textAlign="left"
          style={{ color: "grey", paddingTop: 15, fontSize: 12 }}
          fontWeight="fontWeightBold"
        >
          SELECT SIZE
        </Box>
        <SizePicker />
        <Divider />
        <Grid container spacing={1} style={{ paddingTop: 10 }}>
          <Grid item md={6} sm={12}>
            <Button
              variant="outlined"
              color="primary"
              style={{ width: 229, height: 70 }}
            >
              FIND IN STORE
            </Button>
          </Grid>
          <Grid item md={6} sm={12}>
            <Button
              variant="contained"
              color="primary"
              style={{ paddingLeft: 15, width: 229, height: 70 }}
            >
              ADD TO CART
            </Button>
          </Grid>
        </Grid>
        <Box textAlign="left">
          International shipping restrictions may apply !
        </Box>
      </Typography>
    );
  }
}
