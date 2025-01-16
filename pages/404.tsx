import React from "react";

import Image from 'next/image';
import error404Img from "/public/images/bb-error-404.webp";

const Custom404 = () => {
  return <>
    <div className='main-wrapper'>
      <div className="error-page" >
        <h1 className="error-page__title">Ошибка 404 </h1>
      </div>
    </div >
  </>;
}

export default Custom404;