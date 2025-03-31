"use client";
import { motion } from "framer-motion";
import { FaBook, FaCodeBranch, FaBug, FaFolderOpen, FaUsers } from "react-icons/fa";

const githubItems = [
  { id: "repo1", label: "Project Repository", icon: <FaFolderOpen className="w-5 text-sm" /> },
  { id: "repo2", label: "Documentation", icon: <FaBook className="w-5 text-sm" /> },
  { id: "repo3", label: "Contribute", icon: <FaUsers className="w-5 text-sm" /> },
  { id: "repo4", label: "Issues", icon: <FaBug className="w-5 text-sm" /> },
  { id: "repo5", label: "Pull Requests", icon: <FaCodeBranch className="w-5 text-sm" /> },
];

export default function GitHub({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  if (!isSidebarOpen) return null;

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 gap-10 text-white text-sm pl-12">
        <div className="space-y-6 flex flex-col">
          {githubItems.slice(0, Math.ceil(githubItems.length / 2)).map(({ id, label, icon }) => (
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

        <div className="space-y-6 flex flex-col">
          {githubItems.slice(Math.ceil(githubItems.length / 2)).map(({ id, label, icon }) => (
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
