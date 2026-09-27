"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <section
      className={cn(
        "relative min-h-screen bg-white text-black flex items-center px-4 sm:px-6 lg:px-8 py-20 lg:py-28 overflow-hidden",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16",
        )}
      >
        <div
          className={cn("w-full lg:w-1/2 flex flex-col items-start text-left")}
        >
          <p
            className={cn(
              "text-xs text-[#F17463] sm:text-sm font-normal font-inter mb-3 sm:mb-4 tracking-normal",
            )}
          >
            For patients, doctors, and healthcare teams.
          </p>

          <h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-medium tracking-tight text-black leading-[1.12] sm:leading-[1.08]",
            )}
          >
            Organize and understand
            <br />
            your medical <span className={cn("text-[#F17463]")}>journey</span>
          </h1>

          <p
            className={cn(
              "mt-5 sm:mt-6 max-w-lg text-sm sm:text-[15px] text-zinc-500 font-normal leading-relaxed font-secondar",
            )}
          >
            We help patients and healthcare providers transform disconnected
            reports, prescriptions, and test results into a unified medical
            history
          </p>

          <div className={cn("mt-8 sm:mt-9 flex items-center gap-3")}>
            <button
              className={cn(
                "rounded-xl bg-charcoal-900 text-center text-white px-6 sm:px-7 py-2.5 sm:py-3 text-base font-medium transition-all duration-150 active:scale-[0.96] cursor-pointer shadow-sm",
              )}
            >
              Start building
            </button>

            <button
              className={cn(
                "rounded-xl text-center bg-white text-black border border-zinc-200 px-6 sm:px-7 py-2.5 sm:py-3 text-base font-medium hover:bg-[#eaedf1] hover:border-transparent transition-all duration-150 active:scale-[0.96] cursor-pointer",
              )}
            >
              View pricing
            </button>
          </div>

          <div
            className={cn(
              "mt-12 sm:mt-14 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-zinc-500 font-normal select-none",
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center w-7 h-7 text-black",
              )}
            >
              <img src={"/assets/logo.svg"} alt="MediSynth logo" />
            </div>

            <div
              className={cn(
                "flex items-center text-black hover:cursor-pointer",
              )}
              onMouseLeave={() => setHoveredStar(null)}
            >
              {[...Array(5)].map((_, i) => {
                const isFilled =
                  hoveredStar !== null ? i <= hoveredStar : false;
                return (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setHoveredStar(i)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    className={cn("flex items-center justify-center p-0.5")}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        d="M7.1141 2.01454C7.24855 1.74216 7.31577 1.60596 7.40703 1.56245C7.48644 1.52459 7.57869 1.52459 7.65809 1.56245C7.74935 1.60596 7.81658 1.74215 7.95103 2.01454L9.22659 4.59868C9.26628 4.6791 9.28613 4.7193 9.31513 4.75052C9.34081 4.77816 9.37161 4.80056 9.40582 4.81646C9.44446 4.83443 9.48882 4.84092 9.57756 4.85389L12.4308 5.27093C12.7313 5.31485 12.8815 5.33681 12.951 5.41019C13.0115 5.47404 13.0399 5.56177 13.0284 5.64897C13.0152 5.74919 12.9064 5.85512 12.6889 6.06699L10.6251 8.07718C10.5607 8.13984 10.5286 8.17117 10.5078 8.20845C10.4894 8.24146 10.4776 8.27773 10.4731 8.31523C10.4679 8.35759 10.4755 8.40185 10.4907 8.49037L10.9777 11.3297C11.0291 11.6291 11.0547 11.7789 11.0065 11.8677C10.9645 11.945 10.8898 11.9993 10.8033 12.0153C10.7039 12.0337 10.5695 11.963 10.3005 11.8216L7.74977 10.4802C7.6703 10.4384 7.63056 10.4175 7.58869 10.4093C7.55163 10.402 7.5135 10.402 7.47643 10.4093C7.43457 10.4175 7.39483 10.4384 7.31535 10.4802L4.76459 11.8216C4.49567 11.963 4.36121 12.0337 4.26179 12.0153C4.17528 11.9993 4.10064 11.945 4.05865 11.8677C4.01039 11.7789 4.03607 11.6291 4.08743 11.3297L4.5744 8.49037C4.58958 8.40185 4.59717 8.35759 4.59204 8.31523C4.58749 8.27773 4.5757 8.24146 4.55732 8.20845C4.53656 8.17117 4.5044 8.13984 4.44006 8.07718L2.37621 6.06699C2.15869 5.85512 2.04993 5.74919 2.03669 5.64897C2.02518 5.56177 2.05362 5.47404 2.11411 5.41019C2.18364 5.33681 2.33387 5.31485 2.63433 5.27093L5.48757 4.85389C5.5763 4.84092 5.62067 4.83443 5.6593 4.81646C5.69351 4.80056 5.72431 4.77816 5.74999 4.75052C5.779 4.7193 5.79884 4.6791 5.83854 4.59868L7.1141 2.01454Z"
                        animate={{
                          fill: isFilled ? "#000000" : "#ffffff",
                        }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        stroke="currentColor"
                        strokeWidth="1.16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                );
              })}
            </div>

            <span className={cn("text-zinc-300")}>|</span>
            <span className={cn("text-zinc-500")}>
              Innovative AI solution 2026 by{" "}
              <strong className={cn("text-black font-semibold")}>MKSV</strong>
            </span>
          </div>
        </div>

        <div
          className={cn(
            "w-full lg:w-1/2 flex items-center justify-center lg:justify-end",
          )}
        >
          <img
            src="/assets/hero.svg"
            alt="Women on chair illustration"
            width={700}
            height={700}
            className={cn(
              "w-full h-auto object-contain select-none pointer-events-none scale-110 sm:scale-125 xl:scale-135 origin-center transition-transform duration-300",
            )}
          />
        </div>
      </div>
    </section>
  );
};
