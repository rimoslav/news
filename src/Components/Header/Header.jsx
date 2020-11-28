import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
// core components
import headerStyle from "../../assets/jss/material-kit-pro-react/components/headerStyle.jsx";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
        };
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.headerColorChange = this.headerColorChange.bind(this);
    }
    handleDrawerToggle() {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    }
    componentDidMount() {
        if (this.props.changeColorOnScroll) {
            window.addEventListener("scroll", this.headerColorChange);
        }
    }
    headerColorChange() {
        const { classes, color, changeColorOnScroll } = this.props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[changeColorOnScroll.color]);
        }
    }
    componentWillUnmount() {
        if (this.props.changeColorOnScroll) {
            window.removeEventListener("scroll", this.headerColorChange);
        }
    }
    render() {
        const { classes, color, links, brand, fixed, absolute } = this.props;
        const appBarClasses = classNames({
            [classes.appBar]: true,
            [classes[color]]: color,
            [classes.absolute]: absolute,
            [classes.fixed]: fixed,
        });
        return (
            <AppBar className={appBarClasses}>
                <Toolbar className={classes.container}>
                    <Button className={classes.title}>
                        <Link to="/">{brand}</Link>
                    </Button>
                    <Hidden smDown implementation="css" className={classes.hidden}>
                        <div className={classes.collapse}>{links}</div>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={"right"}
                        open={this.state.mobileOpen}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        onClose={this.handleDrawerToggle}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.closeButtonDrawer}
                        >
                            <Close />
                        </IconButton>
                        <div className={classes.appResponsive}>{links}</div>
                    </Drawer>
                </Hidden>
            </AppBar>
        );
    }
}

export default withStyles(headerStyle)(Header);
