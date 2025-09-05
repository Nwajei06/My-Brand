// src/components/FloatingWhatsApp.js
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href="https://wa.me/2348131680922" // your WhatsApp number (country code, no +)
      className={`floating-whatsapp ${visible ? "visible" : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
