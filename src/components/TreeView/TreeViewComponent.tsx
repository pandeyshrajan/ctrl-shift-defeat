import { useState } from "react";
import { observer } from "mobx-react";
import Tree from "react-d3-tree";
import TreeNodeCard from "./TreeNodeCard";
import { useCenteredTree } from "./helper";
import { store } from "../../stores/userProfileStore";

const containerStyles = {
    width: "100%",
    height: "100%",
};

const renderForeignObjectNode = ({ nodeDatum, toggleNode, foreignObjectProps }: any) => (
    <g>
        {/* <circle r={5}></circle> */}
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject {...foreignObjectProps}>
            <TreeNodeCard toggleNode={toggleNode} nodeDatum={nodeDatum} />
        </foreignObject>
    </g>
);

function TreeViewComponent({ rootStore }: any) {
    //   const [translate, containerRef] = useCenteredTree();
    const [toggle, toggleNode] = useState(false);

    const [dimensions, translate, containerRef] = useCenteredTree();
    const nodeSize = { x: "300", y: "400" };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -150, y: -200 };
    return (
        <div style={containerStyles} ref={containerRef}>
            <Tree
                data={store.getTreeData()}
                // translate={translate}
                nodeSize={nodeSize}
                renderCustomNodeElement={(rd3tProps) => renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, rootStore })}
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

export default observer(TreeViewComponent);
