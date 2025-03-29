"use client";
import Image from "next/image";
import DiraLogo from "@/assets/DiraLogoResized.png"; // Import PNG

const DiraLogoComponent = () => {  // Renamed the component
  return <Image src={DiraLogo} alt="Dira Logo" width={300} height={300} priority />;
};

export default DiraLogoComponent;
