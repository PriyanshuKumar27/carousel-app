import { useState } from "react";
import { Slide } from "../Slide/Slide";

export const Slider = ({ images }) => {
  const [active, setActive] = useState(0);

  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    } else {
      setActive(images.length - 1);
    }
  };

  return (
    <>
      <div className="slider">
        <div class="next-prev prev" onClick={onPrev}>
          {" "}
          &lt;{" "}
        </div>
        <div class="navigation-left">
          {images.slice(0, (images.length - 1) / 2).map((e, i) => (
            <img
              className={`preview ${i === active ? "active" : ""}`}
              key={e.caption}
              onClick={() => setActive(i)}
              src={e.image_url}
              alt={e.caption}
              style={{ width: `${100 / images.length}%` }}
            />
          ))}
        </div>
        <div className="slides">
          {images.map((e, i) => (
            <Slide key={e.caption} {...e} active={i === active} />
          ))}
        </div>
        <div class="navigation-right">
          {images
            .slice((images.length - 1) / 2 + 1, images.length)
            .map((e, i) => (
              <img
                className={`preview ${
                  i + (images.length - 1) / 2 + 1 === active ? "active" : ""
                }`}
                key={e.caption}
                onClick={() => setActive(i + (images.length - 1) / 2 + 1)}
                src={e.image_url}
                alt={e.caption}
                style={{ width: `${100 / images.length}%` }}
              />
            ))}
        </div>
        <div class="next-prev next" onClick={onNext}>
          {" "}
          &gt;{" "}
        </div>
      </div>
      <div className="navigation-bottom">
        {" "}
        {images.map((e, i) => (
          <div
            className={`dots ${i === active ? "active" : ""}`}
            key={e.caption}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </>
  );
};
