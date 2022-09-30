import React, { useState } from "react";
import "./css/Genres.css";

const Genres = () => {
  const [activeKey, setActiveKey] = useState(1);

  return (
    <div className="genres">
      <h3
        onClick={() => setActiveKey(1)}
        className={activeKey === 1 && "active"}
      >
        Trending
      </h3>
      <h3
        onClick={() => setActiveKey(2)}
        className={activeKey === 2 && "active"}
      >
        Top Rated
      </h3>
      <h3
        onClick={() => setActiveKey(3)}
        className={activeKey === 3 && "active"}
      >
        Action
      </h3>
      <h3
        onClick={() => setActiveKey(4)}
        className={activeKey === 4 && "active"}
      >
        Comedy
      </h3>
      <h3
        onClick={() => setActiveKey(5)}
        className={activeKey === 5 && "active"}
      >
        Horror
      </h3>
      <h3
        onClick={() => setActiveKey(6)}
        className={activeKey === 6 && "active"}
      >
        Romance
      </h3>
      <h3
        onClick={() => setActiveKey(7)}
        className={activeKey === 7 && "active"}
      >
        Sci-Fi
      </h3>
      <h3
        onClick={() => setActiveKey(8)}
        className={activeKey === 8 && "active"}
      >
        Drama
      </h3>
      <h3
        onClick={() => setActiveKey(9)}
        className={activeKey === 9 && "active"}
      >
        Thriller
      </h3>
      <h3
        onClick={() => setActiveKey(10)}
        className={activeKey === 10 && "active"}
      >
        Documentary
      </h3>
      <h3
        onClick={() => setActiveKey(11)}
        className={activeKey === 11 && "active"}
      >
        New
      </h3>
    </div>
  );
};
export default Genres;
