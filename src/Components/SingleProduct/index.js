import React, { Component } from "react";
/* UI Element Imports */

import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Box
} from "@material-ui/core";
import { Loyalty } from "@material-ui/icons";
import { Link } from "react-router-dom";
/**
 * SingleProduct Component
 */

export default class SingeProduct extends Component {
  render() {
    return (
      <Grid item xs={6} md={4}>
        <Link to="/product/" style={{ textDecoration: "none" }}>
          <Card>
            <CardActionArea>
              <img
                src={process.env.PUBLIC_URL + "/images/image (4).png"}
                style={{ width: 168, height: 192 }}
              ></img>
              <Loyalty style={{ top: 8, right: 8, position: "absolute" }} />
              <CardContent style={{ backgroundColor: "#F0F2F3" }}>
                <Box textAlign="left" fontFamily="Monospace" fontSize={16}>
                  Shirt that is awesome
                </Box>
                <Box textAlign="left" style={{ color: "grey" }}>
                  Men's
                </Box>
                {this.props.discount % 2 === 1 ? (
                  <Box textAlign="left">$20.00</Box>
                ) : (
                  <Box textAlign="left">
                    <strike>$20.00</strike> $10.00
                  </Box>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    );
  }
}
