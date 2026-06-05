import React, { useContext, useState } from "react";
import mapImg from "../../assets/map.png";

import locationIcon from "../../assets/loc.svg";
import phoneIcon from "../../assets/phn.svg";
import facebookIcon from "../../assets/facebook.svg";
import instaIcon from "../../assets/insta.svg";
import taskIcon from "../../assets/task.svg";

import { LanguageContext } from "../../context/LanguageContext";

export default function ContactPage() {
  const { t } = useContext(LanguageContext);

  const [showPopup, setShowPopup] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowToast(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  return (
    <div className="bg-[#FFF]">
      {/* TOAST NOTIFICATION */}
      {showToast && (
        <div
          className="
        fixed
        top-[20px]
        right-[20px]
        bg-white
        border border-[#E9E7E2]
        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
        rounded-[8px]
        px-[20px]
        py-[12px]
        text-green-600
        font-medium
        text-[15px]
        z-[999999]
        animate-[fadeIn_0.3s_ease]
        "
        >
          ✓ {t("contact_success")}
        </div>
      )}

      {/* HERO */}

      <header
        className="text-center pt-[80px] pb-[50px] px-4
        bg-[linear-gradient(96deg,#FFF7F0_0%,#FFF_109.16%)]
        h-auto lg:h-[300px]"
      >
        <h1
          className="
          text-[#E65100] text-[48px] font-['Devanagari MT'] 
          font-bold mb-3 leading-[76.8px] tracking-[0.144px]
          max-[768px]:text-[36px]
          max-[480px]:text-[28px]
          "
        >
          {t("contact_hero_title")}
        </h1>

        <p
          className="
          text-[#5B5B5B] max-w-[1205px] mx-auto text-[24px] 
          leading-[38.4px] tracking-[0.072px] font-marathi font-normal
          px-2
          max-[768px]:text-[18px]
          max-[480px]:text-[16px]
          "
        >
          {t("contact_hero_sub")}
        </p>
      </header>

      {/* INFO + FORM */}

      <section
        className="

         pt-[40px] pb-[80px]

         px-[20px]
         md:px-[60px]
         lg:px-[100px]
       
        "
      >
         <div className="max-w-[1440px] mx-auto">

         <div className="flex flex-col lg:flex-row justify-center items-stretch 
         gap-[100px] max-lg:gap-[60px] max-md:gap-[40px]">

            {/* INFO CARD */}

            <div
              className="
                w-full max-w-[535px]
                
                h-[552px]
                max-lg:h-auto

                max-lg:max-w-[500px]
                max-md:max-w-full

                bg-[#FFF] rounded-[12px]
                border border-[rgba(237,228,212,0.50)]
                shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]

                px-[32px] py-[49px]

                flex flex-col
              "
            >
              <div className="flex flex-col gap-[16px]">

                <h3 className="text-[19.5px] font-bold mb-[12px] ml-[2px]">
                  {t("contact_info_title")}
                </h3>

                <div className="flex gap-[12px] mb-[18px]">
                  <img
                    src={locationIcon}
                    className="w-[20px] h-[24px] mt-[2px]"
                  />

                  <p
                    className="
                    text-[15.3px] text-[#8F6E56] 
                    leading-[24px] font-['Devanagari MT'] font-medium
                    "
                  >
                    {t("contact_address")}
                  </p>
                </div>

                <div className="flex gap-[12px] mb-[18px]">
                  <img src={phoneIcon} className="w-[18px] h-[18px] mt-[2px]" />

                  <p
                    className="
                    text-[14.6px] text-[#8F6E56] 
                    font-medium leading-[24px] font-['Devanagari MT']
                    "
                  >
                    {t("contact_phone")}
                  </p>
                </div>

                <div className="flex gap-[12px] mb-[12px] ">
                  <img
                    src={facebookIcon}
                    className="w-[18px] h-[18px] mt-[2px]"
                  />

                  <a
                    href="#"
                    className="text-[#014A87] font-['Devanagari MT'] text-[15.3px]
                     underline break-all"
                  >
                    https://www.facebook.com/parbhaniDeepastambh/
                  </a>
                </div>

                <div className="flex gap-[12px]">
                  <img src={instaIcon} className="w-[18px] h-[18px] mt-[2px]" />

                  <a
                    href="#"
                    className="text-[#014A87] text-[15.3px] underline break-all"
                  >
                    https://www.instagram.com/Deepastambh foundation/
                  </a>
                </div>
              </div>

              <div
                className=" w-full max-w-[472px] h-[152px]
                 flex flex-col items-start gap-[8px] 
                 border-l-[4px] border-[#F68523] 
                 bg-[rgba(253,184,125,0.04)]
                 pt-[24px] pr-[24px] pb-[24px] pl-[28px]
                 rounded-r-[12px] mt-auto
                "
              >
                <p className="font-bold text-[#342419] text-[15.6px]">
                  {t("working_title")}
                </p>

                <p
                  className="
                  text-[14.9px] text-[#8F6E56]
                  leading-[24px] font-['Devanagari MT']
                  "
                >
                  {t("working_desc")}
                </p>
              </div>
            </div>

            {/* FORM CARD */}

            <div
              className="
              
                w-full max-w-[582px]

                 h-[552px] 
                 max-lg:h-auto

                 max-lg:max-w-[520px]
                 max-md:max-w-full

                 bg-[#FFF] rounded-[12px]
                 border border-[rgba(237,228,212,0.50)]
                 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]
                 px-[33px] pt-[49px] pb-[33px]
              "
            >
              <form
                onSubmit={handleSubmit}
                className="
                flex flex-col gap-[16px]
                w-full max-w-[516px]
                mx-auto
                "
              >
                {/* NAME */}

                <div>
                  <label className="text-[14px] font-medium font-['Devanagari MT']
                   text-[#5B5B5B]">
                    {t("contact_form_name")}
                    <span className="text-[#E65100]">*</span>
                  </label>

                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact_ph_name")}

                    className=" mt-[8px] w-full max-w-[516px] h-[40px]

                      px-[14px] border border-[#EEECE8]  bg-[#F6F7FB]

                      text-[12px] font-marathi text-[#5B5B5B] 
                      placeholder:text-[#A7A7A7] focus:outline-none 
                    "

                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label className="text-[14px] font-medium text-[#5B5B5B] 
                  font-['Devanagari MT']">
                    {t("contact_form_email")}
                    <span className="text-[#E65100]">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact_ph_email")}
                    className="
                    mt-[8px]

                     w-full max-w-[516px]
                     h-[40px]

                     px-[14px]
                     border border-[#EEECE8]
                     bg-[#F6F7FB]

                     text-[12px]
                     font-marathi
                     text-[#5B5B5B]
                     
                     placeholder:text-[#A7A7A7]

                     focus:outline-none
                     
                    "
                  />
                </div>

                {/* SUBJECT */}

                <div>
                  <label className="text-[14px] font-medium text-[#5B5B5B]
                   font-['Devanagari MT']">
                    {t("contact_form_subject")}
                    <span className="text-[#E65100]">*</span>
                  </label>

                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t("contact_ph_subject")}
                    className="
                     mt-[8px]

                     w-full max-w-[516px]
                     h-[40px]

                     px-[14px]
                     border border-[#EEECE8]
                     bg-[#F6F7FB]

                     text-[12px]
                     font-marathi
                     text-[#5B5B5B]
                     
                     placeholder:text-[#A7A7A7]

                     focus:outline-none
                    "
                  />
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="text-[14px] font-medium text-[#5B5B5B] 
                  font-['Devanagari MT']">
                    {t("contact_form_message")}
                    <span className="text-[#E65100]">*</span>
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact_ph_message")}
                    className="
                      mt-[8px]

                     w-full max-w-[516px]
                     h-[118px]

                     px-[14px] py-[12px]
                     border border-[#EEECE8]
                     bg-[#F6F7FB]

                     text-[12px]
                     font-marathi
                     text-[#5B5B5B]
                     
                     placeholder:text-[#A7A7A7]

                     focus:outline-none resize-none
                    "
                  />
                </div>

                {/* send BUTTON */}

                <button
                  type="submit"
                  className="
                  mb-[10px]

                  w-full max-w-[508px] h-[48px]

                  max-[1024px]:w-full

                  bg-[#018F4D] font-marathi
                  shadow-[0_10px_40px_-10px_rgba(1,143,77,0.31)]
                  text-[#FCFBF8] py-[12px] rounded-[30px]
                  text-[18px] font-medium hover:bg-[#0C7A3D]
                  "
                >
                  {t("contact_submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}

      <section className="pb-[100px] px-4 md:px-[60px] lg:px-[100px]">
        <div className="max-w-[1440px] mx-auto rounded-[12px] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.08)]">
          <iframe
            title="Deepastambh Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24196.627986!2d76.787299!3d19.263948!2m3!1f0!2f0!3f14.16!2m3!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin"
            width="100%"
            height="527"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </section>

      {/* POPUP */}

      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          {/*Notification*/}

          <div
            className="
                  bg-white
                  px-[40px] py-[30px]
                  rounded-[12px]
                  shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                  text-center

                w-[400px]
                max-[480px]:w-[90%]"
          >
            {/*Message */}
            <p
              className="
                   text-[#018F4D]
                   font-marathi
                   text-[20px]
                   font-semibold
                   mb-[20px]"
            >
              {t("contact_popup_message")}
            </p>

            {/*Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="
                   bg-[#018F4D]
                   text-white
                   px-[30px]
                   py-[10px]
                   rounded-full
                   font-marathi
                   text-[16px]
                   hover:bg-[#017a42]
                   transition-all"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
