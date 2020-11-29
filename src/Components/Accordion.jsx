import React from "react";
import { withRouter } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Accordion, AccordionSummary, AccordionDetails, Button } from "@material-ui/core";
// @material-ui/icons
import ExpandMore from "@material-ui/icons/ExpandMore";

import accordionStyle from "../assets/jss/material-kit-pro-react/components/accordionStyle.jsx";
import { NewsContext } from "../context/NewsContext.jsx";

class AccordionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
            single: false,
            news: [false, false, false, false, false, false, false],
        };
    }

    componentWillMount() {
        // am facut array din numar ca metoda .find sa functioneze indiferent de ce se intampla.
        if (this.state.active.length === undefined) {
            this.setState({
                active: [this.state.active],
                single: true,
            });
        }
    }

    openCategory = (e, key) => {
        e.preventDefault();
        e.stopPropagation();
        const categories = [
            "business",
            "entertainment",
            "general",
            "health",
            "sports",
            "science",
            "technology",
        ];
        const { lang } = this.context.news;
        this.props.history.push(`/${lang}/category/${categories[key]}`);
        this.context.getCategory(key);
        this.context.saveNews({ category_index: key, category: categories[key] });
    };

    handleChange = (panel) => (event, expanded) => {
        let newArray;

        if (this.state.single) {
            if (this.state.active[0] === panel) {
                newArray = [];
            } else {
                newArray = [panel];
            }
            if (this.state.news[newArray[0]] === false) {
                let news = [...this.state.news];
                news[newArray[0]] = true;
                this.setState({ news });
                this.context.getCategory(newArray[0]);
            }
            this.context.saveNews({ category_expanded: newArray[0] });
        } else {
            if (this.state.active.indexOf(panel) === -1) {
                newArray = [...this.state.active, panel];
            } else {
                newArray = [...this.state.active];
                newArray.splice(this.state.active.indexOf(panel), 1);
            }
        }
        this.setState({
            active: newArray,
        });
    };
    render() {
        const { classes, collapses, activeColor } = this.props;
        return (
            <div className={classes.root}>
                {collapses.map((prop, key) => {
                    return (
                        <Accordion
                            expanded={
                                this.state.active === key || this.state.active.indexOf(key) !== -1
                            }
                            onChange={this.handleChange(key)}
                            key={key}
                            classes={{
                                root: classes.expansionPanel,
                                expanded: classes.expansionPanelExpanded,
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                classes={{
                                    root: `${classes.expansionPanelSummary} ${
                                        classes[activeColor + "ExpansionPanelSummary"]
                                    }`,
                                    expanded: `${classes.expansionPanelSummaryExpaned} ${
                                        classes[activeColor + "ExpansionPanelSummaryExpaned"]
                                    }`,
                                    content: classes.expansionPanelSummaryContent,
                                    expandIcon: classes.expansionPanelSummaryExpandIcon,
                                }}
                            >
                                <Button
                                    className={classes.expansionButton}
                                    onClick={(e) => this.openCategory(e, key)}
                                >
                                    <h4 className={classes.title}>{prop.title}</h4>
                                </Button>
                            </AccordionSummary>
                            <AccordionDetails className={classes.expansionPanelDetails}>
                                {prop.content}
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </div>
        );
    }
}

AccordionComponent.defaultProps = {
    active: -1,
    activeColor: "primary",
};

AccordionComponent.contextType = NewsContext;
export default withStyles(accordionStyle)(withRouter(AccordionComponent));
