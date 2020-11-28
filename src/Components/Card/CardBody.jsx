import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardBodyStyle from "../../assets/jss/material-kit-pro-react/components/cardBodyStyle.jsx";

function CardBody({ ...props }) {
    const {
        classes,
        className,
        children,
        background,
        plain,
        formHorizontal,
        pricing,
        signup,
        color,
        ...rest
    } = props;
    const cardBodyClasses = classNames({
        [classes.cardBody]: true,
        [classes.cardBodyBackground]: background,
        [classes.cardBodyPlain]: plain,
        [classes.cardBodyFormHorizontal]: formHorizontal,
        [classes.cardPricing]: pricing,
        [classes.cardSignup]: signup,
        [classes.cardBodyColor]: color,
        [className]: className !== undefined,
    });
    return (
        <div className={cardBodyClasses} {...rest}>
            {children}
        </div>
    );
}

export default withStyles(cardBodyStyle)(CardBody);
