import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import MapChart from "components/Charts/MapChart";
import CakeChart from "components/Charts/CakeChart";
import DateChart from "components/Charts/DateChart";
import SourceChart from "components/Charts/SourceChart";

import moment from "moment";
import "moment/locale/es";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    filter: {
      country: "all"
      , day: "all"
      , genre: "all"
    }
  }

  render() {
    const { result, classes } = this.props;
    const { generalResults, evolutionResults, topic, sourceResults, locationResults } = result;
    const total = (generalResults.positive + generalResults.negative + generalResults.neutral) || 0;
    const deadline = moment(topic.deadline, "DD-MM-yyyy");

    return (
      <div>
        <h1 className={classes.capitalize}>{topic.name}</h1>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Tweets procesados</p>
                <h3 className={classes.cardTitle}>
                  {total}
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  {Math.floor(generalResults.neutral / total * 100) }% neutrales
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>record_voice_over</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Idioma</p>
                <h3 className={classes.cardTitle}>{topic.language === 'es' ? 'Español' : 'Ingles'}</h3>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <DateRange />
                </CardIcon>
                <p className={classes.cardCategory}>Termina</p>
                <h3 className={classes.cardTitle}>{deadline.format("MM/DD")}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  {deadline.fromNow()}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="transparent">
                <DateChart data={evolutionResults} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Tweets por día</h4>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="transparent">
                <MapChart data={locationResults} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Distribución geografica</h4>
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Warning />
                  Las úbicaciones no son precisas
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="transparent">
                <CakeChart data={generalResults} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Overall</h4>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>


        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Fuente de Tweets</h4>
                <p className={classes.cardCategoryWhite}>
                  Solo mostramos el top 3
                </p>
              </CardHeader>
              <CardBody>
                <SourceChart data={sourceResults} />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
