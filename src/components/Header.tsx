import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-twilight/90 backdrop-blur-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/lovable-uploads/0de3b4f1-5b63-4160-9688-553bca27a930.png" alt="DreamKey Logo" className="h-16 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-lightText hover:text-moonlight transition-colors">Features</a>
          <a href="#benefits" className="text-lightText hover:text-moonlight transition-colors">Benefits</a>
          <a href="#download" className="text-lightText hover:text-moonlight transition-colors">Download</a>
        </nav>
        <button className="bg-gradient-to-r from-twilight to-darkText text-lightText px-6 py-2 rounded-full hover:shadow-lg hover:from-darkText hover:to-twilight transition-all duration-300 border border-lightText/20">
          Get Started
        </button>
      </div>
    </header>
  );
};