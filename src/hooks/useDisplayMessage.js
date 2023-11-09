import { useState } from "react";

export const useDisplayMessage = (timeDelay = 2000) => {
  //State
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Comportement
  const displayMessage = () =>
    setIsSubmitted(true);
  setTimeout(() => {
    setIsSubmitted(false);
  }, timeDelay);
  return {
    isSubmitted,
    displayMessage
  }
};