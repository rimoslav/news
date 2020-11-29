import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "../Components/Card/Card.jsx";
import CardHeader from "../Components/Card/CardHeader.jsx";
import CardBody from "../Components/Card/CardBody.jsx";
import CardFooter from "../Components/Card/CardFooter.jsx";
import ChevronRight from "@material-ui/icons/ChevronRight";
import newspaper from "../assets/img/newspaper.jpg";
import { NewsContext } from "../context/NewsContext.jsx";
class Story extends Component {
    goToNews = () => {
        const {
            news: { lang, top_headlines, search_results },
            saveNews,
        } = this.context;
        const { history, index, headline } = this.props;
        const categories = [
            "business",
            "entertainment",
            "general",
            "health",
            "sports",
            "science",
            "technology",
        ];
        const {
            news,
            news: { category_expanded },
        } = this.context;
        localStorage.setItem("current", JSON.stringify(headline));
        saveNews({ current: headline });
        const local_path =
            top_headlines && top_headlines.length
                ? top_headlines[index].local_path
                : search_results && search_results.length
                ? search_results[index].local_path
                : news[categories[category_expanded]] && news[categories[category_expanded]][index]
                ? news[categories[category_expanded]][index].local_path
                : "news";
        history.push(`/article/${lang}/${local_path}`);
        saveNews({ lang_enabled: false });
    };
    render() {
        const {
            classes,
            headline: { author, description, title, urlToImage },
        } = this.props;
        return (
            <Card blog>
                <CardBody>
                    <h4 className={classes.cardTitle}>{title ? title : ""}</h4>
                    <CardHeader image>
                        <img
                            src={urlToImage ? urlToImage : newspaper}
                            alt={author ? author : "Image"}
                        />

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
