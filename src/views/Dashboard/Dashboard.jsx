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

import moment from "moment";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import { getDateData,getData, getMapData } from "models/dataFilters";

class Dashboard extends React.Component {
  state = {
    filter: {
      country: "all"
      , day: "all"
      , genre: "all"
    }
  }

  render() {
    const { topic, data, classes } = this.props;
    const startDate = moment(topic.start);

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Tweets procesados</p>
                <h3 className={classes.cardTitle}>
                  3 billones
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  420 por minuto
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Tweets descartados</p>
                <h3 className={classes.cardTitle}>6.642</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  0.3% del total
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <DateRange />
                </CardIcon>
                <p className={classes.cardCategory}>Empezado el</p>
                <h3 className={classes.cardTitle}>{startDate.format("MM/DD")}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  {startDate.fromNow()}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="transparent">
                <DateChart data={getDateData(data, this.state.filter)} />
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
                <MapChart data={getMapData(data, this.state.filter)} />
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
                <CakeChart data={getData(data, this.state.filter)} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Overall</h4>
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
