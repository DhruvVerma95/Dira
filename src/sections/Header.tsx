"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LogoIcon from "@/assets/logo.svg";
import Button from "@/components/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  onSidebarToggle: () => void;
  sidebarOpen: boolean;
  handleSidebarOpen: (content: string) => void;
  selectedNav: string;
  setSelectedNav: (nav: string) => void;
}

export const Header = ({
  onSidebarToggle,
  sidebarOpen,
  handleSidebarOpen,
  selectedNav,
  setSelectedNav,
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-4 border-b border-white/15 md:border-none sticky top-0 z-50 transition-all ${
        isScrolled ? "bg-transparent backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="max-w-5xl w-full mx-auto px-4 relative">
        <div className="flex justify-between items-center md:border border-white/15 md:p-3 rounded-xl relative w-full">
          {/* Logo - Navigate to Home */}
          <div
            className="border h-12 w-12 rounded-lg inline-flex justify-center items-center border-white/15 cursor-pointer"
            onClick={() => {
              router.push("/");
              setSelectedNav("home");
              window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scrolling to top
            }}
          >
            <LogoIcon className="h-10 w-10" />
          </div>

          {/* Mobile Sidebar Toggle */}
          <button
            onClick={onSidebarToggle}
            className="block md:hidden text-white"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Navigation for larger screens */}
          <nav className="hidden md:flex gap-6 text-sm items-center flex-grow justify-center">
            {[
              { id: "Home", label: "Home", path: "/" },
              { id: "Community", label: "Community" },
              { id: "Discover", label: "Discover" },
              { id: "Github", label: "Github" },
            ].map(({ id, label, path }) => (
              <button
                key={id}
                onClick={() => {
                  if (id === "Home") {
                    router.push(path!);
                    setSelectedNav("home");
                    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Smooth scroll to top
                  } else {
                    handleSidebarOpen(id);
                  }
                }}
                className={`transition ${
                  selectedNav === id ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* "Use Dira" Button */}
          <div className="hidden md:flex items-center">
            <Button>Use Dira</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
