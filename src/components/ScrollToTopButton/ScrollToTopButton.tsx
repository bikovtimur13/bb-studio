import { useState } from "react";
import Image from 'next/image';

import faArrowUp from "/public/images/icons/bb-to-top-scroll-btn.svg";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Прокрутка страницы вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Плавная прокрутка
    });
  };

  return (
    <>
      <button onClick={scrollToTop}>
        <Image src={faArrowUp} width={67} height={67} layout='responsive' alt="logo" />
      </button>
    </>
  );


};

export default ScrollToTopButton;