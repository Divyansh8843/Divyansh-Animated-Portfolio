"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { achievements } from "@/data";
import { IoClose } from "react-icons/io5";

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.96,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const AchievementModal = ({ achievement, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl mt-20 border border-cyan-500/20"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-red-500 transition-colors border border-cyan-500/20 hover:border-cyan-500/40"
        >
          <IoClose className="w-6 h-6 text-white cursor-pointer" />
        </button>
        <div className="relative h-[400px] w-full">
          <Image
            src={achievement.images[0]}
            alt={achievement.title}
            fill
            className="object-center object-fill"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="p-8 relative">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={achievement.badge}
                alt="badge"
                className="text-4xl text-yellow-400 drop-shadow-glow h-12 w-12"
              />
            </motion.div>
            <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {achievement.title}
            </h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AchievementCard = ({ achievement, index, onCardClick }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = achievement.images;

  useEffect(() => {
    const timer = setTimeout(() => {
      setImgIdx((prev) => (prev + 1) % images.length);
    }, 2600);
    return () => clearTimeout(timer);
  }, [imgIdx, images.length]);

  return (
    <motion.div
      className="relative w-full min-w-[350px] cursor-pointer"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={index}
      onClick={() => onCardClick(achievement)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-transparent group mx-auto"
        style={{
          background:
            "linear-gradient(120deg, rgba(6,182,212,0.14) 0%, rgba(255,255,255,0.06) 100%)",
          backdropFilter: "blur(18px)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />

        <motion.span
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            boxShadow: "0 0 24px 0 #22d3ee88, 0 0 0 4px #22d3ee22",
            borderImage: "linear-gradient(100deg, #06b6d4 0%, #fff 100%) 1",
          }}
          animate={{
            boxShadow: isHovered
              ? [
                  "0 0 24px 0 #22d3ee88, 0 0 0 4px #22d3ee22",
                  "0 0 32px 0 #22d3eeaa, 0 0 0 4px #22d3ee44",
                ]
              : "0 0 24px 0 #22d3ee88, 0 0 0 4px #22d3ee22",
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div className="relative h-64 w-full bg-black/40 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[imgIdx]}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Image
                src={images[imgIdx]}
                alt="Achievement"
                fill
                className="object-center object-fill"
                quality={100}
                style={{ borderRadius: "1rem" }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setImgIdx(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border border-cyan-400/60 ${
                  i === imgIdx ? "bg-cyan-400" : "bg-white/20"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-20 p-7 flex flex-col items-center text-center bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <motion.div
            whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mb-4"
          >
            <img
              src={achievement.badge}
              alt="badge"
              className="text-4xl text-yellow-400 drop-shadow-glow h-10 w-10"
            />
          </motion.div>
          <h3 className="text-gray-300 text-sm mb-3 line-clamp-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {achievement.title}
          </h3>
          <p className="text-white text-sm mb-3 line-clamp-2">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Achievements() {
  const shouldAnimate = achievements.length > 3;
  const animationDistance = achievements.length * 400;
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <motion.section
      id="achievements"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12 py-20 scroll-mt-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 animate-gradient" />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      >
        <span className="bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
          Achievements
        </span>
      </motion.h2>

      <div
        className={`w-full overflow-hidden relative ${
          shouldAnimate ? "" : "flex justify-center"
        }`}
      >
        <motion.div
          className={`flex gap-8 px-4 ${shouldAnimate ? "" : "max-w-7xl"}`}
          animate={
            shouldAnimate
              ? {
                  x: [0, -animationDistance],
                }
              : {}
          }
          transition={
            shouldAnimate
              ? {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }
              : {}
          }
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
              onCardClick={setSelectedAchievement}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedAchievement && (
          <AchievementModal
            achievement={selectedAchievement}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </AnimatePresence>

      <style jsx global>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #22d3ee) drop-shadow(0 0 2px #06b6d4);
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </motion.section>
  );
}
