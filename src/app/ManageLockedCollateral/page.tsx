"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {Header} from "@/sections/Header"; // Import Header component
import Top from "@/sections/Top";

const ManageLockedCollateral = () => {
  const router = useRouter();

  return (
    <>
      <Top/> {/* Add Header component here */}
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)] pointer-events-none"></div>

        {/* Title */}
        <h1 className="text-3xl md:text-[72px] md:leading-snug font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Manage Locked Collateral
        </h1>

        <div>
        <h1> Hello </h1>
      </div>

        {/* Description */}
        <p className="mt-4 text-lg md:text-xl text-white/70 text-center max-w-2xl">
          Easily manage your locked collateral and monitor your assets securely.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg text-lg font-semibold"
          >
            Manage Collateral
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.back()}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-lg"
          >
            Go Back
          </motion.button>
        </div>
      </motion.div>
      
    </>
  );
};

export default ManageLockedCollateral;
