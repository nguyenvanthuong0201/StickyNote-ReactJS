import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

export default class Note extends Component {
  render() {
    return (
      <div>
        <AppBar
          style={{
            background:
              " linear-gradient(250deg, rgba(207,235,15,1) 0%,  rgba(250,124,21,1) 100%)",
          }}
          position="fixed"
        >
          <Toolbar>
            <Typography variant="h4">StickyNote</Typography>
            <Typography variant="h6">(by <b>ThuongNguyen</b>)</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
