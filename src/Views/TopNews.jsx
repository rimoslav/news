import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Story from "../Components/Story";
// @material-ui/core components
import GridContainer from "../Components/Grid/GridContainer.jsx";
import GridItem from "../Components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "../assets/jss/material-kit-pro-react/views/componentsStyle.jsx";
import { NewsContext } from "../context/NewsContext";
class TopNews extends Component {
    componentDidMount = () => {
        this.context.getTopNews();
    };

    render() {
        const { classes, isSearch } = this.props;
        let {
            news: { lang },
            news: { top_headlines },
            news: { search_results },
        } = this.context;
        let results;
        if (isSearch) {
            results = search_results;
        } else {
            results = top_headlines;
        }
        return (
            <div className="cd-section" id="cards">
                <div className={classes.sectionGray}>
                    <div className={classes.container}>
                        {!isSearch && (
                            <div className={classes.title}>
                                <h2>
                                    Top news from{" "}
                                    {lang === "gb" ? "Great Britain" : "United States"}:
                                </h2>
                            </div>
                        )}
                        <GridContainer>
                            {results &&
                                results.length > 0 &&
                                results.map((headline, index) => {
                                    return (
                                        <GridItem key={index} xs={12} sm={6} md={6} lg={4}>
                                            <Story headline={headline} index={index}></Story>
                                        </GridItem>
                                    );
                                })}
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

TopNews.contextType = NewsContext;
export default withStyles(componentsStyle)(withRouter(TopNews));
