import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components

import cardAvatarStyle from "./assets/jss/material-kit-pro-react/components/cardAvatarStyle.jsx";

function CardAvatar({ ...props }) {
    const {
        classes,
        children,
        className,
        plain,
        profile,
        testimonial,
        testimonialFooter,
        ...rest
    } = props;
    const cardAvatarClasses = classNames({
        [classes.cardAvatar]: true,
        [classes.cardAvatarProfile]: profile,
        [classes.cardAvatarPlain]: plain,
        [classes.cardAvatarTestimonial]: testimonial,
        [classes.cardAvatarTestimonialFooter]: testimonialFooter,
        [className]: className !== undefined,
    });
    return (
        <div className={cardAvatarClasses} {...rest}>
            {children}
        </div>
    );
}

export default withStyles(cardAvatarStyle)(CardAvatar);
