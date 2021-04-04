import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Loading } from "./components/Loading";
import { withdraw } from "./services/withdraw";
import { IPayOutbox } from "./models/PayoutBox";
import "./App.css";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
  input: {
    marginBottom: 15,
  },
  payoutBoxContainer: {
    display: "flex",
    padding: "20px 0px",
  },
  payoutBoxItem: {
    marginRight: 15,
  },
});

function App() {
  const classes = useStyles();
  const [number, setNumber] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [payoutBoxs, setPayoutBoxs] = useState<IPayOutbox[]>([]);
  const onInputChange = (e: any) => {
    setNumber(e.target.value);
  };
  const submit = async () => {
    if (!number) {
      return;
    }
    setLoading(true);
    const result: IPayOutbox[] = await withdraw(number);
    setPayoutBoxs(result);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container fixed className={classes.container}>
      <Grid
        container
        className={classes.container}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <TextField
          value={number}
          className={classes.input}
          onChange={onInputChange}
          id="outlined-helperText"
          label="Input number withdraw"
          variant="outlined"
          type="number"
        />
        <Button variant="contained" color="primary" onClick={submit}>
          Withdraw
        </Button>
        {payoutBoxs && payoutBoxs.length ? (
          <Grid className={classes.payoutBoxContainer}>
            {payoutBoxs.map((box) => (
              <Card className={classes.payoutBoxItem}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {box.name}
                  </Typography>
                  <List>
                    {box.cashOut?.map((cash) => (
                      <ListItem>
                        <ListItemText
                          primary={`${cash.value} x ${cash.quantily}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            ))}
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
}

export default App;
