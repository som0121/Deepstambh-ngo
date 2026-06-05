import React, { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import taskIcon from "../../assets/task.svg";
import mailIcon from "../../assets/mail.svg";
import downloadIcon from "../../assets/download.svg";
import backIcon from "../../assets/back.svg";

export default function Donate() {
  const { t } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    purpose: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const [popupStage, setPopupStage] = useState("processing");

  const [showCustomAmount, setShowCustomAmount] = useState(false);

  const [showReceipt, setShowReceipt] = useState(false);

  const [receiptData, setReceiptData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAmountSelect = (value) => {
    if (value === "other") {
      setShowCustomAmount(true);
      setFormData({
        ...formData,
        amount: "",
      });
    } else {
      setShowCustomAmount(false);
      setFormData({
        ...formData,
        amount: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionId = Math.floor(
      10000000 + Math.random() * 90000000,
    ).toString();


    const today = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });


    const receipt = {
      name: formData.name,
      email: formData.email,
      amount: formData.amount,
      purpose: formData.purpose,
      transactionId: transactionId,

    maskedTransactionId:
    transactionId.slice(0, 3) +
     "*****" +
    transactionId.slice(-2),

      date: today,
      paymentMethod: "**** 4242",
    };

    setReceiptData(receipt);

    setShowPopup(true);

    setPopupStage("processing");


    setTimeout(() => {
      setPopupStage("success");


      setTimeout(() => {
        setShowReceipt(true);
      }, 1500);
    }, 1200);

    setShowCustomAmount(false);
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <header
        className="w-full h-[268px] py-[70px] pb-[55px] text-center
        max-[576px]:py-[48px] max-[576px]:pb-[22px] 
        bg-[linear-gradient(96deg,#FFF7F0_0%,#FFF_109.16%)]"
      >
        <div className="max-w-[1200px] mx-auto px-[24px]">
          <h1
            className="text-[#E65100] font-['Devanagari MT']
            text-[36px] font-bold mb-[12px] leading-[40px]
            max-[992px]:text-[30px] max-[576px]:text-[26px]"
          >
            {t("donate_hero_title")}
          </h1>

          <p
            className="text-[#5B5B5B] max-w-[1205px]
            mx-auto leading-[38.4px] tracking-[0.072px] text-[24px]
            font-marathi font-normal"
          >
            {t("donate_hero_sub")}
          </p>
        </div>
      </header>

      {/* FORM SECTION */}
      <section className="bg-[#FFF] py-[80px] px-[20px]">
        <div className="max-w-[1200px] mx-auto px-[24px] flex justify-center items-start">
          {!showReceipt && (
            <div
              className="
              w-[685px] max-md:w-full
              min-h-[768px]

              bg-[#FFF] 
              rounded-[12px] 
              border border-[#E9E7E2]
              shadow-[0_1px_2px_rgba(0,0,0,0.05)]

              pt-[49px] 
              pr-[33px] 
              pl-[33px] 
              pb-[33px]

              flex flex-col gap-[18px]"
            >
              {/* SHOW FORM */}
              {!showPopup && (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-[24px]"
                >
                  {/* NAME */}
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-[#5B5B5B] font-normal font-['Devanagari MT']">
                      {t("donate_form_name")}{" "}
                      <span className="text-[#E65100]">*</span>
                    </span>

                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("donate_ph_name")}
                      required
                      className="bg-[#F6F7FB] border border-[#EEECE8]  h-[40px]
                    px-[14px] py-[12px] rounded-[10px] text-[12px] font-marathi font-normal text-[#5B5B5B]
                    w-full max-w-[619px] focus:outline-none"
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-[#5B5B5B] font-normal font-['Devanagari MT']">
                      {t("donate_form_email")}{" "}
                      <span className="text-[#E65100]">*</span>
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("donate_ph_email")}
                      required
                      className="bg-[#F6F7FB] border border-[#EEECE8] 
                                 px-[14px] py-[12px] rounded-[10px] text-[12px] font-marathi font-normal
                                  text-[#5B5B5B] w-full max-w-[619px] h-[40px] focus:outline-none"
                    />
                  </div>

                  {/* PHONE */}
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-[#5B5B5B] font-medium font-['Devanagari MT']">
                      {t("donate_form_phone")}{" "}
                      <span className="text-[#E65100]">*</span>
                    </span>

                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("donate_ph_phone")}
                      required
                      className="bg-[#F6F7FB] border border-[#EEECE8]
                    px-[14px] py-[12px] rounded-[10px]  text-[12px] font-marathi font-normal text-[#5B5B5B]
                    w-full max-w-[619px] h-[40px] focus:outline-none"
                    />
                  </div>

                  {/* AMOUNT */}
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-[#5B5B5B] font-medium font-['Devanagari MT']">
                      {t("donate_form_amount")}{" "}
                      <span className="text-[#E65100]">*</span>
                    </span>

                    <div className="flex gap-[10px]">
                      {[
                        { label: "₹ 10,000", value: "10000" },
                        { label: "₹ 5,000", value: "5000" },
                        { label: t("donate_amount_other"), value: "other" },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.value}
                          onClick={() => handleAmountSelect(item.value)}
                          className={`px-[16px] h-[36px] rounded-[10px]
                        border border-[#EEECE8] bg-[#F6F7FB]
                        text-[14px] font-medium transition-all 
                        ${
                          formData.amount === item.value
                            ? "border-[#018F4D] text-[#018F4D]"
                            : ""
                        }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* CUSTOM INPUT */}
                    {showCustomAmount && (
                      <input
                        type="number"
                        placeholder="Enter amount"
                        value={formData.amount}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            amount: e.target.value,
                          })
                        }
                        className="bg-[#F6F7FB] border border-[#EEECE8]
                      px-[14px] py-[12px] rounded-[10px]  text-[12px] font-marathi font-normal text-[#5B5B5B]
                     w-full max-w-[619px] h-[40px] focus:outline-none"
                      />
                    )}
                  </div>

                  {/* PURPOSE */}
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] font-medium font-['Devanagari MT'] text-[#5B5B5B]">
                      {t("donate_form_purpose")}{" "}
                      <span className="text-[#E65100]">*</span>
                    </span>

                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      required
                      className="bg-[#F6F7FB] text-[#5B5B5B]/40 border border-[#EEECE8]
                    px-[14px] py-[12px] rounded-[10px]  text-[12px] font-marathi font-normal text-[#5B5B5B]
                    w-full max-w-[619px] h-[40px] focus:outline-none"
                    >
                      <option value="">{t("donate_ph_purpose")}</option>
                      <option>General Fund (Use Where Needed Most)</option>
                      <option>Education Support</option>
                      <option>Women Empowerment Programs</option>
                      <option>Skill Development & Training</option>
                      <option>Health & Hygiene Initiatives</option>
                      <option>Environmental Activities</option>
                      <option>Sports & Youth Development</option>
                      <option>Community Welfare Programs</option>
                      <option>Events & Campaigns Support</option>
                    </select>
                  </div>

                  {/* MESSAGE */}

                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-[#5B5B5B] font-medium font-['Devanagari MT']">
                      {t("donate_form_message")} {" "}
                    </span>
                  
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("donate_ph_message")}

                    className="bg-[#F6F7FB] border border-[#EEECE8]
                  px-[14px] py-[12px] rounded-[10px] text-[14px] w-full max-w-[619px]
                  h-[118px] mt-[8px] font-marathi resize-none font-normal text-[#5B5B5B] focus:outline-none"
                  />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="bg-[#018F4D] text-[#FCFBF8]
                  px-[48px] py-[12px] rounded-[100px] mt-[10px]
                  font-medium text-[18px] font-marathi w-full h-[48px] hover:bg-[#0C7A3D]"
                  >
                    {t("donate_submit")}
                  </button>
                </form>
              )}

              {/* SHOW ANIMATION */}
              
              {showPopup && !showReceipt && (
                <div className="w-full max-w-[580px] h-[180px] flex flex-col items-center justify-center flex-1 py-[40px] text-center">

                  <div className="w-[144px] h-[144px] flex items-center justify-center">
                    {popupStage === "processing" && (
                      <img
                        src={taskIcon}
                        className="w-[144px] h-[144px] animate-spin"
                      />
                    )}

                    {popupStage === "success" && (
                      <svg
                        className="w-[144px] h-[144px] overflow-visible"
                        viewBox="0 0 60 60"
                        fill="none"
                      >

                        {/* CIRCLE */}
                        <circle
                          cx="30"
                          cy="30"
                          r="26"
                          fill="none"
                          stroke="#018F4D"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray="163"
                          strokeDashoffset="163"
                          className="animate-[drawCircle_0.8s_ease_forwards]"
                        />

                        {/* TICK */}
                        <path
                          fill="none"
                          stroke="#018F4D"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 31 L26 40 L44 21"
                          strokeDasharray="60"
                          strokeDashoffset="60"
                          className="animate-[drawTick_0.4s_0.8s_ease_forwards]"
                        />
                      </svg>
                    )}
                  </div>

                  <p className="text-[#5B5B5B] text-[24px] font-marathi uppercase mt-[20px]">
                    {popupStage === "processing"
                      ? t("donate_popup_processing")
                      : t("donate_popup_message")}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* RECEIPT */}
        {showReceipt && receiptData && (
         <div className="w-full flex justify-center items-center px-[16px]">

            <div
              className="
                  w-[465px] h-[734px]
                  max-md:w-[90%] max-md:h-auto
                  bg-[#FFF] border border-black/10 rounded-[14px]
                  p-[24px] max-md:p-[18px]
                  flex flex-col items-center"
            >
              {/* SUCCESS ICON */}
              <div
                className="w-[64px] h-[64px] bg-[#DCFCE7] rounded-full 
              flex items-center justify-center mb-[20px]"
              >
                <svg width="28" height="28" viewBox="0 0 60 60" fill="none">
                  <circle
                    cx="30"
                    cy="30"
                    r="26"
                    stroke="#00A63E"
                    strokeWidth="3"
                    strokeDasharray="163"
                    strokeDashoffset="163"
                    className="animate-[drawCircle_0.6s_ease_forwards]"
                  />

                  <path
                    d="M17 31 L26 40 L44 21"
                    stroke="#00A63E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="60"
                    strokeDashoffset="60"
                    className="animate-[drawTick_0.4s_0.6s_ease_forwards]"
                  />
                </svg>
              </div>

              {/* TITLE */}

              <h2
                className="text-[#00A63E] text-[24px] font-['Inter'] 
              font-medium leading-[36px] tracking-[0.07px]
               text-center"
              >
                Payment Successful!
              </h2>

              {/* SUBTEXT */}

              <p
                className="w-[379px] max-md:w-full font-['Inter'] font-normal text-[#717182]
               text-[16px] 
               leading-[24px] tracking-[-0.312px]
               text-center mt-[4px]
               mb-[24px]"
              >
                Your payment has been processed successfully. You will receive a
                confirmation email shortly.
              </p>

              {/* DETAILS BOX */}
              <div
                className="w-full bg-[rgba(236,236,240,0.5)] rounded-[10px] p-[16px]
               flex flex-col self-stretch gap-[12px]"
              >
                {/* Amount */}
                <div
                  className="flex justify-between items-center pb-[12px] 
                border-b border-black/10"
                >
                  <span
                    className="text-[#717182] text-[16px] font-['Inter']
                  leading-[24px] tracking-[-0.312px] font-normal"
                  >
                    Amount
                  </span>

                  <span
                    className="text-[#0A0A0A] text-[18px] font-normal font-['Inter']
                  leading-[28px] tracking-[-0.439px]"
                  >
                    ₹{receiptData.amount}
                  </span>
                </div>

                {/* Transaction ID */}

                <div className="flex justify-between items-center">


                  <span className="text-[#717182] text-[16px] font-['Inter'] font-normal 
                  leading-[24px] tracking-[-0.312px]">
                    Transaction ID
                  </span>

                  <span
                    className="w-[146px] max-md:w-[120px] h-[21px] flex items-center justify-center 
                   bg-[#FFF] border border-black/10 
                   rounded-[8px] px-[12px] py-[2px] 
                   text-[#0A0A0A] text-[12px] font-['Inter'] font-medium leading-[16px]"
                  >
                    {receiptData.maskedTransactionId}
                  </span>
                </div>

                {/* Payment Method */}
                <div className="flex justify-between items-center pb-[12px]">
                  <span className="text-[#717182] text-[16px] font-['Inter'] font-normal 
                  leading-[24px] tracking-[-0.312px]">
                    Payment Method
                  </span>

                  <span className="text-[#0A0A0A] text-[16px] font-['Inter'] font-normal
                  leading-[24px] tracking-[-0.312px]">
                    {receiptData.paymentMethod}
                  </span>
                </div>

                {/* Date */}
                <div className="flex justify-between items-center pb-[12px]">
                  <span className="text-[#717182] text-[16px] font-['Inter'] font-normal
                  leading-[24px] tracking-[-0.312px]">
                    
                    Date</span>

                  <span className="text-[#0A0A0A] text-[16px] font-['Inter'] font-normal
                  leading-[24px] tracking-[-0.312px]">
                    {receiptData.date}
                  </span>
                </div>

                {/* Purpose */}
                <div className="flex justify-between items-center">
                  <span className="text-[#717182] text-[16px] font-['Inter']
                  font-normal leading-[24px] tracking-[-0.312px]">
                    Donation</span>

                  <span className="w-[146px]
                               overflow-hidden
                              text-center
                              text-ellipsis
                              whitespace-nowrap
                              flex-shrink-0
                              text-[#0A0A0A]
                              font-['Inter']
                              text-[16px] max-md:text-[14px]
                              font-normal
                              leading-[24px]
                              tracking-[-0.312px] ">
                    {receiptData.purpose}
                  </span>
                  
                </div>
              </div>

              {/* EMAIL BAR */}
              <div
                className="w-[401px] h-[44px] max-md:w-full bg-[#EFF6FF] rounded-[10px] py-[10px] 
                flex items-center justify-center gap-[8px] mt-[26px]"
              >
                <img src={mailIcon} className="w-[16px] h-[16px]" />

                <span className="text-[#717182] text-[14px] font-['Inter'] font-normal
                leading-[20px] tracking-[-0.15px]">
                  Receipt sent to {receiptData.email}
                </span>
              </div>

              {/* DOWNLOAD BUTTON */}
              <button
                className="w-[401px] h-[40px] max-md:w-full mt-[30px] bg-[#030213] text-[#FFF] rounded-[8px] 
               py-[10px] flex items-center justify-center gap-[17px] font-['Inter'] font-medium
               leading-[20px] tracking-[-0.15px]"
              >
                <img src={downloadIcon} />
                Download Receipt
              </button>

              {/* BACK BUTTON */}
              <button
                onClick={() => {
                  setShowPopup(false);
                  setShowReceipt(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    amount: "",
                    purpose: "",
                    message: "",
                  });
                }}
                className="w-[401px] h-[40px] max-md:w-full mt-[10px] border border-black/10 
                rounded-[8px] py-[10px]  fpnt-['Inter'] font-medium leading-[20px] tracking-[-0.15px]
                flex items-center justify-center gap-[8px]"
              >
                <img src={backIcon} />
                Back
              </button>

              {/* FOOTER */}
              <p className="text-[#717182] text-[12px] font-['Inter'] font-normal 
              
              leading-[16px] text-center mt-[16px]">
                Need help? Contact our support team at Deepastambh@support.com
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
