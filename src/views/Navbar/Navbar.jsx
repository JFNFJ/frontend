import React from "react";

import { Link } from "react-router-dom";

import logo from "assets/img/logo.png"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "components/Navbar/Navbar.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

function Navbar(props) {
    const { classes, routes } = props;
    return (
        <Header
            brand="Social Cat"
            absolute
            color="transparent"
            routes={routes}
            leftLinks={
                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <Link to="/">
                            <img src={logo} alt="logo" className={classes.img} />
                        </Link>
                    </ListItem>
                </List>
            }
            rightLinks={
                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <Button
                            component={Link}
                            to="/login"
                            className={classes.registerNavLink}
                            color="primary"
                            round
                        >
                            Log in
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button
                            component={Link}
                            to="/signup"
                            className={classes.registerNavLink}
                            color="rose"
                            round
                        >
                            Sign up
                        </Button>
                    </ListItem>
                </List>
            }
        />
    );
}

Navbar.propTypes = {
};

export default withStyles(navbarsStyle)(Navbar);