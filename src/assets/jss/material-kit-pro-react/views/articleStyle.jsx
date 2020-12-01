import {
    container,
    title,
    main,
    whiteColor,
    mainRaised,
    blackColor,
    hexToRgb,
} from "../../material-kit-pro-react.jsx";

const articleStyle = {
    container: {
        ...container,
        zIndex: "2",
    },
    grayFullScreen: {
        backgroundColor: "#554",
        width: "100vw",
        maxWidth: "unset",
        height: 130,
    },
    boxShadow: {
        boxShadow:
            "0 10px 30px -12px rgba(" +
            hexToRgb(blackColor) +
            ", 0.42), 0 4px 25px 0px rgba(" +
            hexToRgb(blackColor) +
            ", 0.12), 0 8px 10px -5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.2)",
    },
    textCenter: {
        textAlign: "center",
    },
    backToList: {
        display: "flex",
        cursor: "pointer",
        fontSize: 16,
    },
    reducedHeight: {
        height: 140,
        marginBottom: -2,
    },
    title: {
        ...title,
        color: whiteColor,
        fontSize: "20px",
        fontFamily: "Helvetica",
        marginTop: 47,
        marginBottom: 11,
        marginLeft: "5%",
        marginRight: "5%",
    },
    textContent: {
        fontSize: 15,
        fontFamily: "Helvetica",
        marginTop: 30,
        marginBottom: 50,
    },
    main: {
        ...main,
        ...mainRaised,
        paddingBottom: 30,
    },
};

export default articleStyle;
