import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NewsContext, news } from "./context/NewsContext";
import Article from "./Views/Article";
import Categories from "./Views/Categories";
import Search from "./Views/Search";
import Navbar from "./Components/Navbar";
import News from "./Views/News";
import NotFound from "./Views/NotFound";
import { createBrowserHistory } from "history";
import "./assets/scss/material-kit-pro-react.scss";
export const history = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.saveNews = (value) => {
            this.setState((state) => {
                const user = state.user;
                news.tab = value.tab ? value.tab : news.tab;
                news.lang = value.lang ? value.lang : news.lang;
                news.lang_enabled =
                    typeof value.lang_enabled === "boolean"
                        ? value.lang_enabled
                        : news.lang_enabled;
                news.top_headlines = value.top_headlines ? value.top_headlines : news.top_headlines;
                news.current = value.current ? value.current : news.current;
                news.category_index = value.category_index
                    ? value.category_index
                    : news.category_index;
                news.category = value.category ? value.category : news.category;
                news.category_expanded = value.category_expanded
                    ? value.category_expanded
                    : news.category_expanded;
                news.business = value.business ? value.business : news.business;
                news.entertainment = value.entertainment ? value.entertainment : news.entertainment;
                news.general = value.general ? value.general : news.general;
                news.health = value.health ? value.health : news.health;
                news.science = value.science ? value.science : news.science;
                news.sports = value.sports ? value.sports : news.sports;
                news.technology = value.technology ? value.technology : news.technology;
                news.search_results = value.search_results
                    ? value.search_results
                    : news.search_results;
                return {
                    user,
                };
            });
        };

        this.state = {
            news,
            saveNews: this.saveNews,
            getTopNews: this.getTopNews,
            getCategory: this.getCategory,
            searchForTerm: this.searchForTerm,
            history,
        };
    }

    getTopNews = () => {
        let lang = localStorage.getItem("language");
        if (!lang || lang.length === 0) {
            lang = this.state.news.lang;
        }
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=${lang}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
            )
            .then((res) => {
                const articles = res.data.articles;
                articles.forEach((elem) => {
                    elem.local_path = elem.url.replaceAll("/", "");
                });
                this.saveNews({ top_headlines: articles });
            });
    };

    getCategory = (num) => {
        let lang = localStorage.getItem("language");
        if (!lang || lang.length === 0) {
            lang = this.state.news.lang;
        }
        const categories = [
            "business",
            "entertainment",
            "general",
            "health",
            "sports",
            "science",
            "technology",
        ];
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=${lang}&category=${categories[num]}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
            )
            .then((res) => {
                const articles = res.data.articles;
                articles.forEach((elem) => {
                    elem.local_path = elem.url.replaceAll("/", "");
                });
                switch (num) {
                    case 0:
                        this.saveNews({ business: articles });
                        break;
                    case 1:
                        this.saveNews({ entertainment: articles });
                        break;
                    case 2:
                        this.saveNews({ general: articles });
                        break;
                    case 3:
                        this.saveNews({ health: articles });
                        break;
                    case 4:
                        this.saveNews({ sports: articles });
                        break;
                    case 5:
                        this.saveNews({ science: articles });
                        break;
                    default:
                        this.saveNews({ technology: articles });
                        break;
                }
            });
    };

    searchForTerm = (term) => {
        axios
            .get(
                `https://newsapi.org/v2/everything?q=${term}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
            )
            .then((res) => {
                const articles = res.data.articles;
                articles.forEach((elem) => {
                    elem.local_path = elem.url.replaceAll("/", "");
                });
                this.saveNews({ search_results: articles });
            });
    };

    render() {
        return (
            <div className="appWrapper">
                <Router history={history}>
                    <NewsContext.Provider value={this.state}>
                        <Route path="/" component={Navbar} />{" "}
                        <Switch>
                            <Route exact path="/" component={News} isSearch={false} />{" "}
                            <Route exact path="/categories" component={Categories} />{" "}
                            <Route exact path="/:lang/category/:category" component={News} />{" "}
                            <Route exact path="/search" component={Search} />{" "}
                            <Route exact component={Article} path="/article/:lang/:path" />
                            <Route exact component={NotFound} />
                        </Switch>{" "}
                    </NewsContext.Provider>{" "}
                </Router>{" "}
            </div>
        );
    }
}

export default App;
