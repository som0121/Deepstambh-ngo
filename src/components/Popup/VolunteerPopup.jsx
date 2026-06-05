import React, { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function VolunteerPopup({ onClose }) {
  const { t } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Volunteer form submitted:", formData);

    setShowToast(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
  <>
    {/* NOTIFICATION */}
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
        ✓ {t("volunteer_success")}
      </div>
    )}

    <div className="fixed inset-0 bg-black/30 flex items-center justify-center px-[20px] z-[9999]">

      {/* POPUP */}
      <div
        className="
        relative
        w-full
        max-w-[692px]

        max-h-[90vh]
        overflow-y-auto

        bg-white

        px-[60px]
        pt-[60px]

        max-md:px-[30px]
        max-sm:px-[20px]

        rounded-[12px]
        border border-[rgba(237,228,212,0.50)]
        shadow-[0_1px_2px_rgba(0,0,0,0.05)]

        flex flex-col

        animate-[fadeIn_0.3s_ease]
        "
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
          absolute
          top-[30px]
          right-[10px]

          max-sm:top-[15px]

          text-black
          text-[42px]
          max-sm:text-[28px]

          font-bold
          leading-none
          hover:opacity-70
          transition-opacity duration-200
          cursor-pointer
          "
        >
          ×
        </button>

        {/* TITLE */}
        <h2
          className="
          text-[#E65100]
          text-[36px]
          max-md:text-[28px]
          max-sm:text-[24px]

          font-bold
          text-center
          font-['Devanagari MT']
          leading-[40px]
          "
        >
          {t("volunteer_popup_title")}
        </h2>

        {/* SUBTITLE */}
        <p
          className="
          text-[#5B5B5B]
          text-[20px]
          max-md:text-[16px]

          text-center
          mt-[8px]
          mb-[33px]

          font-marathi
          font-normal
          "
        >
          {t("volunteer_popup_subtitle")}
        </p>

        {/* INNER FORM CARD */}
        <div
          className="
          border border-[#E9E7E2]
          rounded-[12px]

          h-auto
          min-h-[556px]

          px-[33px]
          pt-[49px]
          pb-[33px]

          mb-[40px]

          max-md:px-[20px]
          max-md:pt-[30px]
          max-md:pb-[20px]

          bg-[#FFF]
          shadow-[0_1px_2px_rgba(0,0,0,0.05)]
          "
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">

            {/* NAME */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] text-[#5B5B5B] font-marathi">
                {t("volunteer_form_name")}
                <span className="text-[#E65100]">*</span>
              </label>

              <input
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t("volunteer_placeholder_name")}
                className="w-full bg-[#F6F7FB] border border-[#EEECE8]
                font-marathi text-[12px] text-[#5B5B5B]
                placeholder:text-[#A7A7A7]
                h-[40px] px-[14px] rounded-[10px] outline-none"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] text-[#5B5B5B] font-marathi">
                {t("volunteer_form_email")}
                <span className="text-[#E65100]">*</span>
              </label>

              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t("volunteer_placeholder_email")}
                className="w-full bg-[#F6F7FB] border border-[#EEECE8]
                font-marathi text-[12px] text-[#5B5B5B]
                placeholder:text-[#A7A7A7]
                h-[40px] px-[14px] rounded-[10px] outline-none"
              />
            </div>

            {/* PHONE */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] text-[#5B5B5B] font-marathi">
                {t("volunteer_form_phone")}
                <span className="text-[#E65100]">*</span>
              </label>

              <input
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("volunteer_placeholder_phone")}
                className="w-full bg-[#F6F7FB] border border-[#EEECE8]
                font-marathi text-[12px] text-[#5B5B5B]
                placeholder:text-[#A7A7A7]
                h-[40px] px-[14px] rounded-[10px] outline-none"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] text-[#5B5B5B] font-marathi">
                {t("volunteer_form_motivation")}
                <span className="text-[#E65100]">*</span>
              </label>

              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={t("volunteer_placeholder_motivation")}
                className="w-full bg-[#F6F7FB] border border-[#EEECE8]
                font-marathi text-[12px] text-[#5B5B5B]
                placeholder:text-[#A7A7A7]
                h-[118px] px-[10px] py-[8px]
                rounded-[10px] outline-none resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="
              mt-[10px]
              w-full
              h-[48px]
              bg-[#018F4D]
              text-white
              rounded-[100px]
              font-marathi
              text-[18px]
              shadow-[0_10px_40px_-10px_rgba(1,143,77,0.31)]
              flex items-center justify-center
              relative overflow-hidden
              transition-all duration-300
              hover:bg-[#0C7A3D]
              group
              "
            >
              <span className="transition-all duration-300 group-hover:-translate-x-[8px]">
                {t("volunteer_submit")}
              </span>

              <span
                className="
                absolute right-[20px]
                opacity-0 translate-x-[-10px]
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300
                "
              >
                →
              </span>
            </button>

          </form>
        </div>
      </div>
    </div>
  </>
);

}
