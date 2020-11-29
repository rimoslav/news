import React, { Component } from "react";
import News from "./News";
import SearchInput from "../Components/SearchInput";
import { NewsContext } from "../context/NewsContext";
import componentsStyle from "../assets/jss/material-kit-pro-react/views/componentsStyle.jsx";
import { withStyles } from "@material-ui/core";
class Search extends Component {
    state = {
        searchTerm: "",
    };

    setSearchTerm = (e) => {
        e.preventDefault();
        this.setState({
            searchTerm: e.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        const { searchTerm } = this.state;
        return (
            <div className={classes.wrapper}>
                <SearchInput searchTerm={searchTerm} setSearchTerm={this.setSearchTerm} />
                <News isSearch={true} />
            </div>
        );
    }
}

Search.contextType = NewsContext;
export default withStyles(componentsStyle)(Search);
