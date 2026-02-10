import revolutLogo from "@/assets/revolut-logo.png";
import { Bell, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-background">
      <img src={revolutLogo} alt="Revolut" className="h-6" />
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-secondary transition-colors">
          <Bell size={20} className="text-foreground" />
        </button>
        <button className="p-2 rounded-full hover:bg-secondary transition-colors">
          <Menu size={20} className="text-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
