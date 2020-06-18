import React from "react";
import ImageGallery from "react-image-gallery";

const pets = (props) => {
  let gallery = null;
  if (props.dogs) {
    const dogs = props.dogs.photos.map((photo) => {
      return { original: photo, thumbnail: photo };
    });

    gallery = <ImageGallery items={dogs} showIndex lazyLoad />;
  }
  return gallery;
};

export default pets;
