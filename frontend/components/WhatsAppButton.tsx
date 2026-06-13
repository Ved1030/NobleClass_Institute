"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/919820023732?text=${encodeURIComponent('Hello! I would like to know more about Noble Classes.')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center shadow-green-600/30 hover:shadow-green-600/50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
