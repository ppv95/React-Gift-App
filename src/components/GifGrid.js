import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGrimItem } from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3> {category}</h3>
      {loading && <p>Loading</p>}

      <div className="card-grid">
        <ol>
          {images.map((image) => (
            <GifGrimItem key={image.id} {...image} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifGrid;
