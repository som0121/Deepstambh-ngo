import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import heroBG from "../../../../assets/hero-bg.png";
import heroEllipse from "../../../../assets/hero-gradient.png";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="w-full flex justify-center overflow-x-hidden">
      
    <section
      className="
      relative
      w-[1780px]
      min-h-[900px]
      lg:h-[1188px]
      bg-[#FCFBF8]
      md:min-h-[900px]
      lg:min-h-[100vh]
      overflow-hidden"
    >
      {/* Ellipse*/}
      <div
       className="
                 absolute
                 w-[934px] h-[934px]
                 max-xl:w-[820px] max-xl:h-[820px]
                 max-lg:w-[700px] max-lg:h-[700px]
                 max-md:w-[520px] max-md:h-[520px]
                 max-sm:w-[420px] max-sm:h-[420px]
                 max-[420px]:w-[360px] max-[420px]:h-[360px]
                 left-1/2 -translate-x-[45%]
                 top-[20px]
                 max-lg:top-[90px]
                 max-md:top-[60px]
                 pointer-events-none
                 z-[1]"
            >
        <img
          src={heroEllipse}
          alt="ellipse"
          className="w-full h-full object-contain opacity-60"
        />
      </div>

      {/* Skyline image */}
      
        <img
         src={heroBG}
         alt="hero skyline"
         className="
         
         absolute
         
          top-[38%]
          sm:top-[38%] 
          md:top-[52%]
          lg:top-[30%]

       
         h-[1180px]
         left-1/2 -translate-x-[48%]

         max-lg:h-auto
         max-lg:-translate-x-[48%]

         max-md:w-[105%]
         max-md:-translate-x-[48%]

         w-[140%]
         max-sm:w-[105%]
         md:w-[105%]
         lg:w-[105%]
         xl:w-[105%]

         max-w-none
         object-contain
         object-[center_60%]
         z-[2]"
        />

      {/* Text content */}
      <div
        
        className="
                 relative z-[3] flex flex-col items-center
                 justify-center text-center
                 pt-[260px] ml-[90px]
                 max-lg:pt-[220px]
                 max-md:pt-[180px]
                 max-sm:pt-[140px]
                 px-[20px]">
        <p
          className="font-yatra text-[18px] text-[#80664D] 
        font-normal leading-[28.8px] tracking-[0.054px]
         max-lg:text-[20px]
              max-md:text-[16px]
              max-sm:text-[12px]"
        >
          {t("hero_kicker")}
        </p>

        <h1
         className="
              text-[64px]
              max-lg:text-[48px]
              max-md:text-[36px]
              max-sm:text-[22px]
              font-bold text-[#F15A23]
              font-['Devanagari MT']
              leading-[102.4px] tracking-[0.192px]
              max-md:leading-[56px]"
        >
          {t("hero_title")}
        </h1>

        <p
            className="
            text-[22px]
            max-lg:text-[18px]
            max-md:text-[12px]
            max-sm:text-[9px]
            text-[#5B5B5B]
            font-marathi
            leading-[38.4px] tracking-[0.072px]
            font-normal
            max-md:leading-[28px]
            max-w-[780px]
            max-md:max-w-[600px]
            max-sm:max-w-[90%]
            mx-auto"
          >          
          {t("hero_sub")}
        </p>

        {/*Button*/}

        <div className="mt-[22px] flex gap-[18px]">
          <Link
            to="/activities"
            className="group h-[48px] px-[32px] max-sm:px-[14px] rounded-[100px] bg-[#018F4D]
                     text-[#FCFBF8] flex items-center justify-center font-marathi
                     text-[18px] max-sm:text-[16px] font-normal leading-[30.6px] tracking-[0.054px]
                     hover:bg-[#0C7A3D] relative overflow-hidden"
          >
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-[-6px]">
              {t("hero_btn_activities")}
            </span>

            <span
              className="
                      absolute right-[16px] text-[11px]
                      opacity-0
                      transition-all duration-300 ease-out
                      group-hover:opacity-100"
            >
              →
            </span>
          </Link>

          <Link
            to="/get-involved"
            className="group h-[48px] px-[32px] rounded-[100px]
                       bg-[#F3F5F0] text-[#80664D]
                       flex items-center justify-center font-marathi
                       relative overflow-hidden"
          >
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-[-8px]">
              {t("hero_btn_involved")}
            </span>

            <span
              className="
               absolute right-[16px] text-[12px] font-bold
               opacity-0
               transition-all duration-300 ease-out
               group-hover:opacity-100"
            >
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom gradient */}       
      <div
        className="absolute bottom-0 left-0 w-full h-[388px] z-[4] overflow-visible
        lg:h-[280px] md:h-[100px] sm:h-[340px]"

        style={{
          background:
            "linear-gradient(0deg, #FFF 83.7%, rgba(255,255,255,0) 100%)",
        }}
      />
    </section>
    </div>
  );
}
