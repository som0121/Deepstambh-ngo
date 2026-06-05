import React from "react";
import { useLanguage } from "../../context/LanguageContext";

import about_us from "../../assets/about-us.png";
import about_us_1 from "../../assets/about-us-1.png";
import quoteIcon from "../../assets/impact.svg";

import Transformation from "../../components/Transformation/Transformation";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <main className="bg-white text-[#3f3f3f]">

        {/* ABOUT HERO */}
        <section
          className="py-[80px] text-center
         bg-[linear-gradient(96deg,#FFF7F0_0%,#FFF_109.16%)] px-4"
        >
          <h1
            className="text-[48px] max-md:text-[36px] max-sm:text-[30px]
           font-bold text-[#E65100] mb-[10px] font-['Devanagari MT']
           leading-[76.8px] tracking-[0.144px]"
          >
            {t("about_heading")}
          </h1>

          <p
            className="text-[24px] max-md:text-[18px] max-sm:text-[16px]
           text-[#5B5B5B] max-w-[1205px] mx-auto leading-[38.4px] 
           font-marathi font-normal tracking-[0.072px]"
          >
            {t("about_subtext")}
          </p>
        </section>

        {/* WHO WE ARE */}

        <section
          className="
            w-full py-[80px] px-[161px]

            max-xl:px-[120px] max-lg:px-[80px]
            max-md:px-[40px] max-sm:px-[20px]"
        >
          {/* MAIN FLEX CONTAINER */}

          <div
            className="
                       flex items-center justify-center
                       gap-[33px] max-xl:flex-col
                       max-xl:gap-[40px] "
          >
            {/* IMAGE */}

            <img
              src={about_us}
              alt={t("about_img_alt")}
              className="
                        w-[707.28px]
                        h-[369.25px]
                        object-cover

                        aspect-[707/369]

                        flex-shrink-0

                        max-xl:w-full

                        max-lg:w-full
                        max-lg:h-auto"
            />

            {/* TEXT CONTAINER */}

            <div
              className="
                       w-[841px] max-xl:w-full

                       flex flex-col items-center
                       gap-[10px]

                       px-[24px] py-[48px]

                       max-lg:w-full
                       max-md:px-[16px]
                       max-md:py-[32px]"
            >
              {/* HEADING */}

              <h2
                className=" w-full
                          text-[36px]
                          max-md:text-[26px]
                          max-sm:text-[22px]

                          font-bold
                          text-[#E65100]
                          font-['Devanagari MT']

                          leading-[57.6px]
                          max-md:leading-[40px]

                          tracking-[0.108px]
                          text-center

                          max-lg:text-center
                          max-lg:w-full"
              >
                {t("who_title")}
              </h2>

              {/* PARAGRAPH */}

              <p
                className="                   
                          w-[793px] max-xl:w-full max-w-full
                          h-[272px] max-lg:h-auto max-md:h-auto

                          text-[20px]
                          max-md:text-[16px]

                          leading-[34px]
                          max-md:leading-[26px]

                          tracking-[0.06px]
                          text-[#5B5B5B]

                          font-marathi
                          whitespace-pre-line
                          text-center
                          mx-auto

                          max-lg:w-full
                          max-lg:text-center"
              >
                {t("who_text")}
              </p>
            </div>
          </div>
        </section>

        {/* PILLARS */}

        <section className="pt-[40px] pb-[40px] mt-[-48px]">
          <div className="max-w-[909px] mx-auto flex flex-col items-center gap-[34px]">
            {/* ROW 1 */}
            <div className="flex justify-center gap-[34px] flex-wrap">
              {[
                {
                  title: t("pillar_education_title"),
                  text: t("pillar_education_desc"),
                },
                {
                  title: t("pillar_empower_title"),
                  text: t("pillar_empower_desc"),
                },
                {
                  title: t("pillar_enrich_title"),
                  text: t("pillar_enrich_desc"),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-[272px] h-[218px] bg-white rounded-[12px] p-[24px]
                             border border-[rgba(238,114,43,0.40)]
                             flex flex-col items-center justify-center text-center"
                >
                  <h3
                    className="w-[224px] text-[20px] font-bold text-[#E65100] mb-[10px]
                              font-['Devanagari MT'] leading-[28px]"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="w-[224px] text-[16px] text-[#5B5B5B] leading-[26px] 
                        font-['Devanagari MT'] font-normal"
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* ROW 2 */}

            <div className="flex justify-center gap-[34px] flex-wrap">
              {[
                {
                  title: t("pillar_sustain_title"),
                  text: t("pillar_sustain_desc"),
                },
                {
                  title: t("pillar_engage_title"),
                  text: t("pillar_engage_desc"),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-[272px] h-[218px] bg-white rounded-[12px] p-[24px]
                             border border-[rgba(238,114,43,0.40)]
                             flex flex-col items-center justify-center text-center"
                >
                  <h3
                    className="w-[224px] text-[20px] font-bold text-[#E65100] mb-[10px] 
                             font-['Devanagari MT'] leading-[28px]"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="w-[224px] text-[16px] text-[#5B5B5B] leading-[26px] 
                               font-['Devanagari MT'] font-normal"
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISION */}

        <section
          className="
              flex flex-col items-center justify-center
               gap-[10px]
             bg-[rgba(1,143,77,0.04)]         
               py-[53px]
               px-[20px] sm:px-[40px] lg:px-[120px] xl:px-[200px] 2xl:px-[359px] 
               max-sm:px-[20px]"
        >
          <div
            className="
                flex flex-col items-center
                gap-[8px]
                px-[45px]
                py-[26px]
                max-md:px-[20px]
                max-sm:px-[10px]"
          >
            <h2
              className="           
                  text-[36px]
                  max-md:text-[28px]
                  max-sm:text-[24px]
                  font-bold mb-[8px]
                  text-[#E65100]
                  font-['Devanagari MT']
                  leading-[48px]
                  text-center"
            >
              {t("vision_heading")}
            </h2>

            <p
              className="             
                     w-[1112px]
                      max-lg:w-full
                      text-center
                      text-[30px]
                      max-md:text-[22px]
                      max-sm:text-[18px]
                      leading-[45px]
                      max-md:leading-[34px]
                      italic
                      tracking-[2.4px]
                      text-[#5B5B5B]
                      font-marathi
                      mx-auto"
            >
              {t("vision_text")}
            </p>
          </div>
        </section>

        {/* CORE VALUES */}

        <section className="py-[80px] bg-[rgba(255,247,240,0.46)]">
          <h2
            className="flex justify-center items-center text-[36px]
             font-bold text-[#E65100] font-['Devanagari MT'] 
            leading-[57.6px] tracking-[0.108px]  text-center mb-[8px] mt-[-18px]"
          >
            {t("about_core_heading")}
          </h2>

          <div
            className="max-w-[1545px] mx-auto flex flex-col justify-center items-start 
                       gap-[32px] py-[32px]"
          >
            {/* ROW 1 */}

            <div
             
              className=" flex justify-center flex-wrap gap-[32px]

                          px-[40px] xl:flex-nowrap xl:px-[0] max-md:px-[20px]"
            >
              {[
                "value_integrity",
                "value_empathy",
                "value_equality",
                "value_service",
              ].map((key) => (

                <div
                  key={key}
                  className="
                   w-[363px]
                   max-lg:w-[320px]
                   max-md:w-full
                   h-[240px]
                   bg-[#FFF]
                   rounded-[12px]
                   p-[24px]
                   text-center
                   shadow-[0_4px_20px_-4px_rgba(246,133,35,0.25)]
                   flex flex-col justify-center"
                >
                  <h3
                    className="text-[#E65100] font-bold mb-[12px] text-[20px]
                                 font-['Devanagari MT'] leading-[28px]"
                  >
                    {t(`${key}_title`)}
                  </h3>

                  <p
                    className="max-w-[224px] max-md:max-w-full w-full mx-auto text-[16px]
                             text-[#5B5B5B] leading-[26px] font-['Devanagari MT']
                              font-normal"
                  >
                    {t(`${key}_desc`)}
                  </p>
                </div>
              ))}
            </div>

            {/* ROW 2 */}

            <div
              
              className="

                 flex items-start justify-center flex-wrap

                 gap-[120px] max-xl:gap-[60px] max-lg:gap-[40px] max-md:gap-[24px]

                 px-[92px] max-lg:px-[40px] max-md:px-[20px]"
            >
              {[
                "value_empowerment",
                "value_collaboration",
                "value_innovation",
              ].map((key) => (


                <div
                  key={key}

                  className="
                    w-[362px]
                    max-lg:w-[300px]
                    max-md:w-full
                    h-[240px]
                    bg-[#FFF]
                    rounded-[12px]
                    p-[24px]
                    text-center
                    shadow-[0_4px_20px_-4px_rgba(246,133,35,0.25)]
                    flex flex-col justify-center"
                    
                >
                  <h3
                    className="text-[#E65100] font-bold mb-[12px] text-[20px] 
                                font-['Devanagari MT'] leading-[28px]"
                  >
                    {t(`${key}_title`)}
                  </h3>

                  <p
                    className="max-w-[224px] max-md:max-w-full w-full mx-auto text-[16px] text-[#5B5B5B] 
                               leading-[26px] font-['Devanagari MT'] font-normal"
                  >
                    {t(`${key}_desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* FOUNDER */}

  <section
  className="
  w-full
  py-[80px]
  px-[20px]

  bg-[radial-gradient(36.39%_50.47%_at_26.65%_52.73%,rgba(232,186,48,0.20)_25.42%,rgba(255,255,255,0)_82.31%)]

  max-md:py-[60px]
"
>
  {/* HEADING */}
  <h2
    className="
      text-center
      text-[36px]
      font-bold
      text-[#E65100]
      font-['Devanagari MT']
      leading-[48px]

      mb-[40px]

      max-md:text-[28px]
      max-sm:text-[24px]
      max-md:mb-[60px]
    "
  >
    {t("founder_heading")}
  </h2>

  {/* MAIN CONTAINER */}
  <div
  className="
    max-w-[1400px]
    mx-auto

    min-h-[839px]

    flex items-center justify-center
    gap-[201px]

    max-xl:gap-[140px]
    max-lg:gap-[80px]

    max-lg:flex-col
    max-lg:items-center
    max-lg:text-center

    max-md:gap-[60px]

    max-lg:min-h-auto
  "
>
    {/* IMAGE FRAME */}

    <div
  className="
  relative
  shrink-0

  w-[431.918px]
  h-[581px]

  border-[10px]
  border-[#EE722B]
  rounded-[35px]

  overflow-visible

  flex justify-center

  max-[1024px]:w-[260px]
  max-[1024px]:h-[360px]

  max-[768px]:w-[300px]
  max-[768px]:h-[420px]

  max-[640px]:w-[260px]
  max-[640px]:h-[360px]

  max-[480px]:w-[220px]
  max-[480px]:h-[320px]
"
>

     <img
  src={about_us_1}
  alt={t("founder_img_alt")}
  className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2

    w-[110%]
    max-w-none

    object-contain

    md:w-[115%]
    sm:w-[110%]

    z-[2]
  "
/>
    </div>

    {/* TEXT CARD */}
    <div
      className="
        w-full
        max-w-[580px]

        rounded-[12px]
        p-[30px]

        shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]

        flex flex-col
        gap-[10px]

        max-lg:text-center
      "
    >
      {/* NAME */}
      <h3
        className="
          text-[28.5px]
          font-bold
          text-[#342419]
          font-['Devanagari MT']
          leading-[36px]
        "
      >
        {t("founder_name")}
      </h3>

      {/* ROLE */}
      <p
        className="
          text-[17.2px]
          text-[#F68523]
          italic
          font-marathi
          font-normal
          leading-[28px]
        "
      >
        {t("founder_role")}
      </p>

      {/* QUOTE */}
      <p
        className="
          text-[18px]
          italic
          text-[#5B5B5B]
          font-marathi
          font-normal
          mt-[16px]
          mb-[16px]
          leading-[27px]
        "
      >
        {t("founder_quote")}
      </p>

      {/* DESCRIPTION */}
      <p
        className="
          text-[16.3px]
          text-[#5B5B5B]
          leading-[29.25px]
          font-['Devanagari MT']
          font-normal
          whitespace-pre-line
        "
      >
        {t("founder_desc")}
      </p>
    </div>
  </div>
</section>

        {/* IMPACT */}
        <section
          className="
                 py-[80px] 
                 px-[260px] max-[1400px]:px-[120px] max-[1200px]:px-[60px]
                 bg-[rgba(246,133,35,0.04)]

                 max-xl:px-[160px]
                 max-lg:px-[100px]
                 max-md:px-[40px]
                 max-sm:px-[20px]"
        >
          <div className="max-w-[1400px] mx-auto">
            <h2
              className="text-[36px] font-bold text-[#E65100]
                         font-['Devanagari MT'] text-center
                         mb-[64px] leading-[48px]
                         max-[640px]:text-[26px]"
            >
              {t("impact_heading")}
            </h2>

            <div
              className="w-full
                   grid grid-cols-3 max-[1200px]:grid-cols-2 max-[640px]:grid-cols-1
                   gap-[32px]

                   justify-items-center"
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="
                       relative bg-[#FFF] rounded-[12px]
                       p-[24px]

                       w-[362.66px] max-w-full h-[343px]

                       max-[1024px]:w-full
                       max-[1024px]:max-w-[420px]

                       max-[640px]:w-full
                       max-[640px]:max-w-full
                       max-[640px]:h-auto

                       shadow-[0_4px_20px_-4px_rgba(246,133,35,0.25)]

                       flex flex-col"
                >
                  {/* Quote Icon */}

                  <div
                    className="
                            absolute top-[20px] left-[20px]
                            flex gap-[4px]"
                  >
                    {/* First quote */}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15 34"
                      className="w-[11.667px] h-[30px]"
                      fill="none"
                    >
                      <path
                        d="M5.00002 1.66699C4.11597 1.66699 3.26812 2.01818 2.643 2.6433C2.01788 3.26842 1.66669 4.11627 1.66669 5.00033V15.0003C1.66669 15.8844 2.01788 16.7322 2.643 17.3573C3.26812 17.9825 4.11597 18.3337 5.00002 18.3337C5.44205 18.3337 5.86597 18.5093 6.17853 18.8218C6.49109 19.1344 6.66669 19.5583 6.66669 20.0003V21.667C6.66669 22.551 6.3155 23.3989 5.69038 24.024C5.06526 24.6491 4.21741 25.0003 3.33335 25.0003C2.89133 25.0003 2.4674 25.1759 2.15484 25.4885C1.84228 25.801 1.66669 26.225 1.66669 26.667V30.0003C1.66669 30.4424 1.84228 30.8663 2.15484 31.1788C2.4674 31.4914 2.89133 31.667 3.33335 31.667C5.98552 31.667 8.52906 30.6134 10.4044 28.7381C12.2798 26.8627 13.3334 24.3192 13.3334 21.667V5.00033C13.3334 4.11627 12.9822 3.26842 12.357 2.6433C11.7319 2.01818 10.8841 1.66699 10 1.66699H5.00002Z"
                        stroke="rgba(246,133,35,0.40)"
                        strokeWidth="3.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Second quote */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15 34"
                      className="w-[11.667px] h-[30px]"
                      fill="none"
                    >
                      <path
                        d="M5.00002 1.66699C4.11597 1.66699 3.26812 2.01818 2.643 2.6433C2.01788 3.26842 1.66669 4.11627 1.66669 5.00033V15.0003C1.66669 15.8844 2.01788 16.7322 2.643 17.3573C3.26812 17.9825 4.11597 18.3337 5.00002 18.3337C5.44205 18.3337 5.86597 18.5093 6.17853 18.8218C6.49109 19.1344 6.66669 19.5583 6.66669 20.0003V21.667C6.66669 22.551 6.3155 23.3989 5.69038 24.024C5.06525 24.6491 4.21741 25.0003 3.33335 25.0003C2.89133 25.0003 2.4674 25.1759 2.15484 25.4885C1.84228 25.801 1.66669 26.225 1.66669 26.667V30.0003C1.66669 30.4424 1.84228 30.8663 2.15484 31.1788C2.4674 31.4914 2.89133 31.667 3.33335 31.667C5.98552 31.667 8.52906 30.6134 10.4044 28.7381C12.2798 26.8627 13.3334 24.3192 13.3334 21.667V5.00033C13.3334 4.11627 12.9822 3.26842 12.357 2.6433C11.7319 2.01818 10.8841 1.66699 10 1.66699H5.00002Z"
                        stroke="rgba(246,133,35,0.40)"
                        strokeWidth="3.333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Quote Text */}
                  <div
                    className="                
                            flex-1 flex items-center justify-center
                            text-center

                            max-[640px]:py-[20px]"
                  >
                    <p
                      className="
                              text-[#8F6E56]
                              font-['Devanagari MT']
                              leading-[26px] font-normal
                              text-[14.3px] 

                              max-[640px]:text-[14.3px]"
                    >
                      {t(`impact_card_${i}_quote`)}
                    </p>
                  </div>

                  {/* Author Section */}
                  <div                 
                    className="
                           mt-auto pt-[16px]
                           border-t border-[#E2DCCF]
                           text-left"
                  >
                    <h4                
                      className="
                               font-bold
                               font-['Devanagari MT']
                               text-[#342419]
                               text-[15.1px]
                               leading-[24px]
                               mb-[2px]"
                    >
                      {t(`impact_card_${i}_author`)}
                    </h4>

                    <span
                      className="
                              text-[12.9px]
                              font-['Devanagari MT']
                              text-[#8F6E56]
                              font-normal leading-[20px]"
                    >
                      {t(`impact_card_${i}_location`)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Transformation />
    </>
  );
}
