import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, set_count] = useState(0);
  return (
    <div>
      <div className="w-full max-w-xl mb-10 bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md">
        <div className="bg-white rounded-md p-10">
          <h1 className="text-center text-gray-400">Parent</h1>
          <h1 className="text-2xl text-center mb-5">{count}</h1>
        </div>
      </div>
      <Child count={count} set_count={set_count} />
    </div>
  );
};

export default Parent;
