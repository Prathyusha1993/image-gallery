import React, { useState } from "react";
import ImageModal from "./ImageModal";
import "./ImageGallery.css";

const images = [
  {
    id: 1,
    src: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    category: "Nature",
  },
  {
    id: 2,
    src: "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_toucan.jpg",
    category: "Animals",
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
    category: "Nature",
  },
  {
    id: 4,
    src: "https://images.adsttc.com/media/images/5c93/cd38/284d/d1e6/7400/019d/newsletter/Photo_-_Vessel_Interior_-_courtesy_of_Michael_Moran_for_Related-Oxford.jpg?1553190161",
    category: "Architecture",
  },
];

const categories = ["All", "Nature", "Animals", "Architecture"];

const ImageGallery = () => {
  const [selectedCategory, setSlectedCategory] = useState("All");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };
  return (
    <div>
      <div className="filter-buttons">
        {categories.map((category) => (
          <button key={category} onClick={() => setSlectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="gallery">
        {filteredImages.map((image) => (
          <img
            src={image.src}
            key={image.id}
            alt=""
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      {currentImage && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          currentImage={currentImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;
