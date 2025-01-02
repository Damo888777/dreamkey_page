import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-twilight py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/0de3b4f1-5b63-4160-9688-553bca27a930.png" 
              alt="DreamKey Logo" 
              className="h-16 sm:h-20 w-auto" 
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="text-lightText hover:text-moonlight transition-colors">Privacy Policy</a>
            <a href="#" className="text-lightText hover:text-moonlight transition-colors">Terms</a>
            <a href="#" className="text-lightText hover:text-moonlight transition-colors">Contact</a>
          </div>
          <div className="flex justify-center md:justify-end space-x-4 sm:space-x-6">
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-lightText hover:text-moonlight cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-lightText hover:text-moonlight cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-lightText hover:text-moonlight cursor-pointer transition-colors" />
            <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-lightText hover:text-moonlight cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};