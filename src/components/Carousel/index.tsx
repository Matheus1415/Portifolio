import React, { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
  position: relative;
  border-radius: 10px;

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-slide {
    min-width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    cursor: pointer;
  }

  .buttons {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }

  .button {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
  }
`;

interface CarouselProps {
  images: string[] ;
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openModal = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <CarouselContainer>
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => openModal(image)}
            />
          ))}
        </div>
        <div className="buttons">
          <button className="button" onClick={handlePrev}>
            {"<"}
          </button>
          <button className="button" onClick={handleNext}>
            {">"}
          </button>
        </div>
      </CarouselContainer>

      {modalImage && (
        <Modal id="bacgroud" onClick={closeModal}>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          <img src={modalImage} alt="Expanded view" />
        </Modal>
      )}
    </>
  );
};

export default Carousel;
