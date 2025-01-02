import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-twilight py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <img src="/lovable-uploads/0de3b4f1-5b63-4160-9688-553bca27a930.png" alt="DreamKey Logo" className="h-12 w-auto mb-4" />
            <p className="text-lightText/80 font-inter">
              Your gateway to lucid dreaming and endless possibilities
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-lightText hover:text-moonlight transition-colors">Privacy Policy</a>
            <a href="#" className="text-lightText hover:text-moonlight transition-colors">Terms</a>
            <a href="#" className="text-lightText hover:text-moonlight transition-colors">Contact</a>
          </div>
          <div className="flex justify-end space-x-6">
            <Facebook className="w-6 h-6 text-lightText hover:text-moonlight cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-lightText hover:text-moonlight cursor-pointer transition-colors" />
            <Instagram className="w-6 h-6 text-lightText hover:text-moonlight cursor-pointer transition-colors" />
            <Youtube className="w-6 h-6 text-lightText hover:text-moonlight cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};