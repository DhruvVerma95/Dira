"use client";
import { motion } from "framer-motion";

const githubItems = [
  { id: "repo1", label: "Project Repository" },
  { id: "repo2", label: "Documentation" },
  { id: "repo3", label: "Contribute" },
  { id: "repo4", label: "Issues" },
  { id: "repo5", label: "Pull Requests" },
];

export default function GitHub({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  if (!isSidebarOpen) return null; // Prevent rendering when sidebar is closed

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-8 text-white text-sm">
        {/* Left Column */}
        <div className="space-y-4 text-center">
          {githubItems.slice(0, Math.ceil(githubItems.length / 2)).map(({ id, label }) => (
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
          {githubItems.slice(Math.ceil(githubItems.length / 2)).map(({ id, label }) => (
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
