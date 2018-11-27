import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Error from "@material-ui/icons/Error";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/background1.jpg";
import { login } from "services/login";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      name: "",
      password: "",
      error: false,
      errorText: 'Oops'
    };
  }

  handleChange(name, event) {
    this.setState({
      [name]: event.target.value,
    });
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  notify(error){
    console.error(error);
    this.setState({error: true, errorText: error.error});
    setTimeout(() => {
      this.setState({error: false});
    }, 6000);
  }

  handleSubmit(event) {
    event.preventDefault();
    login(this.state.name, this.state.password)
      .then((user) => {
        localStorage.setItem('name', user.name)
        localStorage.setItem('token', user.token)
      })
      .then(() => this.props.history.push('/dashboard/new'))
      .catch(this.notify.bind(this));
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          place="tc"
          color="danger"
          icon={Error}
          message={this.state.errorText}
          open={this.state.error}
          closeNotification={() => this.setState({ error: false })}
          close
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} onSubmit={this.handleSubmit.bind(this)}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Iniciar sesión</h4>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Nombre"
                        formControlProps={{
                          fullWidth: true,
                          value: this.state.name,
                          onChange: this.handleChange.bind(this, 'name')
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          required: true
                        }}
                      />
                      <CustomInput
                        labelText="Contraseña"
                        formControlProps={{
                          fullWidth: true,
                          value: this.state.password,
                          onChange: this.handleChange.bind(this, 'password')
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          required: true
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button type="submit" simple color="primary" size="lg">
                        Entrar!
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
