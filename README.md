# NEWS API React app

#### Download the code and run `npm i` in terminal from the root folder.

#### Make `.env` file in root folder and add key-value pair like this `REACT_APP_NEWS_API_KEY={{PUT_YOUR_API_KEY_HERE}}`.

#### After you complete first two steps run `npm run dev` to start the app in your browser.
___

This app uses React's Context API as state management system.
This app also uses localStorage for temporary data storage.
Material UI is used for styling.
Views are stored in `./Views` directory while smaller components are stored in `./Components`. Context API setup is stored in `./context` directory.
___

#### How it works

**Home page** represents latest news from all sources. You can select between Great Britain or United States as a country source.
You can view any article by clicking on `Card`'s `More >` link. On those routes, you can not select between countries.
**Category page** displays 7 different categories, each showing top 5 stories.
You can expand the `Accordion` and preview top 5 results on each category, click `More >` link to view full story, or you can click on categories name to preview top 20 results on more readable layout. **Search page** allows you to search the news by any term, with switching between states is not allowed by News API. From results list, you can preview any article same as above.
