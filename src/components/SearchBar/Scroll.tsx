import React from "react";

function Scroll(props: any) {
    return <div style={{ overflowY: "scroll", height: "70vh" }}>{props.children}</div>;
}

export default Scroll;
