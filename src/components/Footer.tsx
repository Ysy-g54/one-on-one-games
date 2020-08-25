import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="flex-end">
            <Typography className={classes.title} component="div">
              <Box>質問：y.bskmelo7@gmail.com</Box>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
