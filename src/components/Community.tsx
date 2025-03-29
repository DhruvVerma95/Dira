"use client";
import { motion } from "framer-motion";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const communityLinks = [
  { id: "discord", icon: <FaDiscord size={24} />, label: "Discord" },
  { id: "telegram", icon: <RiSendPlaneFill size={24} />, label: "Telegram" },
  { id: "x", icon: <FaXTwitter size={24} />, label: "X" },
  { id: "reddit", icon: <FaRedditAlien size={24} />, label: "Reddit" },
  { id: "blog", icon: <FaXTwitter size={24} />, label: "Blog" },
];

export default function Community({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-8 text-white text-sm">
        {/* Left Column */}
        <div className="space-y-4 text-center">
          {communityLinks.slice(0, Math.ceil(communityLinks.length / 2)).map(({ id, icon, label }) => (
            <motion.div
              key={id}
              whileHover={{ color: "#ffffff" }}
              className="flex items-center gap-3 cursor-pointer text-white/70 hover:text-white transition-colors justify-center"
            >
              {icon}
              <span>{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4 text-center">
          {communityLinks.slice(Math.ceil(communityLinks.length / 2)).map(({ id, icon, label }) => (
            <motion.div
              key={id}
              whileHover={{ color: "#ffffff" }}
              className="flex items-center gap-3 cursor-pointer text-white/70 hover:text-white transition-colors justify-center"
            >
              {icon}
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
