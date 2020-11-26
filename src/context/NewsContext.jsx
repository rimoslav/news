import React from "react";

export const news = {
    tab: 1,
    lang: "GB"
};
export const saveNews = value => {
	news.tab = value.tab;
	news.lang = value.lang;
};

export const NewsContext = React.createContext({
	news,
	saveNews
});