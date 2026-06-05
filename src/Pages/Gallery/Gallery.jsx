import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import galleryImg from "../../assets/Gallery-img.png";
import galleryHover from "../../assets/gallery-hover.png";
import Transformation from "../../components/Transformation/Transformation";

export default function Gallery() {
  const { t } = useContext(LanguageContext);

  const images = Array(12).fill(0);

  return (
    <main className="bg-[#FFF]">
      {/* Hero */}
      <section className="w-full h-[350px] py-[80px] pb-[60px] text-center 
      bg-[linear-gradient(96deg,#FFF7F0_0%,#FFF_109.16%)]">

        <div className="max-w-[1200px] mx-auto px-[20px]">

          <h1 className="text-[48px] font-bold  text-[#E65100] mb-[12px] font-['Devanagari MT'] 
           leading-[76.8px] tracking-[0.144px]">

            {t("gallery_title")}
          </h1>

          <p className="max-w-[1348.82px] text-[#5B5B5B] text-[22px] font-marathi font-normal 
          leading-[38.4px] tracking-[0.072px]">
            {t("gallery_sub")}
          </p>

        </div>
      </section>

      {/* Grid */}
      <section className="p-[10px] my-[90px]">

        <div className="max-w-[1200px] mx-auto px-[20px]">

          <div className="grid grid-cols-3 gap-[24px] 
          max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">

            {images.map((_, index) => (
              <div
                key={index}
                className="
                  relative w-full aspect-square
                  rounded-[12px] overflow-hidden
                  shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
                  group cursor-pointer
                "
              >
                {/* NORMAL IMAGE */}
                <img
                  src={galleryImg}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover
                  transition-opacity duration-300 group-hover:opacity-0"
                />

                {/* HOVER IMAGE */}
                <img
                  src={galleryHover}
                  alt="gallery hover"
                  className="absolute inset-0 w-full h-full object-cover
                  opacity-0 group-hover:opacity-100 transition-opacity
                   duration-300"
                />

                {/* Gradient Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-[linear-gradient(180deg,rgba(255,255,255,0)_33.69%,#FFF_86.54%)]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />

                {/*Metadata*/}
                <div
                  className="
                    absolute bottom-0 left-0 right-0
                    flex flex-col justify-center items-center
                    gap-[8px]
                    px-[24px] py-[18px]
                    text-center
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                >
                  {/* Tag */}
                  <p className="text-[#1D4ED8] font-['Yatra_One'] font-normal
                   text-[11.6px] leading-[16px] self-start text-left">
                    {t("gallery_tag")}
                  </p>

                  {/* hover Title */}
                  <h3
                    className="
                      text-[#E65100]
                      font-['Devanagari_MT']
                      font-bold
                      text-[28.9px]
                      leading-[36px]
                      tracking-[-0.75px] self-start text-left"
                  >
                    {t("gallery_caption")}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Transformation />
    </main>
  );
}
