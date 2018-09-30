import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Explore from "@material-ui/icons/Explore";
// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const Threads = ({ ...props }) => {
    function activeRoute(routeName) {
        return props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }
    const { classes, color, threads } = props;

    if (!threads) return null;
    return (
        <List className={classes.list}>
            {threads.map((prop, key) => {
                const whiteFontClasses = classNames({
                    [" " + classes.whiteFont]: activeRoute(prop.term)
                });
                const listItemClasses = classNames({
                    [" " + classes[color]]: activeRoute(prop.term)
                  });
                return (
                    <NavLink
                        to={"/dashboard/" + prop.term}
                        className={classes.item}
                        activeClassName="active"
                        key={key}
                    >
                        <ListItem button className={classes.itemLink + listItemClasses}>
                            <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                                <Explore />
                            </ListItemIcon>
                            <ListItemText
                                primary={prop.term}
                                className={classes.itemText + whiteFontClasses}
                                disableTypography={true}
                            />
                        </ListItem>
                    </NavLink>
                );
            })}
        </List>
    );
};

Threads.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Threads;