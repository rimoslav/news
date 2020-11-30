import React from "react";
import { withRouter } from "react-router-dom";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import Story from "../Components/Story.jsx";
import GridItem from "../Components/Grid/GridItem.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import carouselStyle from "../assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";
import { NewsContext } from "../context/NewsContext.jsx";

class Slider extends React.Component {
    render() {
        const settings = {
            infinite: true,
            dots: true,
            arrows: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    },
                },
            ],
        };
        const results =
            this.props.category && this.props.category.length > 0
                ? this.props.category.slice(0, 5)
                : [];
        return (
            <Carousel {...settings}>
                {results.map((headline, index) => {
                    return (
                        <GridItem xs={12} sm={12} md={12} key={index}>
                            <Story headline={headline} index={index}></Story>
                        </GridItem>
                    );
                })}
            </Carousel>
        );
    }
}
Slider.contextType = NewsContext;
export default withStyles(carouselStyle)(withRouter(Slider));
