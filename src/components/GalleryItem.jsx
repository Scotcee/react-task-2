import React from "react";

function GalleryItem({ imageSrc, altText }) {
  return (
    <div className="gallery-item">
      <img src={imageSrc} alt={altText} />
    </div>
  );
}

export default GalleryItem;
