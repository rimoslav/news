import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Story from "../Components/Story";
// @material-ui/core components
import GridContainer from "../Components/Grid/GridContainer.jsx";
import GridItem from "../Components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "../assets/jss/material-kit-pro-react/views/componentsStyle.jsx";
import { NewsContext } from "../context/NewsContext";
class News extends Component {
    state = {
        isCategory: false,
    };
    componentDidMount = () => {
        const { getTopNews, getCategory, saveNews } = this.context;
        if (this.props.location.pathname === "/") {
            getTopNews();
        } else if (this.props.location.pathname.indexOf("/category/") > -1) {
            const { category } = this.props.match.params;
            const categories = [
                "business",
                "entertainment",
                "general",
                "health",
                "sports",
                "science",
                "technology",
            ];
            if (category && category.length) {
                getCategory(categories.indexOf(category));
                saveNews({
                    category: category,
                    category_index: categories.indexOf(category),
                });
            }
            this.setState({ isCategory: true });
        }
    };

    componentDidUpdate = (prevProps) => {
        const { getCategory, getTopNews, saveNews } = this.context;
        if (prevProps.location.pathname !== this.props.location.pathname) {
            if (this.props.location.pathname === "/") {
                getTopNews();
                saveNews({
                    category: "",
                    category_index: null,
                });
                this.setState({ isCategory: false });
            }
        } else if (prevProps.match.params.lang !== this.props.match.params.lang) {
            const { category } = this.props.match.params;
            const categories = [
                "business",
                "entertainment",
                "general",
                "health",
                "sports",
                "science",
                "technology",
            ];
            if (category && category.length) {
                getCategory(categories.indexOf(category));
                saveNews({
                    category: category,
                    category_index: categories.indexOf(category),
                });
            }
        }
    };

    componentWillUnmount = () => {
        this.context.saveNews({ category_index: null, category: "" });
    };

    render() {
        const { classes, isSearch } = this.props;
        const { isCategory } = this.state;
        let {
            news,
            news: { lang, top_headlines, search_results, category },
        } = this.context;
        let results;
        if (isSearch) {
            results = search_results;
        } else if (isCategory) {
            results = news[category];
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
                                    Top {isCategory ? category : ""} news from{" "}
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

News.contextType = NewsContext;
export default withStyles(componentsStyle)(withRouter(News));
