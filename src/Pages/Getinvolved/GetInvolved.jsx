import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import taskIcon from "../../assets/task.svg";

export default function GetInvolved() {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [activeCard, setActiveCard] = useState("volunteer");
  const [showPopup, setShowPopup] = useState(false);

  const [popupStage, setPopupStage] = useState("processing");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    partnershipType: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setPopupStage("processing");

    setTimeout(() => {
      setPopupStage("success");
    }, 1200);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      partnershipType: "",
      website: "",
    });
  };

  return (
    <div className="w-full bg-[#FFF]">
      {/* HERO */}

      <section
        className="w-full h-[350px] py-[80px] flex items-center 
      text-center bg-[linear-gradient(96deg,#FFF7F0_0%,#FFF_109.16%)]"
      >
        <div className="w-full">
          <h1
            className="self-stretch text-[#E65100] text-[48px] font-bold 
          font-['Devanagari MT'] leading-[76.8px] tracking-[0.144px]"
          >
            {t("getinvolved_hero_title")}
          </h1>

          <p
            className="max-w-[1205px] mx-auto text-[#5B5B5B]
           text-[24px] font-marathi font-normal leading-[38.4px] tracking-[0.072px] mt-[16px]"
          >
            {t("getinvolved_hero_sub")}
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-[80px] px-[100px] gap-[34px] mt-[82px]">
        <h2
          className="text-[36px] text-[#E65100] text-center 
        font-bold font-['Devanagari MT'] leading-[40px] tracking-[0.108px]"
        >
          {t("getinvolved_section_title")}
        </h2>

        <p
          className="max-w-[1000px] mx-auto text-center text-[#5B5B5B] 
        text-[20px] leading-[32px] font-marathi font-normal
         mt-[16px] tracking-[0.06px]"
        >
          {t("mission_support_subtitle")}
        </p>

        <div
          className="flex gap-[24px] justify-center flex-wrap mt-[30px]"
        >
          {/* DONATE */}
          <div
            onClick={() => navigate("/donate")}
            className=" cursor-pointer w-[314px] h-[258px] bg-white
             rounded-[16px] py-[50px] px-[14px] text-center border border-[#E9E7E2]
              shadow-sm"
          >
            <h3
              className="flex flex-col justify-center items-center text-[#E65100] font-bold text-[20px] 
            font-['Devanagari MT'] leading-[28px] tracking-[0.06px]"
            >
              {t("getinvolved_card_1")}
            </h3>

            <p className=" text-[#5B5B5B] mt-[8px] font-marathi text-[16px] font-normal">
              {t("getinvolved_card_1_desc")}
            </p>
          </div>

          {/* VOLUNTEER */}
          <div
            onClick={() => setActiveCard("volunteer")}

            className={`w-[326px] h-[265px] 
              shadow-[0_1px_12px_0_rgba(0,0,0,0.25)]
              rounded-[16px] py-[50px] px-[14px] text-center border transition-all ${

                activeCard === "volunteer"
                  ? "shadow-xl scale-[1.03]"
                  : "border-[#E9E7E2] shadow-sm"
              }`}
          >
            <h3
              className="flex justify-center items-center  text-[#E65100] font-bold text-[20px] 
            font-['Devanagari MT']"
            >
              {t("getinvolved_card_2")}
            </h3>

            <p className="w-[276px] text-[#5B5B5B] mt-[8px] font-marathi text-[16px] font-normal">
              {t("getinvolved_card_2_desc")}
            </p>
          </div>

          {/* PARTNER */}
          <div
            onClick={() => setActiveCard("partnership")}
            className={`w-[314px] h-[256px]
               rounded-[16px] pt-[33px] pr-[14px] pb-[40px] pl-[14px] text-center border transition-all ${
                 activeCard === "partnership"
                   ? "shadow-xl scale-[1.03]"
                   : "border-[#E9E7E2] shadow-sm"
               }`}
          >
            <h3
              className="flex flex-col justify-center items-center text-[#E65100] font-bold text-[20px]
             font-['Devanagari MT'] mt-[16px]"
            >
              {t("getinvolved_card_3")}
            </h3>

            <p className="text-[#5B5B5B] mt-[11px] font-marathi">
              {t("getinvolved_card_3_desc")}
            </p>
          </div>
        </div>
      </section>

      {(activeCard === "volunteer" || activeCard === "partnership") && (
        <>
          {/* FORM TITLE + SUBTITLE */}
          <div className="text-center mt-[40px] mb-[30px]">
            <h2
              className="text-[36px] text-[#E65100] font-bold
                         font-['Devanagari MT'] leading-[40px]"
            >
              {activeCard === "volunteer"
                ? t("volunteer_form_title")
                : t("partner_form_title")}
            </h2>

            <p
              className="text-[#5B5B5B] text-[16px] leading-[24px]
            font-marathi font-normal mt-[32px]"
            >
              {activeCard === "volunteer"
                ? t("volunteer_form_subtitle")
                : t("partner_form_subtitle")}
            </p>
          </div>

          {/* SHOW FORM */}
          {!showPopup && (
            <FormSection
              t={t}
              type={activeCard}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}

          {/* SHOW SUCCESS*/}
          {showPopup && (
            <section className="pb-[120px] flex justify-center px-[24px]">
              <div
                className={`bg-[#FFF] rounded-[12px] border border-[#E9E7E2]
      shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center
      ${
        activeCard === "partnership"
          ? "w-[672px] px-[33px] pt-[49px] pb-[33px]"
          : "w-[672px] px-[33px] py-[49px]"
      }`}
              >
                <div className="w-[144px] h-[144px] mb-[20px] flex items-center justify-center">
                  {popupStage === "processing" && (
                    <img
                      src={taskIcon}
                      className="w-[144px] h-[144px] animate-spin"
                      alt="processing"
                    />
                  )}

                  {popupStage === "success" && (
                    <svg
                      className="w-[144px] h-[144px] overflow-visible"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <circle
                        cx="30"
                        cy="30"
                        r="26"
                        stroke="#018F4D"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray="163"
                        strokeDashoffset="163"
                        className="animate-[drawCircle_0.8s_ease_forwards]"
                      />

                      <path
                        stroke="#018F4D"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        d="M17 31 L26 40 L44 21"
                        strokeDasharray="60"
                        strokeDashoffset="60"
                        className="animate-[drawTick_0.4s_0.8s_ease_forwards]"
                      />
                    </svg>
                  )}
                </div>

                <p className="text-[#5B5B5B] text-[24px] font-marathi uppercase tracking-[0.072px]">
                  {popupStage === "processing"
                    ? t("popup_processing")
                    : activeCard === "volunteer"
                      ? t("popup_volunteer_message")
                      : t("popup_partner_message")}
                </p>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

/* FORM*/

function FormSection({ type, formData, handleChange, handleSubmit, t }) {
  const isPartner = type === "partnership";

  return (
    <section className="flex justify-center px-[20px] pt-[20px] pb-[80px]">
      <form
        onSubmit={handleSubmit}
        className={`bg-[#FFF] rounded-[12px] border border-[#E9E7E2]
        shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex flex-col gap-[24px]

        ${
          isPartner
             ? "w-[672px] max-md:w-full min-h-[776px] pt-[49px] pr-[33px] pl-[33px] pb-[33px] mt-[-26px]"
             : "w-[672px] max-md:w-full min-h-[584px] pt-[49px] pr-[33px] pl-[33px] pb-[33px] mb-[160px] mt-[-26px]"
        }`}
      >
        <Input 
          label= {
            isPartner ? t("partner_form_name_org") : t("volunteer_form_name")
          }
          placeholder={
            isPartner
              ? t("partner_placeholder_name_org")
              : t("volunteer_placeholder_name")
          }
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          label={
            isPartner ? t("partner_form_email") : t("volunteer_form_email")
          }
          placeholder={
            isPartner
              ? t("partner_placeholder_email")
              : t("volunteer_placeholder_email")
          }
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label={
            isPartner ? t("partner_form_phone") : t("volunteer_form_phone")
          }
          placeholder={
            isPartner
              ? t("partner_placeholder_phone")
              : t("volunteer_placeholder_phone")
          }
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        {isPartner && (
          <>
            <div className="flex flex-col gap-[8px]">
              <label className="text-[#5B5B5B] text-[14px] font-medium font-['Devanagari MT'] px-[4px]">
                {t("form_partnership_type")}
                <span className="text-[#E65100]"> *</span>
              </label>

              <select
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleChange}
                required
                className="w-full max-w-[606px] h-[48px] text-[#5B5B5B]/40 bg-[#F6F7FB] border border-[#EEECE8]
                px-[16px] py-[14px] rounded-[10px] font-marathi"
              >
                <option value="">
                  {t("partner_placeholder_partnership_type")}
                </option>
                <option value="CSR">{t("partnership_option_csr")}</option>
                <option value="Institutional">
                  {t("partnership_option_institutional")}
                </option>
                <option value="Individual">
                  {t("partnership_option_individual")}
                </option>
              </select>
            </div>

            <Textarea
              label={t("partner_form_collaboration")}
              placeholder={t("partner_placeholder_collaboration")}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <Input
              label={t("form_website")}
              placeholder={t("placeholder_website")}
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </>
        )}

        {!isPartner && (
          <Textarea
            label={t("volunteer_form_motivation")}
            placeholder={t("volunteer_placeholder_motivation")}
            name="message"
            value={formData.message}
            onChange={handleChange}
            
            
          />
        )}

        {/*Button */}

        <button
          type="submit"
          className="group mt-auto w-[598px] max-md:w-full h-[48px] bg-[#018F4D] text-[#FCFBF8]
           font-marathi font-normal
           text-[18px] leading-[30.6px] tracking-[0.054px] py-[12px] rounded-[100px]
           shadow-[0_10px_40px_-10px_rgba(1,143,77,0.31)]
            flex items-center justify-center relative overflow-hidden hover:bg-[#0C7A3D]"
        >

          {/* Text */}
          <span className="transition-transform duration-300 group-hover:-translate-x-[8px]">
            {isPartner ? t("partner_submit") : t("volunteer_submit")}
          </span>

          {/* Arrow */}
          <span
            className="absolute right-[24px] opacity-0 translate-x-[-10px]
                       transition-all duration-200 group-hover:opacity-100 text-[14px]"
          >
            →
          </span>
        </button>
      </form>
    </section>
  );
}

/* INPUT */

function Input({ label, placeholder, ...props }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <label className="text-[#5B5B5B] text-[14px]">
        {label} <span className="text-[#E65100]">*</span>
      </label>
      <input
        {...props}
        required
        placeholder={placeholder}
        className="
        w-full max-w-[606px] h-[40px]

         bg-[#F6F7FB] border border-[#EEECE8]
         px-[14px] py-[10px]
         rounded-[10px]

         text-[12px] font-marathi text-[#5B5B5B]/40
         placeholder:text-[#A7A7A7]

         focus:outline-none"
      />
    </div>
  );
}

function Textarea({ label, placeholder, ...props }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <label className="text-[#5B5B5B] text-[14px] font-normal font-['Devanagari MT']">
        {label} <span className="text-[#E65100]">*</span>
      </label>
      <textarea
        {...props}
        required
        placeholder={placeholder}
        className="w-full max-w-[606px] bg-[#F6F7FB] border border-[#EEECE8]
        px-[16px] py-[14px] rounded-[10px] font-marathi text-[#5B5B5B]
        h-[118px] min-h-[80px] resize-none text-[12px] font-normal leading-[20px]
        focus:outline-none"
      />
    </div>
  );
}
