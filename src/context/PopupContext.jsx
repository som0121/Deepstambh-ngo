import React, {createContext,useContext,useEffect,useState,useRef,} from "react";

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(null);

  const POPUP_TYPES = ["subscribe", "volunteer", "contact"];

  const LANDING_DELAY = 5 * 60 * 1000; 
  const PAGE_DELAY = 8 * 60 * 1000; 
  const RANDOM_DELAY = 2 * 60 * 1000; 

  const landingTimerRef = useRef(null);
  const pageTimerRef = useRef(null);
  const randomIntervalRef = useRef(null);

  const getRandomPopup = () => {
    return POPUP_TYPES[Math.floor(Math.random() * POPUP_TYPES.length)];
  };

  useEffect(() => {
    landingTimerRef.current = setTimeout(() => {
      setPopupType(getRandomPopup());
      setShowPopup(true);
    }, LANDING_DELAY);

    return () => clearTimeout(landingTimerRef.current);
  }, []);

  useEffect(() => {
    randomIntervalRef.current = setInterval(() => {
      setPopupType(getRandomPopup());
      setShowPopup(true);
    }, RANDOM_DELAY);

    return () => clearInterval(randomIntervalRef.current);
  }, []);

  const triggerPagePopup = () => {
    if (pageTimerRef.current) return;

    pageTimerRef.current = setTimeout(() => {
      setPopupType(getRandomPopup());
      setShowPopup(true);
    }, PAGE_DELAY);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <PopupContext.Provider
      value={{
        showPopup,
        popupType,
        closePopup,
        triggerPagePopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export const usePopup = () => useContext(PopupContext);
