import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import cardHeaderStyle from "../../assets/jss/material-kit-pro-react/components/cardHeaderStyle.jsx";

function CardHeader({ ...props }) {
    const {
        classes,
        className,
        children,
        color,
        plain,
        image,
        contact,
        signup,
        noShadow,
        ...rest
    } = props;
    const cardHeaderClasses = classNames({
        [classes.cardHeader]: true,
        [classes[color + "CardHeader"]]: color,
        [classes.cardHeaderPlain]: plain,
        [classes.cardHeaderImage]: image,
        [classes.cardHeaderContact]: contact,
        [classes.cardHeaderSignup]: signup,
        [classes.noShadow]: noShadow,
        [className]: className !== undefined,
    });
    return (
        <div className={cardHeaderClasses} {...rest}>
            {children}
        </div>
    );
}

export default withStyles(cardHeaderStyle)(CardHeader);
