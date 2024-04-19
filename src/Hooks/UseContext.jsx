import React, { useState, useContext } from "react";

const UseContext = () => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE CONTEXT</h2>
      {/* There are two things to note in useContext 1. The Context provider, which we want to wrap all the codes that needs access to
      2. Single props passed, which is value={whatever the value of the context is}
      */}
    </div>
  );
};

export default UseContext;
