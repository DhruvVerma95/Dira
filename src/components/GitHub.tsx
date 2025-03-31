"use client";
import { motion } from "framer-motion";
import { FaBook, FaCodeBranch, FaBug, FaFolderOpen, FaUsers } from "react-icons/fa"; // Importing icons

const githubItems = [
  { id: "repo1", label: "Project Repository", icon: <FaFolderOpen className="text-sm" /> },
  { id: "repo2", label: "Documentation", icon: <FaBook className="text-sm" /> },
  { id: "repo3", label: "Contribute", icon: <FaUsers className="text-sm" /> },
  { id: "repo4", label: "Issues", icon: <FaBug className="text-sm" /> },
  { id: "repo5", label: "Pull Requests", icon: <FaCodeBranch className="text-sm" /> },
];

export default function GitHub({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  if (!isSidebarOpen) return null; // Prevent rendering when sidebar is closed

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-24 text-white text-sm items-start w-full max-w-md pl-12">
        {/* Left Column */}
        <div className="space-y-6 text-left flex flex-col">
          {githubItems.slice(0, Math.ceil(githubItems.length / 2)).map(({ id, label, icon }) => (
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
          {githubItems.slice(Math.ceil(githubItems.length / 2)).map(({ id, label, icon }) => (
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
