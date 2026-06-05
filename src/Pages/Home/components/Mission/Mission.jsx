import React, { useState, useEffect } from "react";
import { useLanguage } from "../../../../context/LanguageContext";

import img0 from "../../../../assets/Mission-img.png";
import img1 from "../../../../assets/Mission-1.png";
import img2 from "../../../../assets/Mission-2.png";
import img3 from "../../../../assets/Mission-3.png";

export default function Mission() {
  const { t } = useLanguage();

  const images = [img0, img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="about"
      className="
        relative z-[10] bg-[#FFF]
        py-[80px]
        mt-[-120px]

        /* responsiveness */
        max-[1200px]:mt-[-80px]
        max-[768px]:mt-[-40px]
        max-[480px]:mt-0
      "
    >
      <div
        className="
          max-w-[1308px] mx-auto
          flex items-center justify-between gap-[72px]

          max-xl:px-[40px]
          max-[1100px]:gap-[40px]
          max-[980px]:flex-col-reverse
          max-[980px]:gap-[28px]
          max-[980px]:px-[20px]"
      >
        {/* Text Section */}
        <div className="flex-1 max-[980px]:text-center">
          <h1
            className="
              font-['Devanagari MT']
              font-bold w-[535px] max-[1100px]:w-[480px]
              text-[#E65100]
              text-[36px] leading-[57.7px]
              mb-[16px] tracking-[0.108px]
 
              /* responsiveness */
              max-[980px]:w-full
              max-[768px]:text-[26px]
              max-[480px]:text-[22px]
            "
          >
            {t("mission_title")}
          </h1>

          <p
            className="
              font-marathi
              text-[#5B5B5B]
              text-[20px]
              font-normal
              leading-[34px]
              tracking-[0.06px]
              mb-[24px]
              max-w-[535px] max-[1100px]:max-w-[480px]

              max-[980px]:max-w-full
              max-[768px]:text-[18px]
              max-[480px]:text-[15px]
            "
          >
            {t("mission_desc")}
          </p>
        </div>

        {/* Carousel Section */}
        <div className="flex-1 flex flex-col items-center relative w-full overflow-hidden">
          <div
            className="
              relative
              w-[544px] h-[323px]
              max-[1100px]:w-[480px]
              max-[1100px]:h-[300px]

              overflow-hidden
              rounded-[16px]

              /* tablet */
              max-[980px]:w-[420px]
              max-[980px]:h-[280px]

              /* mobile */
              max-[768px]:w-full
              max-[768px]:h-[240px]

              max-[480px]:h-[200px]
            "
          >
            {/* Sliding Images */}

            <div
              className="flex transition-transform duration-500 ease-in-out h-full w-full"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="mission"

                  className="
                           w-full min-w-[644px]  flex-shrink-0
                           object-cover h-[363px]

                           max-[768px]:h-[240px]
                           max-[480px]:h-[200px]"
                />
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-3">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  i === index ? "bg-[#EE722B] w-[20px]" : "bg-[#80664D] w-[8px]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
