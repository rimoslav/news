import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
function NotFound(props) {
    useEffect(() => {
        props.history.push("/");
    }, [props.history]);
    return <div></div>;
}

export default withRouter(NotFound);
