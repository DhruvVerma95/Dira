"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Header } from "@/sections/Header";
import Community from "@/components/Community";
import Discover from "@/components/Discover";
import GitHub from "@/components/GitHub";

export default function Top() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<string | null>(null);
  const [selectedNav, setSelectedNav] = useState<string>("home");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
        setSidebarContent(null);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  const handleSidebarOpen = (id: string) => {
    if (id === "Home") {
      setSidebarOpen(false);
      setSidebarContent(null);
      setSelectedNav("Home");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSidebarContent(id);
    setSidebarOpen(true);
    setSelectedNav(id);
  };

  return (
    <div className="relative">
      {/* Header */}
      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        <Header
          onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
          handleSidebarOpen={handleSidebarOpen}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        />
      </div>

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed z-40 w-full flex justify-center px-4 mt-1"
            style={{ top: (headerRef.current?.offsetHeight || 0) + "px" }}
          >
            {/* Centered Sidebar Box */}
            <div className="border border-white/20 rounded-2xl p-12 shadow-xl flex flex-col items-center space-y-6 w-full max-w-4xl backdrop-blur-lg min-h-[200px]">
              {/* Smooth Transition Between Components */}
              <div className="w-full relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={sidebarContent}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute w-full"
                  >
                    {sidebarContent === "Community" && <Community isSidebarOpen={sidebarOpen} />}
                    {sidebarContent === "Discover" && <Discover isSidebarOpen={sidebarOpen} />}
                    {sidebarContent === "Github" && <GitHub isSidebarOpen={sidebarOpen} />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Padding to prevent content overlap */}
      <div style={{ paddingTop: headerRef.current?.offsetHeight || 0 }} />
    </div>
  );
}