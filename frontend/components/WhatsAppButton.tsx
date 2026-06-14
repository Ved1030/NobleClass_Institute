"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const whatsappUrl = `https://wa.me/919820023732?text=${encodeURIComponent('Hello! I would like to know more about Noble Classes.')}`;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ y: -4, scale: 1.05 }}
          className="fixed bottom-6 right-6 z-[9999] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-[20px] flex items-center justify-center"
          style={{ boxShadow: '0 10px 25px rgba(37,211,102,0.25)' }}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
