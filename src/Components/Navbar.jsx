import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "./Header/Header.jsx";
import Button from "./Button.jsx";

import navbarsStyle from "../assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx";
import { NewsContext } from "../context/NewsContext.jsx";
class Navbar extends React.Component {
    componentDidMount = () => {
        const { saveNews } = this.context;
        const lang = localStorage.getItem("language");
        let tab = localStorage.getItem("tab");
        if (this.props.location.pathname === "/") {
            tab = 1;
        } else if (this.props.location.pathname === "/categories") {
            tab = 2;
        } else if (this.props.location.pathname === "/search") {
            tab = 3;
        }
        saveNews({ lang, tab: parseInt(tab) });
    };

    saveTab = (num) => {
        const { saveNews } = this.context;
        localStorage.setItem("tab", num);
        saveNews({ tab: num });
        if (num === 1) {
            this.props.history.push("/");
        } else if (num === 2) {
            this.props.history.push("/categories");
        } else {
            this.props.history.push("/search");
        }
    };
    saveLang = (str) => {
        const {
            saveNews,
            getTopNews,
            getCategory,
            news: { tab, category_index },
        } = this.context;
        localStorage.setItem("language", str);
        saveNews({ lang: str });
        if (tab === 1 && this.props.location.pathname === "/") {
            getTopNews();
        } else if (this.props.location.pathname.indexOf("/category/") > -1) {
            const path =
                str === "us"
                    ? this.props.location.pathname.replace("/gb/", "/us/")
                    : this.props.location.pathname.replace("/us/", "/gb/");
            this.props.history.push(path);
            getCategory(category_index);
        }
    };
    render() {
        const { classes } = this.props;
        const {
            news: { tab, lang },
        } = this.context;
        return (
            <div id="navigation">
                <div id="navbar" className={classes.navbar}>
                    <Header
                        color="dark"
                        links={
                            <div className={classes.collapse}>
                                <List className={classes.list + " " + classes.mrAuto}>
                                    <ListItem className={classes.listItem}>
                                        <Button
                                            href="#pablo"
                                            className={
                                                tab === 1
                                                    ? classes.navLink + " " + classes.navLinkActive
                                                    : classes.navLink
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.saveTab(1);
                                            }}
                                            color="transparent"
                                        >
                                            Top News
                                        </Button>
                                    </ListItem>
                                    <ListItem className={classes.listItem}>
                                        <Button
                                            href="#pablo"
                                            className={
                                                tab === 2
                                                    ? classes.navLink + " " + classes.navLinkActive
                                                    : classes.navLink
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.saveTab(2);
                                            }}
                                            color="transparent"
                                        >
                                            Categories
                                        </Button>
                                    </ListItem>
                                    <ListItem className={classes.listItem}>
                                        <Button
                                            href="#pablo"
                                            className={
                                                tab === 3
                                                    ? classes.navLink + " " + classes.navLinkActive
                                                    : classes.navLink
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.saveTab(3);
                                            }}
                                            color="transparent"
                                        >
                                            Search
                                        </Button>
                                    </ListItem>
                                </List>
                                <div className={classes.mlAuto}>
                                    <List className={classes.list + " " + classes.mrAuto}>
                                        <ListItem className={classes.listItem}>
                                            <Button
                                                href="#pablo"
                                                className={
                                                    lang === "gb"
                                                        ? classes.navLink +
                                                          " " +
                                                          classes.navLinkActive
                                                        : classes.navLink
                                                }
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    this.saveLang("gb");
                                                }}
                                                color="transparent"
                                            >
                                                {/* <img
                                                    src={uk2}
                                                    className={classes.flag}
                                                    alt="UK Flag"
                                                /> */}
                                                GB
                                            </Button>
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <Button
                                                href="#pablo"
                                                className={
                                                    lang === "us"
                                                        ? classes.navLink +
                                                          " " +
                                                          classes.navLinkActive
                                                        : classes.navLink
                                                }
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    this.saveLang("us");
                                                }}
                                                color="transparent"
                                            >
                                                {/* <img
                                                    src={usa2}
                                                    className={classes.flag}
                                                    alt="USA Flag"
                                                /> */}
                                                US
                                            </Button>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        );
    }
}

Navbar.contextType = NewsContext;
export default withStyles(navbarsStyle)(Navbar);
