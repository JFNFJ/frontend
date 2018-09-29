import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import { getTrendingTopics } from "services/topics";


import trending from "assets/img/trending.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class New extends React.Component {
  state = {
    topic: ''
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTopic(this.state.topic);
  }

  render() {
    const { classes } = this.props;
    const self = this;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>¿Qué querrías buscar?</h4>
                <p className={classes.cardCategoryWhite}>Escribe un termino para empezar a buscar</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Termino"
                      id="term"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: self.state.topic,
                        onChange: e => {
                          self.setState({ topic: e.target.value })
                        }
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Fecha de inicio"
                      id="startDate"
                      inputProps={{
                        type: "date",
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Fecha de Fin"
                      id="endDate"
                      inputProps={{
                        type: "date",
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button type="submit" color="primary">Empezar a hilar</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={trending} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>Trending Threads</h6>
                <List className={classes.list}>
                  {getTrendingTopics().map((term, key) => {
                    return (
                      <ListItem className={classes.inlineBlock} key={key}>
                        <Link to={"/dashboard/" + term} className={classes.block}># {term}</Link>
                      </ListItem>
                    );
                  })}
                </List>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </form>
    );
  }
}
export default withStyles(styles)(New);
