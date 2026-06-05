import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function Transformation() {
  const { t } = useLanguage();

  return (
    <section
      className="w-full bg-[#813131] py-[80px]
    flex justify-center items-center max-md:py-[60px]"
    >
      <div className="text-center max-w-[1920px]">
        <h2
          className="text-[36px] font-bold text-[#F15A23] mb-5 
                      font-['Devanagari MT'] font-bold leading-[57.6px] 
                       tracking-[0.108px] text-[36px]
                       max-md:text-[26px] max-md:leading-[1.3] 
                       max-sm:text-[22px]"
        >
          {t("transformation_title")}
        </h2>

        {/* Subtext */}
  <p
    className="w-[1104px] mx-auto
    text-center
    text-[#FCFBF8]
    font-marathi
    font-normal
    text-[20px]
    leading-[34px]
    tracking-[0.06px]
    mb-[40px]

    max-lg:w-[90%]
    max-md:text-[16px]
    max-md:leading-[28px]
    max-sm:text-[15px]"
  >
    {t("transformation_desc")}
  </p>

        <div
          className="flex justify-center items-center gap-[26px] flex-wrap
                        max-md:flex-col max-md:gap-[15px]"
        >
          <Link
            to="/donate"
            className="bg-[#018F4D] text-[#FCFBF8] w-[198px] h-[56px]
                       px-10 py-[14px] rounded-[29px] font-marathi 

                       text-[18px] font-normal no-underline 

                       leading-[28.8px] tracking-[0.054px]

                       transition-all duration-200 ease-in-out

                       shadow-[0_10px_40px_-10px_rgba(1,143,77,0.31)]

                       hover:bg-[#0C7A3D]
                       max-md:w-full max-md:max-w-[320px]"
          >
            {t("trans_donate")} 
          </Link>

          <Link
            to="/get-involved"
            className="bg-[#DEDFDD] text-[#80664D] px-10 py-[14px] 
                       rounded-[30px] font-marathi 
                       text-[18px] font-medium no-underline
                       transition-all duration-200 ease-in-out
                       max-md:w-full max-md:max-w-[320px]"
          >
            {t("trans_volunteer")}
          </Link>
        </div>
      </div>
    </section>
  );
}
