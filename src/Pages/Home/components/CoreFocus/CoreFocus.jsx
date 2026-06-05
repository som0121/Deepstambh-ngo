import React, { useState } from "react";
import { useLanguage } from "../../../../context/LanguageContext";

import educationImg from "../../../../assets/education.png";
import womenImg from "../../../../assets/women.png";
import environmentImg from "../../../../assets/environment.png";
import ruralImg from "../../../../assets/rural.png";

export default function CoreFocus() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      img: educationImg,
      title: t("core_education"),
      desc: t("core_education_desc"),
    },
    {
      img: womenImg,
      title: t("core_women"),
      desc: t("core_women_desc"),
    },
    {
      img: environmentImg,
      title: t("core_environment"),
      desc: t("core_environment_desc"),
    },
    {
      img: ruralImg,
      title: t("core_rural"),
      desc: t("core_rural_desc"),
    },
  ];

  return (
    <section className="bg-[radial-gradient(256.45%_81.57%_at_20%_50%,rgba(255,153,51,0.08)_0%,rgba(255,153,51,0)_50%),radial-gradient(263.94%_83.95%_at_80%_80%,rgba(255,222,92,0.08)_0%,rgba(255,222,92,0)_50%)] py-[90px]">
      <div className="w-[1200px] mx-auto text-center max-[1280px]:w-[95%]">
        {/* TITLE */}
        
        <h2
          className="text-[36px] font-bold text-[#E65100]
         font-['Devanagari MT'] leading-[57.6px] tracking-[0.108px]"
        >
          {t("core_title")}
        </h2>

        {/* SUBTITLE */}
        <p
          className="w-[1260px] max-w-full max-[1400px]:w-[90%] max-md:w-full mx-auto
                     text-center px-[20px]
                     mt-4 mb-[70px]
                     text-[20px] max-md:text-[18px]
                     text-[#5B5B5B]
                     font-marathi font-normal
                     leading-[34px] max-md:leading-[28px]
                     tracking-[0.06px]"
          >
          {t("core_sub")}
        </p>

        {/* OVALS */}

        <div className="flex items-center justify-center gap-[60px] max-lg:flex-wrap max-lg:gap-[30px] 
        max-md:flex-col max-md:items-center">

          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`
                  relative overflow-hidden cursor-pointer
                  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                  max-md:mx-auto

                  ${isActive
                    
                    ? "w-[370px] h-[450px] max-lg:w-[300px] max-lg:h-[420px] max-md:w-[300px] max-md:h-[420px]"
                    : "w-[200px] h-[400px] max-lg:w-[180px] max-lg:h-[360px] max-md:w-[180px] max-md:h-[360px]"

                  }
                `}
                style={{
                  borderRadius: isActive ? "16px" : "115px",
                  transition: "all 500ms cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                  style={{
                    borderRadius: isActive ? "16px" : "115px",
                    transition: "all 500ms cubic-bezier(0.4,0,0.2,1)",
                  }}
                />

                {/* TITLE OVERLAY*/}
                <div
                  className="absolute inset-0 bg-[rgba(255,255,255,0.80)]
                  flex items-center justify-center
                  transition-all duration-500"
                  style={{
                    borderRadius: isActive ? "16px" : "115px",
                    opacity: isActive ? 0 : 1,
                    transition: "all 500ms cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <p
                    className="text-[#EE722B] text-[20px] font-marathi
                    font-normal leading-[32px] tracking-[0.06px] text-center"
                  >
                    {item.title}
                  </p>
                </div>

                {/* HOVER CONTENT */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[260px] 
                  bg-[rgba(255,255,255,0.80)] p-[22px]
                  transition-all duration-500"
                  style={{
                    borderRadius: isActive
                      ? "0px 0px 16px 16px"
                      : "0px 0px 115px 115px",

                    opacity: isActive ? 1 : 0,

                    transform: isActive
                      ? "translateY(0px)"
                      : "translateY(40px)",

                    transition: "all 500ms cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <h3 className="text-[#EE722B] text-[22px] font-marathi font-normal">
                    {item.title}
                  </h3>

                  <p
                    className="mt-2 text-[#5B5B5B] text-[18px] max-md:text-[16px]
                    font-marathi leading-[28px] font-normal"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
