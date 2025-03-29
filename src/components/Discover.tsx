"use client";
import { motion } from "framer-motion";

const discoverItems = [
  { id: "stability", label: "Dira’s Stability" },
  { id: "governance", label: "Dira’s Governance" },
  { id: "overcollateralization", label: "Dira’s Overcollateralization" },
  { id: "team", label: "Dira’s Team" },
  { id: "incentives", label: "Dira’s Incentives" },
];

export default function Discover({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  if (!isSidebarOpen) return null; // Prevent rendering when sidebar is closed

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-8 text-white text-sm">
        {/* Left Column */}
        <div className="space-y-4 text-center">
          {discoverItems.slice(0, Math.ceil(discoverItems.length / 2)).map(({ id, label }) => (
            <motion.div
              key={id}
              whileHover={{ color: "#ffffff" }}
              className="cursor-pointer text-white/70 hover:text-white transition-colors"
            >
              {label}
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4 text-center">
          {discoverItems.slice(Math.ceil(discoverItems.length / 2)).map(({ id, label }) => (
            <motion.div
              key={id}
              whileHover={{ color: "#ffffff" }}
              className="cursor-pointer text-white/70 hover:text-white transition-colors"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
