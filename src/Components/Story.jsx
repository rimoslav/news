import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "../Components/Card/Card.jsx";
import CardHeader from "../Components/Card/CardHeader.jsx";
import CardBody from "../Components/Card/CardBody.jsx";
import CardFooter from "../Components/Card/CardFooter.jsx";
import Success from "../Components/Card/Success.jsx";
import ChevronRight from "@material-ui/icons/ChevronRight";
import newspaper from "../assets/img/newspaper.jpg";
import { NewsContext } from "../context/NewsContext.jsx";
class Story extends Component {
    goToNews = () => {
        const {
            news: { lang, top_headlines },
            saveNews,
        } = this.context;
        const { history, index, headline } = this.props;
        localStorage.setItem("current", JSON.stringify(headline));
        saveNews({ current: headline });
        const local_path = top_headlines[index].local_path;
        history.push(`/article/${lang}/${local_path}`);
    };
    render() {
        const {
            classes,
            headline: { author },
            headline: { content },
            headline: { description },
            headline: { published_at },
            headline: { source },
            headline: { title },
            headline: { url },
            headline: { urlToImage },
        } = this.props;
        return (
            <Card blog>
                <CardBody>
                    <h4 className={classes.cardTitle}>{title ? title : ""}</h4>
                    {/* <Success>
                        <span className={classes.cardCategory + " " + classes.writter}>
                            {author ? author : ""}
                        </span>
                    </Success> */}
                    <CardHeader image>
                        <img src={urlToImage ? urlToImage : newspaper} alt="..." />

                        <div
                            className={classes.coloredShadow}
                            style={{
                                backgroundImage: `url(${urlToImage ? urlToImage : newspaper})`,
                                opacity: "1",
                            }}
                        />
                    </CardHeader>
                    <p className={classes.cardDescription}>{description ? description : ""}</p>
                </CardBody>
                <CardFooter>
                    <div className={classes.author}>
                        {/* <img
                                src={marc}
                                alt="..."
                                className={`${classes.imgRaised} ${classes.avatar}`}
                            /> */}
                        <span>{source && source.name ? source.name : ""}</span>
                    </div>
                    <div
                        className={`${classes.stats} ${classes.readMore} ${classes.mlAuto}`}
                        onClick={this.goToNews}
                    >
                        More
                        <ChevronRight />
                    </div>
                </CardFooter>
            </Card>
        );
    }
}

Story.contextType = NewsContext;
export default withStyles(styles)(withRouter(Story));
