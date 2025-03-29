"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Community from "@/components/Community";
import Link from "next/link";

// Define prop types
interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
  preventCloseOnExpand?: boolean;
}

const menuItems = [
  { id: "community", label: "Community" },
  { id: "github", label: "Github", link: "https://github.com" },
  { id: "discord", label: "Discord", link: "https://discord.com" },
];

export default function SidebarMobile({
  isOpen,
  onClose,
  preventCloseOnExpand = false, // Default to false
}: SidebarMobileProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        if (!preventCloseOnExpand) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose, preventCloseOnExpand]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          ref={sidebarRef}
          className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg border border-white/15 shadow-lg rounded-b-2xl p-6 text-white z-50"
        >
          <div className="flex justify-between items-center mb-4">
            <button onClick={onClose} className="text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            {menuItems.map(({ id, label, link }) => (
              <div key={id} className="border-b border-white/20 pb-2">
                {link ? (
                  <Link href={link} target="_blank" className="text-white/80 hover:text-white block">
                    {label}
                  </Link>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent sidebar from closing
                      setExpandedSection(expandedSection === id ? null : id);
                    }}
                    className="text-white/80 hover:text-white w-full text-left"
                  >
                    {label}
                  </button>
                )}

                {expandedSection === "community" && id === "community" && (
                  <div className="mt-2 pl-4">
                    <Community isSidebarOpen={true} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
