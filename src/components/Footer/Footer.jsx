import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

import instaIcon from "../../assets/insta.svg";
import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import phoneIcon from "../../assets/phone.svg";
import mailIcon from "../../assets/mail.svg";
import locationIcon from "../../assets/location.svg";
import footerLogo from "../../assets/Footer-logo.png";

export default function Footer() {
  const { t } = useLanguage();

  return (

      <footer
  className="w-full overflow-hidden"
  style={{
    background:
      "linear-gradient(103deg, rgba(238,114,43,0.67) 0%, rgba(255,173,102,0.67) 50%, rgba(232,186,48,0.67) 100%), #FFFF00"
  }}
>
  {/* TOP */}
  <div className="w-full flex flex-col justify-end items-start pt-[23px] gap-[32px] max-md:items-center">

    <div
      className="w-full max-w-[1440px] mx-auto
      flex justify-between items-start
      px-[100px] pt-[40px]
      gap-[80px]
      max-[1200px]:flex-wrap
      max-[1200px]:gap-[60px]
      max-[1200px]:px-[60px]
      max-md:flex-col
      max-md:gap-[40px]
      max-md:px-[24px]
      max-md:items-center"
    >

      {/* ABOUT */}
       
       <div className="flex flex-col items-start max-w-[317px] max-md:items-center max-md:text-center">

          <img
            src={footerLogo}
            alt="Footer Logo"
            className="w-[100px] h-[76px] mb-3 max-sm:w-[90px]"
          />

        <h3 className="w-[317px] max-md:w-full text-[24px] font-bold text-[#5B5B5B]
        font-['Devanagari MT'] leading-[28px]">
          {t("footer_title")}
        </h3>

        <p className="max-w-[210px] max-md:max-w-full text-[16px] text-[#5B5B5B] mb-[10px]
        font-marathi font-normal leading-[20px]">
          {t("footer_tagline")}
        </p>

        <p className="text-[14px] text-[#5B5B5B]
        max-w-[317px] max-md:max-w-full max-md:mx-auto font-marathi font-normal leading-[20px]">
          {t("footer_desc")}
        </p>
      </div>

      {/* LINKS */}
      <div className="flex flex-col items-start gap-[12px] w-[234px] max-md:w-full max-md:items-center max-md:text-center">

        <h4 className="text-[18px] font-bold text-[#5B5B5B]  font-['Devanagari MT'] leading-[28px]">
          {t("footer_links_title")}
        </h4>

        <div className="flex flex-col gap-[6px] items-start max-md:items-center">

          <Link
            to="/about"
            className="text-[14px] max-sm:text-[13px] font-marathi text-[#5B5B5B] leading-[20px] font-normal"
          >
            {t("footer_about")}
          </Link>

          <Link
            to="/activities"
            className="text-[14px] font-marathi text-[#5B5B5B] leading-[20px] font-normal"
          >
            {t("footer_activities")}
          </Link>

          <Link
            to="/gallery"
            className="text-[14px] font-marathi text-[#5B5B5B] leading-[20px] font-normal"
          >
            {t("footer_gallery")}
          </Link>

          <Link
            to="/get-involved"
            className="text-[14px] font-marathi text-[#5B5B5B] leading-[20px] font-normal"
          >
            {t("footer_involved")}
          </Link>

          <Link
            to="/admin"
            className="text-[14px] font-marathi text-[#5B5B5B] leading-[20px] font-normal"
          >
            {t("footer_admin")}
          </Link>

        </div>
      </div>

      {/* CONTACT */}
      <div className="flex-1 min-w-[200px] max-md:w-full max-md:text-center">

        <h4 className="text-[18px] font-bold text-[#5B5B5B] font-['Devanagari MT']
        mb-[14px] leading-[28px]">
          {t("footer_contact_title")}
        </h4>

        <p className="flex items-center gap-[10px] text-[15px]
        my-2 max-md:justify-center">
          <img src={phoneIcon} alt="phone" className="w-[18px] h-[18px]" />

          <a
            href={`tel:${t("contact_phone")}`}
            className="text-[#5B5B5B] font-normal font-marathi
            text-[14px] no-underline whitespace-pre-line leading-[20px]"
          >
            {t("contact_phone")}
          </a>
        </p>

        <p className="flex items-center gap-[10px] text-[15px]
        my-2 max-md:justify-center">
          <img src={mailIcon} alt="email" className="w-[18px] h-[18px]" />

          <a
            href={`mailto:${t("contact_email")}`}
            className="text-[#5B5B5B] font-normal font-marathi
            text-[14px] leading-[20px] no-underline"
          >
            {t("contact_email")}
          </a>
        </p>

        <p className="flex items-center gap-[10px] text-[14px]
        text-[#5B5B5B] my-2 max-md:justify-center font-normal leading-[20px] font-marathi">
          <img
            src={locationIcon}
            alt="location"
            className="w-[18px] h-[18px]"
          />
          {t("footer_location")}
        </p>
      </div>

      {/* SOCIAL */}
      <div className="flex-1 min-w-[160px] max-md:w-full max-md:text-center">

        <h4 className="text-[18px] font-['Devanagari MT'] font-bold
        text-[#5B5B5B] mb-[14px] leading-[28px]">
          {t("footer_follow")}
        </h4>

        <div className="flex gap-[14px] max-md:justify-center">
          {[facebookIcon, twitterIcon, instaIcon, linkedinIcon].map(
            (icon, index) => (
              <a
                key={index}
                href="#"
                className="w-[44px] h-[44px] flex items-center justify-center
                rounded-full bg-[rgba(91,91,91,0.10)]"
              >
                <img
                  src={icon}
                  alt="social"
                  className="w-[18px] h-[18px]"
                />
              </a>
            ),
          )}
        </div>
      </div>

    </div>
  </div>

  {/* BOTTOM */}
  <div className="w-full py-[12px] text-center">

    <div className="w-full max-w-[1440px] h-[1px] bg-[#5b5b5b24]
    mx-auto mb-[12px]" />

    <span className="text-[14px] font-normal font-marathi leading-[20px]
    text-[#5B5B5B]">
      {t("footer_copy")}
    </span>

  </div>
</footer>
  );
}
