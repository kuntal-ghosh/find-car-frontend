import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import userContext from "../../Context/userContext";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/moment";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddService() {
  const classes = useStyles();
  const history = useHistory();
  const [carData, setCarData] = useState({
    description: "",
    name: "",
    projectFile:"",
    error: {},
  });
  

 
  console.log("carData");
  console.log(carData);
  // const [loginUser, setLoginUser] = useContext(userContext);
  const [events, setEvents] = useState({});
  const { _id } = useParams();

  // useEffect(() => {
  //   async function getEvent() {
  //     try {
  //       const event = await (
  //         await fetch(
  //           `https://volunteernetworkbackend.herokuapp.com/api/events/findone/${_id}`
  //         )
  //       ).json();
  //       if (event) {
  //         setEvents(event);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getEvent();

  //   // return () => {
  //   //   cleanup
  //   // }
  // }, []);
  console.log("EVENTSSSS");
  console.log(events);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}

        <img
          src="/logos/Group 1329.png"
          alt=""
          style={{ height: "50px", marginBottom: "10px" }}
        />
        {/* <Typography component="h1" variant="h5">
          Sign up
        </Typography> */}
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                value={carData.name}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                // error={carData.error.name && carData.error.name? true : false}
                // helperText={carData.error.name && carData.error.name}
              />
            </Grid>
          
          
            <Grid item xs={12}>
              {/*  utils={DateFnsUtils} */}
              {/* <MuiPickersUtilsProvider>
                <KeyboardDatePicker
                  required
                  // disableToolbar
                  variant="inline"
                  // clearLabel
                  autoOk
                  format="L"
                  margin="normal"
                  id="date-picker-inline"
                  label="From"
                  className={classes.datepicker}
                  // value={selectedDate}
                  style={{ paddingRight: 4, width: "100%" }}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  name="date"
                  // value={}
                  value={carData.date}
                  onChange={(date) => handleStartDateChange(date)}
                  error={carData.error.date ? true : false}
                  helperText={carData.error.date}
                  // minDate=
                />
              </MuiPickersUtilsProvider> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                // variant="outlined"
                // multiline
                // required
                // fullWidth
                // id="description"
                // label="Description"
                name="description"
                // autoComplete="description"
                value={carData.description}
                onChange={handleChange}
                id="outlined-multiline-static"
                label="Description"
                // required
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="outlined"
                style={{ width: "100%" }}
                // error={carData.error.description && carData.error.description ? true : false}
                // helperText={carData.error.description && carData.error.description}
              />
            </Grid>
       
            <Grid item xs={12} >
              <input type="file" name="projectFile" style={{marginTop:"20px"}}
              onChange={handleFileChange}
              />
            </Grid>

            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Service
          </Button>
          <Grid container justify="flex-end">
            {/* <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );

  function handleFileChange(e){
    const newData = { ...carData };
    newData.projectFile=e.target.files[0];
    setCarData(newData);

  }
  function handleStartDateChange(date) {
    const newBooking = { ...carData };
    newBooking.date = date;
    // setBooking(newBooking);
    setCarData(newBooking);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let setCarData = { ...carData };
    // setCarData.email = loginUser.email;
    // setCarData.name = loginUser.displayName;
    // setCarData.event = events;

    // const newBooking = { ...carData };
    console.log(setCarData);

    if (carData.title === "") {
      carData.error.title = "Title is required";
    } else delete carData.error.title;

    if (carData.description === "") {
      carData.error.description = "description is required";
    } else delete carData.error.description;

    let errors;
    if (setCarData.error) {
      errors = Object.keys(carData.error).length > 0;
    }
    if (!errors) {
      delete setCarData.error;
      const formData = new FormData()
      formData.append('file',carData.projectFile);
      formData.append('name',carData.name.toLowerCase());
      formData.append('details',carData.description);

      try {
        let result = await fetch(
          "http://localhost:8000/api/cars",
          {
            method: "POST",
            headers:{},
            body: formData,
          }
        );

        if (result) {
          console.log("success");
          console.log(result);

          console.log(result.statusText);

          // let json = result.json();
          // console.log("json");
          // console.log(json);
          return;
        }
      } catch (error) {
        console.log("error");
        console.log(error);
      }
    }
    setCarData(setCarData);
  }
  function handleChange(e) {
    const newBooking = { ...carData };
    if (e.target.value === "") {
      newBooking.error[e.target.name] = `${e.target.name} is required`;
    } else {
      if (newBooking.error) {
        delete newBooking.error[e.target.name];
      }
    }
    newBooking[e.target.name] = e.target.value;
    // setBooking(newBooking);
    setCarData(newBooking);
  }
}
