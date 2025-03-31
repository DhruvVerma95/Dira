"use client";
import { motion } from "framer-motion";
import { FaRedditAlien, FaFile, FaDiscord, FaXTwitter } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";

const communityLinks = [
  { id: "discord", icon: <FaDiscord className="w-5 text-base" />, label: "Discord" },
  { id: "telegram", icon: <RiSendPlaneFill className="w-5 text-base" />, label: "Telegram" },
  { id: "x", icon: <FaXTwitter className="w-5 text-base" />, label: "X" },
  { id: "reddit", icon: <FaRedditAlien className="w-5 text-base" />, label: "Reddit" },
  { id: "blog", icon: <FaFile className="w-5 text-base" />, label: "Blog" },
];

export default function Community({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  if (!isSidebarOpen) return null; 

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-10 text-white text-sm pl-12">
        <div className="space-y-6 flex flex-col">
          {communityLinks.slice(0, Math.ceil(communityLinks.length / 2)).map(({ id, icon, label }) => (
            <motion.div
              key={id}
              whileHover={{ color: "#ffffff" }}
              className="flex items-center gap-3 cursor-pointer text-white/70 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-6">{icon}</div>
                <span>{label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6 flex flex-col mx-8"> {/* Increased margin between the lists */}
          {communityLinks.slice(Math.ceil(communityLinks.length / 2)).map(({ id, icon, label }) => (
            <motion.div
              key={id}
              whileHover={{ color: "#ffffff" }}
              className="flex items-start cursor-pointer text-white/70 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-6">{icon}</div>
                <span>{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
