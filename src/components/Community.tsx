"use client";
import { motion } from "framer-motion";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa"; // Blog icon

const communityLinks = [
  { id: "discord", icon: <FaDiscord className="text-base" />, label: "Discord" },
  { id: "telegram", icon: <RiSendPlaneFill className="text-base" />, label: "Telegram" },
  { id: "x", icon: <FaXTwitter className="text-base" />, label: "X" },
  { id: "reddit", icon: <FaRedditAlien className="text-base" />, label: "Reddit" },
  { id: "blog", icon: <FaRegNewspaper className="text-base" />, label: "Blog" },
];

export default function Community({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  if (!isSidebarOpen) return null; // Prevent rendering when sidebar is closed

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-24 text-white text-sm w-full max-w-md pl-12">

        {/* Left Column (Stacked Items) */}
        <div className="space-y-6 text-left flex flex-col">
          {communityLinks.slice(0, Math.ceil(communityLinks.length / 2)).map(({ id, icon, label }) => (
            <motion.div
              key={id}
              whileHover={{ color: "#ffffff" }}
              className="flex items-center gap-3 cursor-pointer text-white/70 hover:text-white transition-colors"
            >
              {icon}
              <span>{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Right Column (Left-aligned) */}
        <div className="space-y-6 text-left flex flex-col">
          {communityLinks.slice(Math.ceil(communityLinks.length / 2)).map(({ id, icon, label }) => (
            <motion.div
              key={id}
              whileHover={{ color: "#ffffff" }}
              className="flex items-center gap-3 cursor-pointer text-white/70 hover:text-white transition-colors"
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
