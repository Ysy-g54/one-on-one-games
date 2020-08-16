import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import { useLocation } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 440,
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 20,
  },
});

export interface SiteDetail {
  siteDetailId: string;
  siteNm: string;
  description: string;
  siteUrl: string;
  insertDateTime: string;
}

export interface ResponseData {
  siteDetails: SiteDetail[];
  size: number;
}

export default function SimpleCard() {
  const [siteDetails, setDatas] = React.useState<SiteDetail[]>([]);
  const [isLoading, setLoading] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const location = useLocation();
  const classes = useStyles();

  React.useEffect(() => {
    setDatas([]);
    setLoading(true);
    axios
      .get(
        `https://api.codetabs.com/v1/proxy?quest=https://script.google.com/macros/s/AKfycbwaWeRmmrACLAHh_7dxHT0bOwmQWF-hlvzTw2QwUNIpwH3BeXao/exec${location.search}`
      )
      .then((response) => {
        setDatas(response.data.siteDetails);
        setCount(response.data.size);
        setLoading(false);
      });
  }, [location.search]);

  return (
    <Grid container justify="center">
      {isLoading ? (
        <Box m={8}>
          <CircularProgress size={80} color="secondary" />
        </Box>
      ) : (
        <Grid item xs={12}>
          <Box m={4} component="div">
            <Typography className={classes.title} gutterBottom>
              サイト数: {count}個
            </Typography>
          </Box>
        </Grid>
      )}
      {siteDetails.map((siteDetail: SiteDetail) => (
        <Box m={4} key={siteDetail.siteDetailId}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                サイト名: {siteDetail.siteNm}
              </Typography>
              <Typography className={classes.subTitle} gutterBottom>
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
