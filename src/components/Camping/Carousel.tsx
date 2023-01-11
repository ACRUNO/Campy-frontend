import React from "react"
import { useEffect } from "react";
import Style from './Carousel.module.css'
/* import foto1 from './salir.png'
import foto2 from './portada.jpg'
import foto3 from './comilona.webp' */
import { useSelector } from "react-redux";
import Box from "@mui/system/Box/Box";

export default function Carousel() {
  let camp = useSelector((state: any) => state.detailCamping)
  const colors = camp?.imagenes;
  const delay = 5000;
  const timeoutRef: any = React.useRef(null);

  const [index, setIndex] = React.useState(0);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors?.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => { };
    resetTimeout();
  }, [index]);

  return (
    <Box>
      {colors?.length == 1 ? <img src={colors} className={Style.slide} /> :
        <div className={Style.slideshow}>
          {/* IMAGEN */}
          <div className={Style.slideshowSlider}
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {colors?.map((backgroundColor: any, index: any) => (
              <img className={Style.slide} key={index} src={backgroundColor} />
            ))}
          </div>
          <div className={Style.slideshowDots}>
            {colors?.map((_: any, idx: any | number | ((prevState: number) => number) | null | undefined) => (
              <div key={idx}
                className={`${Style.slideshowDot}${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}></div>
            ))}
          </div>
        </div>}
    </Box>


  );
}