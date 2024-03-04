import React, { useState } from "react";
import Tree from "react-d3-tree";
import TreeNodeCard from "./TreeNodeCard";
import { useCenteredTree } from "./helper";
import { EMPLOYEE_DUMMY } from "../../utils/contants";

const containerStyles = {
    width: "100%",
    height: "100%",
};

// Here we're using `renderCustomNodeElement` render a component that uses
// both SVG and HTML tags side-by-side.
// This is made possible by `foreignObject`, which wraps the HTML tags to
// allow for them to be injected into the SVG namespace.
const renderForeignObjectNode = ({ nodeDatum, toggleNode, foreignObjectProps }: any) => (
    <g>
        {/* <circle r={5}></circle> */}
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject {...foreignObjectProps}>
            <TreeNodeCard toggleNode={toggleNode} nodeDatum={nodeDatum} />
        </foreignObject>
    </g>
);

export default function TreeViewComponent() {
    //   const [translate, containerRef] = useCenteredTree();
    const [toggle, toggleNode] = useState(false);

    const [dimensions, translate, containerRef] = useCenteredTree();
    const nodeSize = { x: "300", y: "400" };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -150, y: -200 };
    return (
        <div style={containerStyles} ref={containerRef}>
            <Tree
                data={EMPLOYEE_DUMMY}
                // translate={translate}
                nodeSize={nodeSize}
                renderCustomNodeElement={(rd3tProps) => renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })}
                orientation="vertical"
                depthFactor={500}
                initialDepth={1}
                pathFunc="step"
                separation={{ siblings: 3, nonSiblings: 3 }}
                zoomable={true}
                enableLegacyTransitions={true}
                dimensions={dimensions}
                translate={translate}
            />
        </div>
    );
}

// function TreeViewComponent(){
//     const nodeSize = { x: 200, y: 200 };
//     const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

//     return (<>
//         <div style={containerStyles} >
//             <Tree
//                 data={orgChart}
//                 zoomable={true}
//                 nodeSize={nodeSize}
//                 renderCustomNodeElement={(rd3tProps) =>
//                     renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
//                 }
//                 orientation="vertical"
//             />
//         </div>
//     </>)

// }
