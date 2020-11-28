import React from "react";

export const news = {
    tab: 1,
    lang: "gb",
    top_headlines: {},
    current: {},
};
export const saveNews = (value) => {
    news.tab = value.tab;
    news.lang = value.lang;
    news.top_headlines = value.top_headlines;
    news.current = value.current;
};

export const NewsContext = React.createContext({
    news,
    saveNews,
});
