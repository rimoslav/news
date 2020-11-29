import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Parallax from "../Components/Parallax.jsx";
import GridContainer from "../Components/Grid/GridContainer.jsx";
import GridItem from "../Components/Grid/GridItem.jsx";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import articleStyle from "../assets/jss/material-kit-pro-react/views/articleStyle.jsx";
import newspaper from "../assets/img/newspaper.jpg";
import { NewsContext } from "../context/NewsContext.jsx";
class Article extends React.Component {
    state = {
        current: {},
    };
    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        const current = localStorage.getItem("current");
        if (current && current.length > 0) {
            this.setState({ current: JSON.parse(current) });
        } else if (this.context.news.current && this.context.news.current.length > 0) {
            this.setState({ current: this.context.news.current });
        }
    }
    backToList = () => {
        window.history.back();
        this.context.saveNews({ lang_enabled: true });
    };
    render() {
        const { classes } = this.props;
        const { current } = this.state;
        return (
            <div>
                <div className={classes.container + " " + classes.grayFullScreen}>
                    <GridContainer justify="center">
                        <GridItem
                            md={8}
                            className={classes.textCenter + " " + classes.reducedWidth}
                        >
                            <p className={classes.title}>{current.title ? current.title : ""}</p>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
                <Parallax
                    image={current.urlToImage ? current.urlToImage : newspaper}
                    filter="dark"
                ></Parallax>
                <div className={classes.main}>
                    <div className={classes.container}>
                        <div className={classes.section}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={8} md={8}>
                                    <p className={classes.textContent}>
                                        {current.content
                                            ? current.content
                                            : current.description
                                            ? current.description
                                            : ""}
                                    </p>
                                    <p className={classes.backToList} onClick={this.backToList}>
                                        <KeyboardArrowLeft />
                                        Back to list
                                    </p>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Article.contextType = NewsContext;
export default withStyles(articleStyle)(Article);
