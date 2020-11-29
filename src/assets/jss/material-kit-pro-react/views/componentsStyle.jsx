import { container, title, grayColor } from "../../material-kit-pro-react.jsx";

const componentsStyle = {
    wrapper: {
        maxWidth: "calc(100vw - 30px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "30px 15px",
    },
    container: {
        ...container,
        zIndex: "2",
        position: "relative",
    },
    title: {
        ...title,
        color: grayColor[1] + "  !important",
    },
    sectionGray: {
        background: grayColor[14],
    },
};

export default componentsStyle;
