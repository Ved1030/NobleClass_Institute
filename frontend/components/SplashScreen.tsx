"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setSplashVisible(false);
    }, 1500);

    return () => clearTimeout(exitTimer);
  }, []);

  useEffect(() => {
    if (splashVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [splashVisible]);

  return (
    <>
      {children}
      <AnimatePresence>
        {splashVisible && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #F5FAFF 50%, #FFFFFF 100%)",
            }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(0,93,170,0.05) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute top-1/3 right-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(11,116,209,0.03) 0%, transparent 70%)",
                }}
              />
            </div>

            <div className="relative flex flex-col items-center px-6">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-5 md:mb-6"
              >
                <svg
                  viewBox="0 0 80 80"
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
                  fill="none"
                  stroke="#005DAA"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    d="M40 12 L74 33 L40 54 L6 33 Z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M40 22 L60 33 L40 44 L20 33 Z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.25, ease: "easeInOut", delay: 0.15 }}
                  />
                  <motion.path
                    d="M40 12 L74 33 L40 54 L6 33 Z"
                    fill="#005DAA"
                    fillOpacity="0.06"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15, delay: 0.3 }}
                  />
                  <motion.circle
                    cx="40"
                    cy="33"
                    r="3"
                    fill="#005DAA"
                    stroke="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15, delay: 0.3 }}
                  />
                  <motion.path
                    d="M40 36 L40 56 Q40 64 48 66"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.25, ease: "easeInOut", delay: 0.2 }}
                  />
                  <motion.path
                    d="M48 66 L52 68"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.15, ease: "easeInOut", delay: 0.35 }}
                  />
                </svg>
              </motion.div>

              <div className="relative mb-1">
                <motion.h1
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                  className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-noble-blue text-center"
                >
                  Labbdhis Academy
                </motion.h1>
                <motion.div
                  className="absolute inset-0 pointer-events-none overflow-hidden rounded"
                  initial={{ x: "-120%" }}
                  animate={{ x: "220%" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="absolute inset-y-0 w-20 sm:w-28 bg-gradient-to-r from-transparent via-blue-300/25 to-transparent blur-md" />
                </motion.div>
              </div>

              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-[#64748B] font-medium tracking-wide mb-8 sm:mb-10"
              >
                Where learning is Journey
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.7 }}
                className="w-36 sm:w-44 h-0.5 bg-gray-200 rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.7, delay: 0.7, ease: "easeInOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: "#005DAA" }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
