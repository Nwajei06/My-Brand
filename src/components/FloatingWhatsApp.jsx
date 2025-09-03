// src/components/FloatingWhatsApp.js
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {Link } from 'react-router-dom'

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <Link
      to="https://wa.me/2348012345678" // <-- replace with your number (country code, no +)
      className={`floating-whatsapp ${visible ? "visible" : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={26} />
    </Link>
  );
}
