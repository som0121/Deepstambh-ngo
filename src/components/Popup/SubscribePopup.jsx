import React, { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function SubscribePopup({ onClose }) {
  const { t } = useContext(LanguageContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Subscribe:", form);

    setShowToast(true);

    setForm({
      name: "",
      email: "",
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
          ✓ {t("subscribe_success") || "Subscribed successfully!"}
        </div>
      )}

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
        {/* OUTER CONTAINER */}
        <div
          className="
          relative
          w-full
          max-w-[692px]
          bg-white
          p-[30px] md:p-[60px]
          rounded-[9px]
          border border-[rgba(237,228,212,0.50)]
          shadow-[0_1px_2px_rgba(0,0,0,0.05)]
          flex flex-col items-center
          "
        >
          <button
            onClick={onClose}
            className="
            absolute
            top-[20px]
            right-[20px]
            text-black
            text-[32px]
            font-bold
            leading-none
            hover:opacity-70
            transition-opacity duration-200
            cursor-pointer"
          >
            ×
          </button>

          {/* TITLE */}
          <h2
            className="
            text-[#E65100]
            text-[36px] md:text-[36px]
            font-bold
            font-['Devanagari MT']
            leading-[40px]
            text-center
            "
          >
            {t("subscribe_title")}
          </h2>

          {/* SUBTITLE */}
          <p
            className="
            text-[#5B5B5B]
            text-[20px] md:text-[20px]
            font-marathi
            font-normal
            text-center
            mt-[8px]
            mb-[33px]
            "
          >
            {t("subscribe_sub")}
          </p>

          {/* INNER FORM CARD */}
          <div
            className="
            w-full
            rounded-[12px]
            border border-[#E9E7E2]
            shadow-[0_1px_2px_rgba(0,0,0,0.05)]
            bg-white
            p-[20px] md:p-[33px]
            "
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
              {/* FULL NAME */}
              <div className="flex flex-col gap-[6px]">
                <label
                  className="
                  text-[14px]
                  text-[#5B5B5B]
                  font-normal
                  font-['Devanagari MT']
                  "
                >
                  {t("subscribe_form_name")}
                  <span className="text-[#E65100]">*</span>
                </label>

                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("subscribe_placeholder_name")}
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
                  className="
                  text-[14px]
                  text-[#5B5B5B]
                  font-normal
                  font-['Devanagari MT']
                  "
                >
                  {t("subscribe_form_email")}
                  <span className="text-[#E65100]">*</span>
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("subscribe_placeholder_email")}
                  
                  className="
                   w-full  bg-[#F6F7FB] border border-[#EEECE8]
             font-marathi text-[12px] text-[#5B5B5B] placeholder:text-[#A7A7A7]
             h-[40px] px-[14px] rounded-[10px] outline-none focus:outline-none  
                  "
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                mt-[10px]
                w-full
                h-[48px]
                bg-[#018F4D]
                text-[#FCFBF8]
                rounded-[100px]
                font-marathi
                text-[18px]
                font-normal
                leading-[30.6px]
                tracking-[0.054px]
                shadow-[0_10px_40px_-10px_rgba(1,143,77,0.31)]
                relative
                overflow-hidden
                flex items-center justify-center
                transition-all duration-300
                hover:bg-[#0C7A3D]
                group
                "
              >
                <span className="transition-all duration-300 group-hover:-translate-x-[8px]">
                  {t("subscribe_button")}
                </span>

                <span
                  className="
                  absolute
                  right-[20px]
                  opacity-0
                  translate-x-[-10px]
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-300
                  text-[18px]
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
