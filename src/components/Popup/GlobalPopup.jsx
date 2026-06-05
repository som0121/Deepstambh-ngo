import React from "react";
import { usePopup } from "../../context/PopupContext";

import SubscribePopup from "./SubscribePopup";
import VolunteerPopup from "./VolunteerPopup";
import ContactPopup from "./ContactPopup";

export default function GlobalPopup() {
  const { showPopup, popupType, closePopup } = usePopup();

  if (!showPopup) return null;

  return (
    <div
      className="
      fixed inset-0
      bg-black/50
      z-[9999]
      flex items-center justify-center
      p-[20px]
      overflow-hidden
      "
    >
      {popupType === "subscribe" && <SubscribePopup onClose={closePopup} />}

      {popupType === "volunteer" && <VolunteerPopup onClose={closePopup} />}

      {popupType === "contact" && <ContactPopup onClose={closePopup} />}
    </div>
  );
}
