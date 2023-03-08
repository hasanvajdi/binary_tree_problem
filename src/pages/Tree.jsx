

import Node from "../components/Node";


//  style
import treeStyle from '../styles/pages/tree.module.scss';

const Tree = ({ nodes, totalDepth }) => {
  return (
    <div className={treeStyle.treeContainer}>
      <div className={treeStyle.nodesContainer}>
        {
          totalDepth && [...new Array(totalDepth)].map((_, index) => {
            var depthRelatedNodes = nodes.filter((i) => i.depth == index + 1);
            var depthCount = Math.pow(2, index);

            return <Node
              key={index * Math.random()}
              depthRelatedNodes={depthRelatedNodes}
              depthCount={depthCount}
            />;
          })
        }
      </div>
    </div>
  );
};

export default Tree;