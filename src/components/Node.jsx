import { faker } from '@faker-js/faker';



//  components
import Pointer from "./Pointer";

//  style
import nodeStyle from '../styles/components/node.module.scss';


const Node = ({ depthRelatedNodes, depthCount }) => {
  return (
    <div
      key={depthCount * Math.random()}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: depthRelatedNodes.length === depthCount ? "space-around" : "flex-start"
      }}
      className={nodeStyle.nodesContainer}
    >
      {
        depthRelatedNodes.map((nodeItem, index) => (
          <div
            key={index}
            style={{
              marginLeft: "30px",
              marginRight: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
            className={nodeStyle.nodeContainer}
          >
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: "100%",
              }}
              className={`${nodeStyle.nodeItem} animate__animated animate__fadeIn animate__slow`}
            >
              <div className={nodeStyle.nodeItemContent}>
                <span style={{ position: "absolute" }}>{nodeItem.value}</span>
                <img
                  src={faker.image.avatar()}
                  alt="a"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
            {depthRelatedNodes.length >= depthCount && <Pointer />}

          </div>
        ))
      }
    </div>
  );
};

export default Node;