import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import data from "./data";

function App() {
  const [user, setUser] = useState(data);
  const [value, setValue] = useState(0);

  const handleClickLeft = (index1) => {
    if (index1 === 0) {
      setValue(user.length - 1);
    } else {
      setValue(index1 - 1);
    }
  };
  const handleClickRight = (index2) => {
    if (index2 === user.length - 1) {
      setValue(0);
    } else {
      setValue(index2 + 1);
    }
  };

  const { image, name, title, quote } = user[value];
  return (
    <section>
      <h1>
        {" "}
        <span>/</span> Reviews
      </h1>
      <main>
        <button onClick={() => handleClickLeft(value)}>
          <FiChevronLeft />
        </button>
        <div className='user'>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <h3>{title}</h3>
          <p>{quote}</p>
        </div>
        <button onClick={() => handleClickRight(value)}>
          <FiChevronRight />
        </button>
      </main>
    </section>
  );
}

export default App;
