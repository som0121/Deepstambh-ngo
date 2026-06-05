import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";

import story1 from "../../../../assets/initiative1.png";
import story2 from "../../../../assets/initiative2.png";
import story3 from "../../../../assets/initiative3.png";
import story4 from "../../../../assets/initiative4.png";

export default function Initiatives() {
  const { t } = useLanguage();

  const cards = [
    {
      img: story1,
      title: t("initiatives_card_1_title"),
      desc: t("initiatives_card_1_desc"),
    },
    {
      img: story2,
      title: t("initiatives_card_2_title"),
      desc: t("initiatives_card_2_desc"),
    },
    {
      img: story3,
      title: t("initiatives_card_3_title"),
      desc: t("initiatives_card_3_desc"),
    },
    {
      img: story4,
      title: t("initiatives_card_4_title"),
      desc: t("initiatives_card_4_desc"),
    },
  ];

  return (
    <section className="bg-white text-center pt-[80px] pb-[100px]">
      <div className="max-w-[1200px] mx-auto">

        {/* Title */}
        <h2 className="font-['Devanagari MT'] text-[36px] leading-[57.6px] tracking-[0.108px]
         font-bold text-[#E65100] mb-[10px] ">
          {t("initiatives_title")}
        </h2>

        {/* Subtitle */}
        <p
          className="
          font-marathi font-normal
          max-w-[1086px]
          mx-auto
          text-[20px]
          leading-[34px]
          tracking-[0.06px]
          text-[#5B5B5B]
        "
        >
          {t("initiatives_sub")}
        </p>

        {/* GRID*/}
         
         <div
          className="
          mt-[55px]
          mx-auto
          w-[870px]
          grid grid-cols-2
          gap-[46px]
          max-[900px]:w-full
          max-[900px]:grid-cols-1
          max-[900px]:gap-[30px]
          max-[900px]:px-[20px]
          justify-center"
>

          {cards.map((card, i) => (
            <div
              key={i}
              className="
              group
              relative
              w-[412px]
              h-[367px] max-[900px]:h-[320px]
              rounded-[16px]
              overflow-hidden
              shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
              cursor-pointer
              max-[900px]:w-full
              "
            >
              {/* IMAGE */}
              <img
                src={card.img}
                alt={card.title}
                className="
                w-full
                h-full
                object-cover
                "
              />

              {/* BOTTOM LAYER */}
              <div
                className="
                absolute
                bottom-0
                left-0
                w-full
                h-[94px]
                bg-[rgba(255,255,255,0.80)]
                px-[39px] max-[900px]:px-[24px]
                py-[20px]
                flex items-center justify-center
                rounded-b-[16px]
                z-[2]
                "
              >
                <p
                  className="
                  text-[#EE722B]
                  text-[20px]
                  font-normal
                  font-marathi
                  leading-[32px]
                  tracking-[0.06px]
                  text-center
                  "
                >
                  {card.title}
                </p>
              </div>

              
              {/* HOVER GRADIENT LAYER */}
              <div

              className="
              absolute inset-0
              px-[39px] max-[900px]:px-[24px]
              py-[28px] max-[900px]:py-[20px]
              opacity-0
              translate-x-[20px]
              transition-all duration-300
              flex flex-col justify-center
              rounded-[16px]
              group-hover:opacity-100
              group-hover:translate-x-0
              z-[3]"

            style={{
             background:
             "linear-gradient(103deg, rgba(238,114,43,0.40) 0%, rgba(255,173,102,0.40) 50%, rgba(232,186,48,0.40) 100%), #FFF",
           }}
     >
                <h3
                  className="
                  text-[22px]
                  font-normal
                  font-marathi
                  text-[#EE722B]
                  mb-[10px]
                  leading-[35.2px]
                  tracking-[0.066px]"
                >
                  {card.title}
                </h3>

                <p
                  className="
                  text-[16px]
                  leading-[26px]
                  text-[#5B5B5B]
                  font-normal
                  "
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <Link
          to="/activities"
          className="
          inline-block
          h-[48px]
          mt-[48px]
          bg-[#018F4D]
          text-[#FCFBF8]
          px-[28px]
          py-[12px]
          rounded-[26px]
          text-[18px]
          font-normal
          font-marathi
          leading-[30.6px]
          tracking-[0.054px]
          shadow-[0_10px_40px_-10px_rgba(1,143,77,0.31)]
          hover:bg-[#0C7A3D]"
        >
          {t("initiatives_see_more")}
        </Link>
      </div>
    </section>
  );
}
