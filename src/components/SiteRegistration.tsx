import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Snackbar,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  })
);

export interface SnackbarMessage {
  message: string;
  key: number;
}

export interface State {
  open: boolean;
  snackPack: SnackbarMessage[];
  messageInfo?: SnackbarMessage;
  form: {
    siteNm: string;
    siteUrl: string;
    mail: string;
  };
}

export default function SiteRegistration() {
  const [snackPack, setSnackPack] = React.useState<SnackbarMessage[]>([]);
  const [open, setOpen] = React.useState(false);
  const [form, setItem] = React.useState({ siteNm: "", siteUrl: "", mail: "" });
  const [messageInfo, setMessageInfo] = React.useState<
    SnackbarMessage | undefined
  >(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const registerSite = () => {
    let message: string = "";
    if (!Object.values(form).some((e) => e === "")) {
      message = "サイトを登録しました!";
      setItem({ siteNm: "", siteUrl: "", mail: "" });
    } else {
      message = "登録に失敗しました。必須入力の部分を入力してください。";
    }
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const handleClose = (
    event: React.SyntheticEvent | MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const updateItem = (e: any) => {
    setItem({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const classes = useStyles();
  return (
    <div>
      <Box mt={2}>
        <Typography variant="h6">*必須</Typography>
      </Box>
      <Box mt={8}>
        <TextField
          label="サイト名*"
          name="siteNm"
          variant="outlined"
          value={form.siteNm}
          onChange={updateItem}
        />
      </Box>
      <Box mt={4}>
        <TextField
          label="サイトURL*"
          name="siteUrl"
          variant="outlined"
          value={form.siteUrl}
          onChange={updateItem}
        />
      </Box>
      <Box mt={4}>
        <TextField
          label="あなたのメールアドレス*"
          name="mail"
          variant="outlined"
          value={form.mail}
          onChange={updateItem}
        />
      </Box>
      <Box mt={4} mb={4}>
        <Button variant="contained" color="primary" onClick={registerSite}>
          登録する
        </Button>
      </Box>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
