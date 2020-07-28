import React from "react";
import { Button, Box, TextField } from "@material-ui/core";

export default class SiteRegistration<SiteState> extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { siteNm: "", siteUrl: "", mail: "" };
    this.changeSiteName = this.changeSiteName.bind(this);
    this.changeSiteUrl = this.changeSiteUrl.bind(this);
    this.changeMail = this.changeMail.bind(this);
  }

  render() {
    return (
      <div>
        <Box mt={8}>
          <TextField
            label="サイト名"
            variant="outlined"
            onChange={this.changeSiteName}
          />
        </Box>
        <Box mt={4}>
          <TextField
            label="サイトURL"
            variant="outlined"
            onChange={this.changeSiteUrl}
          />
        </Box>
        <Box mt={4}>
          <TextField
            label="あなたのメールアドレス"
            variant="outlined"
            onChange={this.changeMail}
          />
        </Box>
        <Box mt={4} mb={4}>
          <Button variant="contained" color="primary" onClick={this.registerSite}>
            送信する
          </Button>
        </Box>
      </div>
    );
  }

  changeSiteName(e: any): void {
    this.setState({ siteNm: e.target.value });
  }

  changeSiteUrl(e: any): void {
    this.setState({ siteUrl: e.target.value });
  }

  changeMail(e: any): void {
    this.setState({ mail: e.target.value });
  }
  registerSite(): void {
    alert("クリックしました!!");
  }
}
