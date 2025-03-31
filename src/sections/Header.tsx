"use client";
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
  const router = useRouter();

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-50 w-full">
      <div className="w-full flex justify-center">
        {/* Fixed 5xl Border Box */}
        <div className="w-full max-w-5xl flex justify-between backdrop-blur-md items-center border border-white/15 p-3 rounded-xl">
          {/* Logo */}
          <div
            className="border h-12 w-12 rounded-lg flex justify-center items-center border-white/15 cursor-pointer"
            onClick={() => {
              router.push("/");
              setSelectedNav("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <LogoIcon className="h-10 w-10" />
          </div>

          {/* Mobile Sidebar Toggle */}
          <button onClick={onSidebarToggle} className="block md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-sm items-center flex-grow justify-center">
            {[
              { id: "Community", label: "Community" },
              { id: "Discover", label: "Discover" },
              { id: "Github", label: "Github" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleSidebarOpen(id)}
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
            <a href="https://dira-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button>Use Dira</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
