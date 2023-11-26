"use client";

import { useState } from "react";

const ClientPage = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prevState) => prevState + 1);
  };
  return (
    <div>
      <h1 className="text-6xl font-bold">{counter}</h1>
      <button className="btn btn-accent mt-3" onClick={handleCounter}>
        Increase Counter
      </button>
    </div>
  );
};

export default ClientPage;
