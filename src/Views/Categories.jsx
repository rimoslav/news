import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Accordion from "../Components/Accordion.jsx";
import Slider from "../Components/Slider.jsx";
import javascriptStyles from "../assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";
import { NewsContext } from "../context/NewsContext";
class Categories extends React.Component {
    render() {
        const { classes } = this.props;
        const {
            business,
            entertainment,
            general,
            health,
            sports,
            science,
            technology,
        } = this.context.news;
        return (
            <div className={classes.container}>
                <div className={classes.title}>
                    <h2>Categories</h2>
                </div>
                <Accordion
                    activeColor="rose"
                    collapses={[
                        {
                            title: "Business",
                            content: <Slider category={business} />,
                        },
                        {
                            title: "Entertainment",
                            content: <Slider category={entertainment} />,
                        },
                        {
                            title: "General",
                            content: <Slider category={general} />,
                        },
                        {
                            title: "Health",
                            content: <Slider category={health} />,
                        },
                        {
                            title: "Sports",
                            content: <Slider category={sports} />,
                        },
                        {
                            title: "Science",
                            content: <Slider category={science} />,
                        },
                        {
                            title: "Technology",
                            content: <Slider category={technology} />,
                        },
                    ]}
                />
            </div>
        );
    }
}
Categories.contextType = NewsContext;
export default withStyles(javascriptStyles)(Categories);
