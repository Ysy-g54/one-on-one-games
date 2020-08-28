import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Icon, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    link: {
      color: "#fff",
      marginLeft: 4,
    },
    mailIcon: {
      marginBottom: -5,
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
              <Box>
                質問： y.bskmelo7@gmail.com
                <a href="mailto:y.bskmelo7@gmail.com" className={classes.link}>
                  <Icon className={classes.mailIcon}>mail</Icon>
                </a>
              </Box>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
