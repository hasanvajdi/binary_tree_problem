import { useState, useEffect } from "react";


//  pages
import Tree from './pages/Tree';

//  style
import 'animate.css';


const App = () => {

  const [nodes, setNodes] = useState([{ value: null, depth: null }]);
  const [totalDepth, setTotalDepth] = useState(null);


  //  handlers
  const handleChangeItems = (input) => {
    const inputList = input.target.value.trim().split(" "); //  split entred list with white space to convert Array

    //  for prevent emtpy strings like : '' and ""
    const inputListArray = new Array();
    inputList.map(item => {
      if (item.length)
        inputListArray.push(item);
    });
    if (!inputList.length || !inputListArray.length) setTotalDepth(null);

    //////////////////////////////////////////////



    var logaritm = Math.log2(inputListArray.length);
    var totalDepths = parseInt(logaritm) + 1;


    var nodesList = [];

    for (var i = 1; i <= totalDepths; i++) {
      var startIndex = Math.pow(2, i - 1) - 1;
      var endIndex = Math.pow(2, i) - 1;

      var slicedArray = inputListArray.slice(startIndex, endIndex);
      slicedArray.forEach(item => {
        nodesList.push({
          value: item,
          depth: i,
        });
      });
    }
    setNodes(nodesList);
    setTotalDepth(totalDepths);


  };

  return (
    <>
      <input
        type="text"
        onChange={handleChangeItems}
        placeholder="لیست خود را وارد کنید"
        style={{
          width: "95vw",
          height: "50px",
          fontSize: 30,
          borderColor: "#86003a",
          outlineColor: "#cc1b59",
          borderRadius: 30,
          direction: "rtl",
          padding: "2px 15px"
        }}
      />

      <Tree
        nodes={nodes}
        totalDepth={totalDepth}
      />
    </>
  );
};

export default App;