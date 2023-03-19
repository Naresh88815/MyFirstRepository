import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

const PhotoSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('/api/images')
      .then(res => {
        setImages(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Carousel>
      {images.map(image => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block w-100"
            src={image.url}
            alt={image.title}
          />
          <Carousel.Caption>
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoSlider;