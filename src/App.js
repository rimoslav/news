import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NewsContext, news } from "./context/NewsContext";
import Article from "./Views/Article";
import Categories from "./Views/Categories";
import Search from "./Views/Search";
import Navbar from "./Components/Navbar";
import TopNews from "./Views/TopNews";
import { createBrowserHistory } from "history";
import "./css/style.css";

export const history = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.saveNews = (value) => {
            this.setState((state) => {
                const user = state.user;
                news.tab = value.tab;
                news.lang = value.lang;
                return {
                    user,
                };
            });
        };

        this.state = {
            news,
            saveNews: this.saveNews,
        };
    }

    render() {
        return (
            <div className="appWrapper">
                <Router history={history}>
                    <NewsContext.Provider value={this.state}>
                        <Route path="/" component={Navbar} />{" "}
                        <Switch>
                            <Route exact path="/" component={TopNews} />{" "}
                            <Route
                                exact
                                component={Article}
                                path="/search/:address/:startDate/:endDate?"
                            />
                        </Switch>{" "}
                    </NewsContext.Provider>{" "}
                </Router>{" "}
            </div>
        );
    }
}

export default App;
