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
    main: {
        ...main,
        ...mainRaised,
    },
};

export default articleStyle;
