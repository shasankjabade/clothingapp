import React, { Component } from "react";

/* UI Element Imports */

import { Typography, Box, Divider } from "@material-ui/core";
import { TreeView, TreeItem } from "@material-ui/lab";
import { IndeterminateCheckBox, ControlPoint } from "@material-ui/icons";
/**
 * Filter Component
 */
export default class Filter extends Component {
  render() {
    return (
      <Typography
        style={{
          borderStyle: "solid",
          borderWidth: 1,
          fontFamily: "Montserrat",
          justifyContent: "center"
        }}
      >
        <Box
          textAlign="center"
          fontFamily="Montserrat"
          fontSize={20}
          justifyContent="center"
          style={{ height: 50 }}
        >
          Refined Results
        </Box>
        <Divider />
        <TreeView
          defaultCollapseIcon={<IndeterminateCheckBox />}
          defaultExpandIcon={<ControlPoint />}
          style={{ fontSize: 16 }}
        >
          <TreeItem nodeId="1" label="GENDER/AGE">
            <TreeItem nodeId="2" label="Boys(100)"></TreeItem>
            <TreeItem nodeId="3" label="Hover"></TreeItem>
            <TreeItem nodeId="4" label="Women(100)"></TreeItem>
            <TreeItem nodeId="5" label="Men(100)"></TreeItem>
          </TreeItem>
          <Divider />
          <TreeItem nodeId="6" label="PRODUCT STYLE">
            <TreeItem label="test" nodeId="7"></TreeItem>
          </TreeItem>
          <Divider />
          <TreeItem nodeId="8" label="SPORT">
            <TreeItem label="test" nodeId="9"></TreeItem>
          </TreeItem>
          <Divider />
          <TreeItem nodeId="10" label="BRAND">
            <TreeItem label="test" nodeId="11"></TreeItem>
          </TreeItem>
          <Divider />
          <TreeItem nodeId="12" label="SIZE">
            <TreeItem label="test" nodeId="13"></TreeItem>
          </TreeItem>
          <Divider />
          <TreeItem
            nodeId="14"
            label="COLOR"
            style={{ height: 30, justifyContent: "center" }}
          >
            <TreeItem label="test" nodeId="15"></TreeItem>
          </TreeItem>
        </TreeView>
      </Typography>
    );
  }
}
