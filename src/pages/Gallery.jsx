import React from "react";
import "../styles/Gallery.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import GalleryItem from "../components/GalleryItem";

import galleryImage1 from "../assets/images/gallery-1.png";
import galleryImage2 from "../assets/images/gallery-2.png";
import galleryImage3 from "../assets/images/gallery-3.png";
import galleryImage4 from "../assets/images/gallery-4.png";
import galleryImage5 from "../assets/images/gallery-5.png";
import galleryImage6 from "../assets/images/gallery-6.png";
import galleryImage7 from "../assets/images/gallery-7.png";
import galleryImage8 from "../assets/images/gallery-8.png";
import galleryImage9 from "../assets/images/gallery-9.png";
import galleryImage10 from "../assets/images/gallery-10.png";

const images = [
  { src: galleryImage1, alt: "Gallery Image 1" },
  { src: galleryImage2, alt: "Gallery Image 2" },
  { src: galleryImage3, alt: "Gallery Image 3" },
  { src: galleryImage4, alt: "Gallery Image 4" },
  { src: galleryImage5, alt: "Gallery Image 5" },
  { src: galleryImage6, alt: "Gallery Image 6" },
  { src: galleryImage7, alt: "Gallery Image 7" },
  { src: galleryImage8, alt: "Gallery Image 8" },
  { src: galleryImage9, alt: "Gallery Image 9" },
  { src: galleryImage10, alt: "Gallery Image 10" },
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>
          Photo <br />
          <span>Gallery</span>
        </h1>
      </div>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <GalleryItem key={index} imageSrc={img.src} altText={img.alt} />
        ))}
      </div>
      <div className="gallery-paging">
        <div className="project-nav-icons">
          <div className="project-nav-left">
            <FiArrowLeft />
          </div>
          <div className="project-nav-arrow">
            <FiArrowRight />
          </div>
        </div>

        <div className="paging">
          <p>
            0 <span>1</span>
          </p>
          <p className="slash">/</p>
          <p>02</p>
        </div>
      </div>
    </div>
  );
}
