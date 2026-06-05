import React, { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function ContactPopup({ onClose }) {
  const { t } = useContext(LanguageContext);

  
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

    console.log("Contact form submitted:", formData);

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
    <>
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

      <div
        className="
        relative

        w-full
        max-w-[692px]
        max-h-[90vh]
        overflow-y-auto
        p-[60px]
      bg-[#FFF]
        max-md:p-[30px]
        max-sm:p-[20px]
        
        rounded-[12px]
        border border-[rgba(237,228,212,0.50)]
        shadow-[0_1px_2px_rgba(0,0,0,0.05)]
        flex flex-col
        items-stretch
        z-[100]
        "
      >
        <button
          onClick={onClose}
          className="
          absolute
          top-[20px]
          right-[20px]
          text-black
          text-[38px]
          font-bold
          leading-none
          hover:opacity-70
          transition-opacity duration-200
          cursor-pointer
          z-[200]
          "
        >
          ×
        </button>

        {/* TITLE */}
        <h2
          className="
          text-[#E65100]
          text-[36px]
          font-bold
          font-['Devanagari MT']
          leading-[40px]
          text-center
          "
        >
          {t("contact_popup_title")}
        </h2>

        {/* SUBTITLE */}
        <p
          className="
          text-[#5B5B5B]
          font-marathi
          font-normal
          text-[20px]
          text-center
          mt-[8px]
          mb-[33px]
          "
        >
          {t("contact_popup_subtitle")}
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[16px]"
        >
          {/* NAME */}
          <div className="flex flex-col gap-[6px]">
            <label
              className="text-[14px] text-[#5B5B5B]
              font-['Devanagari MT'] font-normal leading-[14px]"
            >
              {t("contact_label_name")}
              <span className="text-[#E65100]">*</span>
            </label>

            <input
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact_ph_name")}

              className="
               w-full  bg-[#F6F7FB] border border-[#EEECE8]
             font-marathi text-[12px] text-[#5B5B5B] placeholder:text-[#A7A7A7]
             h-[40px] px-[14px] rounded-[10px] outline-none focus:outline-none             
              "
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-[6px]">
            <label
              className="text-[14px] text-[#5B5B5B] font-['Devanagari MT']
              font-normal leading-[14px]"
            >
              {t("contact_label_email")}
              <span className="text-[#E65100]">*</span>
            </label>

            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact_ph_email")}
              className="
               w-full  bg-[#F6F7FB] border border-[#EEECE8]
             font-marathi text-[12px] text-[#5B5B5B] placeholder:text-[#A7A7A7]
             h-[40px] px-[14px] rounded-[10px] outline-none focus:outline-none   
              
              "
            />
          </div>

          {/* SUBJECT */}
          <div className="flex flex-col gap-[6px]">
            <label
              className="text-[14px] text-[#5B5B5B] font-['Devanagari MT']
              font-normal leading-[14px]"
            >
              {t("contact_label_subject")}
              <span className="text-[#E65100]">*</span>
            </label>

            <input
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder={t("contact_ph_subject")}
              className="
               w-full  bg-[#F6F7FB] border border-[#EEECE8]
             font-marathi text-[12px] text-[#5B5B5B] placeholder:text-[#A7A7A7]
             h-[40px] px-[14px] rounded-[10px] outline-none focus:outline-none   
              "
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-[6px]">
            <label
              className="text-[14px] text-[#5B5B5B] font-['Devanagari MT']
              leading-[14px] font-normal"
            >
              {t("contact_label_message")}
              <span className="text-[#E65100]">*</span>
            </label>

            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact_ph_message")}
              className="
               w-full  bg-[#F6F7FB] border border-[#EEECE8]
             font-marathi text-[12px] text-[#5B5B5B] placeholder:text-[#A7A7A7]
             h-[118px] px-[14px] py-[10px] rounded-[10px] outline-none focus:outline-none resize-none
              "
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
            w-full max-w-[598px]
            h-[48px] mt-[20px]
            bg-[#018F4D]
            text-[#FCFBF8]
            rounded-[100px]
            text-[18px]
            font-marathi
            leading-[30.6px]
            tracking-[0.054px]
            shadow-[0_10px_40px_-10px_rgba(1,143,77,0.31)]
            transition-all duration-300
            hover:bg-[#0C7A3D]
            "
          >
            {t("contact_submit")}
          </button>
        </form>
      </div>
    </>
  );
}
