import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
    grid: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "auto",
    },
};

function GridContainer({ ...props }) {
    const { classes, children, className, ...rest } = props;
    return (
        <Grid container {...rest} className={classes.grid + " " + className}>
            {children}
        </Grid>
    );
}

export default withStyles(style)(GridContainer);
