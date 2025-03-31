"use client";
import { motion } from "framer-motion";
import { FaBalanceScale, FaUsers, FaShieldAlt, FaUserTie, FaGift } from "react-icons/fa";

const discoverItems = [
  { id: "stability", label: "Dira’s Stability", icon: <FaBalanceScale className="w-5 text-sm" /> },
  { id: "governance", label: "Dira’s Governance", icon: <FaUsers className="w-5 text-sm" /> },
  { id: "overcollateralization", label: "Dira’s Overcollateralization", icon: <FaShieldAlt className="w-5 text-sm" /> },
  { id: "team", label: "Dira’s Team", icon: <FaUserTie className="w-5 text-sm" /> },
  { id: "incentives", label: "Dira’s Incentives", icon: <FaGift className="w-5 text-sm" /> },
];

export default function Discover({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  if (!isSidebarOpen) return null;

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-10 text-white text-sm pl-12">
        <div className="space-y-6 flex flex-col">
          {discoverItems.slice(0, Math.ceil(discoverItems.length / 2)).map(({ id, label, icon }) => (
            <motion.div
              key={id}
              whileHover={{ color: "#ffffff" }}
              className="flex items-start gap-3 cursor-pointer text-white/70 hover:text-white transition-colors"
            >
              <div className="w-6 flex justify-center">{icon}</div>
              <span>{label}</span>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6 flex flex-col">
          {discoverItems.slice(Math.ceil(discoverItems.length / 2)).map(({ id, label, icon }) => (
            <motion.div
              key={id}
              whileHover={{ color: "#ffffff" }}
              className="flex items-center gap-3 cursor-pointer text-white/70 hover:text-white transition-colors"
            >
              <div className="w-6 flex justify-center">{icon}</div>
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
