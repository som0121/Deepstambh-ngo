import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Transformation from "../../components/Transformation/Transformation";

import img0 from "../../assets/initiative-pic.png";
import img1 from "../../assets/initiative-pic-1.png";
import img2 from "../../assets/initiative-pic-2.png";
import img3 from "../../assets/initiative-pic-3.png";
import img4 from "../../assets/initiative-pic-4.png";
import img5 from "../../assets/initiative-pic-5.png";
import img6 from "../../assets/initiative-pic-6.png";
import img7 from "../../assets/initiative-pic-7.png";
import img8 from "../../assets/initiative-pic-8.png";
import img9 from "../../assets/initiative-pic-9.png";
import img10 from "../../assets/initiative-pic-10.png";
import img11 from "../../assets/initiative-pic-11.png";
import img12 from "../../assets/initiative-pic-12.png";

export default function Activities() {
  const { t } = useLanguage();

  const activities = [
    {
      img: img0,
      tag: t("act_tag_0"),
      title: t("act_title_0"),
      desc: t("act_desc_0"),
      tagColor: "#15803D",
    },
    {
      img: img1,
      tag: t("act_tag_1"),
      title: t("act_title_1"),
      date: "22/04/2021",
      desc: t("act_desc_1"),
      tagColor: "#BE185D",
    },
    {
      img: img2,
      tag: t("act_tag_2"),
      title: t("act_title_2"),
      desc: t("act_desc_2"),
      tagColor: "#1D4ED8",
    },
    {
      img: img3,
      tag: t("act_tag_3"),
      title: t("act_title_3"),
      desc: t("act_desc_3"),
      tagColor: "#1D4ED8",
    },
    {
      img: img4,
      tag: t("act_tag_4"),
      title: t("act_title_4"),
      desc: t("act_desc_4"),
      tagColor: "#7E22CE",
    },
    {
      img: img5,
      tag: t("act_tag_5"),
      title: t("act_title_5"),
      desc: t("act_desc_5"),
      tagColor: "#F93",
    },
    {
      img: img6,
      tag: t("act_tag_6"),
      title: t("act_title_6"),
      desc: t("act_desc_6"),
      tagColor: "#15803D",
    },
    {
      img: img7,
      tag: t("act_tag_7"),
      title: t("act_title_7"),
      date: "22/04/2021 - 18/05/2021",
      desc: t("act_desc_7"),
      tagColor: "#BE185D",
    },
    {
      img: img8,
      tag: t("act_tag_8"),
      title: t("act_title_8"),
      desc: t("act_desc_8"),
      tagColor: "#1D4ED8",
    },
    {
      img: img9,
      tag: t("act_tag_9"),
      title: t("act_title_9"),
      desc: t("act_desc_9"),
      tagColor: "#1D4ED8",
    },
    {
      img: img10,
      tag: t("act_tag_10"),
      title: t("act_title_10"),
      desc: t("act_desc_10"),
      tagColor: "#7E22CE",
    },
    {
      img: img11,
      tag: t("act_tag_11"),
      title: t("act_title_11"),
      desc: t("act_desc_11"),
      tagColor: "#B91C1C",
    },
    {
      img: img12,
      tag: t("act_tag_12"),
      title: t("act_title_12"),
      desc: t("act_desc_12"),
      tagColor: "#7E22CE",
    },
  ];

  return (
    <main className="bg-[#FFF]">

      {/* HERO */}
      <section className="w-full bg-[linear-gradient(96deg,#FFF7F0_0%,#FFF_109.16%)]
        h-[350px] flex flex-col justify-center items-center text-center">

        <h1 className="text-[48px] font-bold text-[#E65100]
         font-['Devanagari MT'] mb-[16px] leading-[76.8px] tracking-[0.144px]">
          {t("activities_title")}
        </h1>

        <p className="max-w-[1205px] text-[28px] leading-[38.4px] tracking-[0.072px]
         text-[#5B5B5B] font-marathi font-normal">
          {t("activities_sub")}
        </p>

      </section>


      
      <section className="w-full flex flex-col items-center gap-[90px] py-[80px]">
       
        <div className="w-full max-w-[1440px] flex flex-col gap-[90px] px-[20px]">
          {activities.map((item, index) => (

            <div
              key={index}

              className={`flex w-full items-center justify-center 
                gap-[80px] p-[12px] 
              ${index % 2 !== 0 ? "flex-row-reverse" : ""}
              max-[900px]:flex-col`}
            >

              {/* IMAGE CARD */}
              <div className="relative w-[536px] h-[367px]
               overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 
                bg-[linear-gradient(0deg,rgba(0,0,0,0.50)_0%,rgba(0,0,0,0)_100%)]"></div>
              </div>

              {/* TEXT CONTENT */}
              <div className="max-w-[560px]">

                {/* TAG */}
                <span
                  className="block text-[11px] tracking-[0.6px]
                   mb-[8px] font-yatra"
                  style={{ color: item.tagColor }}
                >
                  {item.tag}
                </span>

                {/* TITLE */}

                <h3 className="text-[28px] font-bold text-[#E65100] 
                font-['Devanagari MT'] mb-[10px] leading-[36px]">
                  {item.title}
                </h3>

                {/*DATE */}

                {item.date && (
                  <p className="text-[20px] font-bold text-[#E65100]
                   font-marathi mb-[12px]">
                    {item.date}
                  </p>
                )}

                {/* DESCRIPTION */}
                <p className="text-[14.6px] font-marathi leading-[1.8]
                 text-[#5B5B5B] font-medium">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>
      </section>

      <Transformation />
    </main>
  );
}
