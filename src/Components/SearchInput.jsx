import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import SearchIcon from "@material-ui/icons/Search";
// core components
import CustomInput from "./CustomInput.jsx";
import Button from "./Button.jsx";
import navbarsStyle from "../assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx";
import { NewsContext } from "../context/NewsContext";

class SearchInput extends Component {
    render() {
        const { classes, searchTerm, setSearchTerm, ...rest } = this.props;
        return (
            <div>
                <CustomInput
                    success
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                    formControlProps={{
                        className: classes.formControl,
                    }}
                    inputProps={{
                        placeholder: "Search",
                        inputProps: {
                            "aria-label": "Search",
                            className: classes.searchInput,
                            value: searchTerm,
                            onChange: setSearchTerm,
                        },
                    }}
                />
                <Button
                    color="success"
                    justIcon
                    round
                    onClick={() => this.context.searchForTerm(searchTerm)}
                >
                    <SearchIcon className={classes.searchIcon} />
                </Button>
            </div>
        );
    }
}

SearchInput.contextType = NewsContext;
export default withStyles(navbarsStyle)(SearchInput);
