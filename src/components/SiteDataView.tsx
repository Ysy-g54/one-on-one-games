import React from "react";
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    maxWidth: 440,
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 20,
  },
};

export interface SiteDetail {
  siteDetailId: string;
  siteNm: string;
  description: string;
  siteUrl: string;
  insertDateTime: string;
}

interface Props {
  siteDetails: SiteDetail[];
  size: number;
  isLoading: boolean;
  classes: {
    root: string;
    title: string;
    subTitle: string;
  };
}

interface State {}

class SiteDataView extends React.Component<Props, State> {
  render() {
    return (
      <Grid container justify="center">
        {this.props.isLoading ? (
          <Box m={8}>
            <CircularProgress size={80} color="secondary" />
          </Box>
        ) : (
          <Grid item xs={12}>
            <Box m={4} component="div">
              <Typography className={this.props.classes.title} gutterBottom>
                サイト数: {this.props.size}個
              </Typography>
            </Box>
          </Grid>
        )}
        {this.props.siteDetails.map((siteDetail: SiteDetail) => (
          <Box m={4} key={siteDetail.siteDetailId}>
            <Card className={this.props.classes.root} variant="outlined">
              <CardContent>
                <Typography className={this.props.classes.title} gutterBottom>
                  サイト名: {siteDetail.siteNm}
                </Typography>
                <Typography
                  className={this.props.classes.subTitle}
                  gutterBottom
                >
                  サイトについて: {siteDetail.description}
                </Typography>
                <Typography variant="body1" component="p">
                  サイトURL: {siteDetail.siteUrl}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href={siteDetail.siteUrl}
                  target="_blank"
                  rel="noopener"
                >
                  サイトへジャンプする
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(SiteDataView);
