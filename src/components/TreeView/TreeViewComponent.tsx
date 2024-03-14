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
        <foreignObject {...foreignObjectProps}>
            <TreeNodeCard toggleNode={toggleNode} nodeDatum={nodeDatum} />
        </foreignObject>
    </g>
);

function TreeViewComponent({ rootStore }: any) {
    const [toggle, toggleNode] = useState(false);

    const [dimensions, translate, containerRef] = useCenteredTree();
    const nodeSize = { x: "200", y: "300" };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -100, y: -300 };
    return (
        <div style={containerStyles} ref={containerRef}>
            <Tree
                data={store.getTreeData()}
                nodeSize={nodeSize}
                renderCustomNodeElement={(rd3tProps) => renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, rootStore })}
                orientation="vertical"
                depthFactor={500}
                pathFunc="step"
                separation={{ siblings: 2, nonSiblings: 2 }}
                // zoomable={true}
                // enableLegacyTransitions={true}
                dimensions={dimensions}
                translate={translate}
            />
        </div>
    );
}

export default observer(TreeViewComponent);
