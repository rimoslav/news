import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardStyle from "../../assets/jss/material-kit-pro-react/components/cardStyle.jsx";

function Card({ ...props }) {
    const {
        classes,
        className,
        children,
        plain,
        profile,
        blog,
        raised,
        background,
        pricing,
        color,
        product,
        testimonial,
        ...rest
    } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile || testimonial,
        [classes.cardBlog]: blog,
        [classes.cardRaised]: raised,
        [classes.cardBackground]: background,
        [classes.cardPricingColor]:
            (pricing && color !== undefined) || (pricing && background !== undefined),
        [classes[color]]: color,
        [classes.cardPricing]: pricing,
        [classes.cardProduct]: product,
        [className]: className !== undefined,
    });
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    );
}

export default withStyles(cardStyle)(Card);
