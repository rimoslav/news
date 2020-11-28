import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardFooterStyle from "../../assets/jss/material-kit-pro-react/components/cardFooterStyle.jsx";

function CardFooter({ ...props }) {
    const { classes, className, children, plain, profile, pricing, testimonial, ...rest } = props;
    const cardFooterClasses = classNames({
        [classes.cardFooter]: true,
        [classes.cardFooterPlain]: plain,
        [classes.cardFooterProfile]: profile || testimonial,
        [classes.cardFooterPricing]: pricing,
        [classes.cardFooterTestimonial]: testimonial,
        [className]: className !== undefined,
    });
    return (
        <div className={cardFooterClasses} {...rest}>
            {children}
        </div>
    );
}

export default withStyles(cardFooterStyle)(CardFooter);
