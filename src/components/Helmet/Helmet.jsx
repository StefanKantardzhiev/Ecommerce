import React from "react";

const Helmet = (props) => {
    document.title = "PcBuildz© " + props.title
    return <div className="main">{props.children}</div>
}

export default Helmet