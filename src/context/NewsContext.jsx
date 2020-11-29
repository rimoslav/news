import React from "react";

export const news = {
    tab: 1,
    lang: "gb",
    lang_enabled: false,
    top_headlines: {},
    current: {},
    category_index: null,
    category: "",
    category_expanded: null,
    business: {},
    entertainment: {},
    general: {},
    health: {},
    science: {},
    sports: {},
    technology: {},
    search_results: {},
};
export const saveNews = (value) => {
    news.tab = value.tab ? value.tab : news.tab;
    news.lang = value.lang ? value.lang : news.lang;
    news.lang_enabled =
        typeof value.lang_enabled === "boolean" ? value.lang_enabled : news.lang_enabled;
    news.top_headlines = value.top_headlines ? value.top_headlines : news.top_headlines;
    news.current = value.current ? value.current : news.current;
    news.category_index = value.category_index ? value.category_index : news.category_index;
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
    news.search_results = value.search_results ? value.search_results : news.search_results;
};

export const NewsContext = React.createContext({
    news,
    saveNews,
});
