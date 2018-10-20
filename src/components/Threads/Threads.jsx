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

import ClipLoader from 'react-spinners/ClipLoader';

class Threads extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            threads: [],
        };
        props.threads.then(threads => this.setState({ loading: false, threads: threads }));
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }

    render(){
        if(this.state.loading){
            return (<ClipLoader
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
              />);
        }

        const { classes, color } = this.props;
        return (
            <List className={classes.list}>
            {this.state.threads.map((prop, key) => {
                const whiteFontClasses = classNames({
                    [" " + classes.whiteFont]: this.activeRoute(prop.id)
                });
                const listItemClasses = classNames({
                    [" " + classes[color]]: this.activeRoute(prop.id)
                  });
                return (
                    <NavLink
                        to={"/dashboard/topic/" + prop.id}
                        className={classes.item}
                        activeClassName="active"
                        key={key}
                    >
                        <ListItem button className={classes.itemLink + listItemClasses}>
                            <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                                <Explore />
                            </ListItemIcon>
                            <ListItemText
                                primary={prop.name}
                                className={classes.itemText + whiteFontClasses}
                                disableTypography={true}
                            />
                        </ListItem>
                    </NavLink>
                );
            })}
        </List>
    );
        }
};

Threads.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Threads;