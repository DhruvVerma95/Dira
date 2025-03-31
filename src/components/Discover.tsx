"use client";
import { motion } from "framer-motion";
import { FaBalanceScale, FaUsers, FaShieldAlt, FaUserTie, FaGift } from "react-icons/fa"; // Importing icons

const discoverItems = [
  { id: "stability", label: "Dira’s Stability", icon: <FaBalanceScale className="text-sm" /> },
  { id: "governance", label: "Dira’s Governance", icon: <FaUsers className="text-sm" /> },
  { id: "overcollateralization", label: "Dira’s Overcollateralization", icon: <FaShieldAlt className="text-sm" /> },
  { id: "team", label: "Dira’s Team", icon: <FaUserTie className="text-sm" /> },
  { id: "incentives", label: "Dira’s Incentives", icon: <FaGift className="text-sm" /> },
];

export default function Discover({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  if (!isSidebarOpen) return null; // Prevent rendering when sidebar is closed

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-10 text-white text-sm pl-12">
        {/* Left Column */}
        <div className="space-y-6 text-left flex flex-col">
          {discoverItems.slice(0, Math.ceil(discoverItems.length / 2)).map(({ id, label, icon }) => (
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

        {/* Right Column */}
        <div className="space-y-6 text-left flex flex-col">
          {discoverItems.slice(Math.ceil(discoverItems.length / 2)).map(({ id, label, icon }) => (
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
