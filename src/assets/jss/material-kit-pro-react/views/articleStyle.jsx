import { container, title, main, whiteColor, mainRaised } from "../../material-kit-pro-react.jsx";

const articleStyle = {
    container: {
        ...container,
        zIndex: "2",
    },
    grayFullScreen: {
        backgroundColor: "#777",
        width: "100vw",
        maxWidth: "unset",
    },
    cardTitle: {
        marginBottom: 0,
    },
    textCenter: {
        textAlign: "center",
    },
    backToList: {
        display: "flex",
        cursor: "pointer",
        fontSize: 16,
    },
    reducedWidth: {
        maxWidth: "calc(100vw - 60px)",
    },
    title: {
        ...title,
        color: whiteColor,
        fontSize: "20px",
        fontFamily: "Helvetica",
    },
    textContent: {
        fontSize: 15,
        fontFamily: "Helvetica",
        marginTop: 30,
        marginBottom: 50,
    },
    subtitle: {
        color: whiteColor,
    },
    main: {
        ...main,
        ...mainRaised,
    },
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block",
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto",
    },
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0",
    },
    left: {
        float: "left!important",
        display: "block",
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right",
    },
    icon: {
        width: "18px",
        height: "18px",
        top: "3px",
        position: "relative",
    },
};

export default articleStyle;
